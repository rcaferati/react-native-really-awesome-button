import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import {
  ActivityIndicator,
  Pressable,
  View,
  Animated,
  Text,
  LayoutChangeEvent,
} from 'react-native';
import {
  animateTiming,
  animateElastic,
  animateSpring,
  animateLoop,
} from './helpers';
import debounce from 'lodash.debounce';
import { styles, getStyles } from './styles';
import {
  ANIMATED_TIMING_LOADING,
  ANIMATED_TIMING_OFF,
  DEFAULT_ACTIVITY_COLOR,
  DEFAULT_ACTIVE_OPACITY,
  DEFAULT_BACKGROUND_ACTIVE,
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_BACKGROUND_DARKER,
  DEFAULT_BACKGROUND_SHADOW,
  DEFAULT_BORDER_RADIUS,
  DEFAULT_BORDER_WIDTH,
  DEFAULT_DEBOUNCED_PRESS_TIME,
  DEFAULT_HEIGHT,
  DEFAULT_HORIZONTAL_PADDING,
  DEFAULT_LINE_HEIGHT,
  DEFAULT_RAISE_LEVEL,
  DEFAULT_TEXT_COLOR,
  DEFAULT_TEXT_SIZE,
  DEFAULT_WIDTH,
} from './constants';

type AfterPressFn = (callback: () => void) => void;

export type ButtonTypes = {
  activityColor?: string;
  activeOpacity?: number;
  backgroundActive?: string;
  backgroundColor?: string;
  backgroundDarker?: string;
  backgroundPlaceholder?: string;
  backgroundProgress?: string;
  backgroundShadow?: string;
  borderColor?: string;
  borderRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  debouncedPressTime?: number;
  borderLeftBottomRadius?: number;
  borderWidth?: number;
  progressLoadingTime?: number;
  ExtraContent?: any;
  disabled?: boolean;
  height?: number;
  paddingHorizontal?: number;
  paddingTop?: number;
  progress?: boolean;
  before?: ReactNode;
  after?: ReactNode;
  paddingBottom?: number;
  raiseLevel?: number;
  springRelease?: boolean;
  stretch?: boolean;
  style?: any;
  textFontFamily?: string;
  textColor?: string;
  textLineHeight?: number;
  textSize?: number;
  textFamily?: string;
  width?: number | null;
  children?: string | ReactNode;
  onPress?: (afterPressFn?: AfterPressFn) => void;
};

const Placeholder = ({ style }: any) => {
  const animating = useRef(false);
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (width > 0 && animating.current === false) {
      animating.current = true;
      animateLoop({
        variable: animatedValue,
        toValue: 1,
      });
    }
  }, [width]);

  return (
    <View
      style={[styles.container__placeholder, ...style]}
      onLayout={(event) => {
        setWidth(event.nativeEvent.layout.width);
      }}
    >
      <Animated.View
        testID="aws-btn-content-placeholder"
        style={[
          ...style,
          styles.container__placeholder__bar,
          {
            transform: [
              {
                translateX: animatedValue.interpolate({
                  inputRange: [0, 0.2, 0.5, 0.7, 1],
                  outputRange: [
                    width * -1,
                    width * -1,
                    width,
                    width,
                    width * -1,
                  ],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
};

const AwesomeButton = ({
  activityColor = DEFAULT_ACTIVITY_COLOR,
  activeOpacity = DEFAULT_ACTIVE_OPACITY,
  backgroundActive = DEFAULT_BACKGROUND_ACTIVE,
  backgroundColor = DEFAULT_BACKGROUND_COLOR,
  backgroundDarker = DEFAULT_BACKGROUND_DARKER,
  backgroundPlaceholder = DEFAULT_BACKGROUND_SHADOW,
  backgroundProgress = DEFAULT_BACKGROUND_SHADOW,
  backgroundShadow = DEFAULT_BACKGROUND_SHADOW,
  borderColor,
  borderRadius = DEFAULT_BORDER_RADIUS,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderWidth = DEFAULT_BORDER_WIDTH,
  children = null,
  before = null,
  after = null,
  disabled = false,
  height = DEFAULT_HEIGHT,
  debouncedPressTime = DEFAULT_DEBOUNCED_PRESS_TIME,
  paddingHorizontal = DEFAULT_HORIZONTAL_PADDING,
  onPress = () => null,
  progress = false,
  paddingBottom = 0,
  paddingTop = 0,
  progressLoadingTime = ANIMATED_TIMING_LOADING,
  raiseLevel = DEFAULT_RAISE_LEVEL,
  springRelease = true,
  stretch = false,
  style = null,
  textColor = DEFAULT_TEXT_COLOR,
  textLineHeight = DEFAULT_LINE_HEIGHT,
  textSize = DEFAULT_TEXT_SIZE,
  textFontFamily,
  width = DEFAULT_WIDTH,
  ExtraContent = null,
}: ButtonTypes) => {
  const loadingOpacity = useRef(new Animated.Value(1)).current;
  const textOpacity = useRef(new Animated.Value(1)).current;
  const activityOpacity = useRef(new Animated.Value(0)).current;
  const animatedActive = useRef(new Animated.Value(0)).current;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animatedLoading = useRef(new Animated.Value(0)).current;
  const animatedOpacity = useRef(
    new Animated.Value(width === null && !stretch === true ? 0 : 1)
  ).current;
  const pressing = useRef(false);
  const pressed = useRef(false);
  const actioned = useRef(false);
  const progressing = useRef(false);
  const timeout = useRef<number | null>(null);
  const containerWidth = useRef<number | null>(null);
  const pressAnimation = useRef<Animated.CompositeAnimation | null>(null);
  const [activity, setActivity] = useState(false);
  const [stateWidth, setStateWidth] = useState<number | null>(null);
  const debouncedPress = useRef(
    debouncedPressTime
      ? debounce(
          (animateProgressEnd: any = null) => onPress(animateProgressEnd),
          debouncedPressTime,
          {
            trailing: false,
            leading: true,
          }
        )
      : onPress
  );

  const layout = {
    backgroundActive,
    backgroundColor,
    backgroundDarker,
    backgroundPlaceholder,
    backgroundProgress,
    backgroundShadow,
    borderColor,
    borderRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderWidth,
    height,
    paddingBottom,
    paddingHorizontal,
    paddingTop,
    raiseLevel,
    stateWidth,
    stretch,
    textColor,
    textFontFamily,
    textLineHeight,
    textSize,
    width,
  };

  const dynamicStyles: any = useMemo(() => {
    return getStyles(layout);
  }, [
    backgroundActive,
    backgroundColor,
    backgroundDarker,
    backgroundPlaceholder,
    backgroundProgress,
    backgroundShadow,
    borderColor,
    borderRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderWidth,
    height,
    paddingBottom,
    paddingHorizontal,
    paddingTop,
    raiseLevel,
    stateWidth,
    stretch,
    textColor,
    textFontFamily,
    textLineHeight,
    textSize,
    width,
  ]);

  const getAnimatedValues = () => {
    let width = containerWidth.current ? containerWidth.current * -1 : 0;

    return {
      animatedContainer: {
        opacity: animatedOpacity,
      },
      animatedShadow: {
        transform: [
          {
            translateY: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -raiseLevel / 2],
            }),
          },
        ],
      },
      animatedContent: {
        transform: [
          {
            translateY: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, raiseLevel],
            }),
          },
        ],
      },
      animatedActive: {
        opacity: animatedActive,
      },
      animatedActivity: {
        opacity: activityOpacity,
        transform: [
          {
            scale: activityOpacity,
          },
        ],
      },
      animatedProgress: {
        opacity: loadingOpacity,
        transform: [
          {
            translateX: animatedLoading.interpolate({
              inputRange: [0, 1],
              outputRange: [width, 0],
            }),
          },
        ],
      },
    };
  };

  const onTextLayout = (event: LayoutChangeEvent) => {
    containerWidth.current = event.nativeEvent.layout.width;
    animatedOpacity.setValue(1);

    if (width !== null && stretch === false) {
      return;
    }

    if (
      stateWidth !== event.nativeEvent.layout.width &&
      (stateWidth === null || stateWidth < event.nativeEvent.layout.width)
    ) {
      setStateWidth(event.nativeEvent.layout.width);
    }
  };

  const animatePressIn = useCallback(() => {
    pressing.current = true;

    pressAnimation.current = Animated.parallel([
      animateTiming({
        variable: animatedValue,
        toValue: 1,
        duration: ANIMATED_TIMING_OFF,
      }),
      animateTiming({
        variable: animatedActive,
        toValue: 1,
        duration: ANIMATED_TIMING_OFF,
      }),
      animateTiming({
        variable: animatedOpacity,
        toValue: progress ? 1 : activeOpacity,
        duration: ANIMATED_TIMING_OFF,
      }),
    ]);

    pressAnimation.current.start(() => {
      pressed.current = true;
      pressing.current = false;
    });
  }, []);

  const animateLoadingStart = () => {
    animatedLoading.setValue(0);
    animateTiming({
      variable: animatedLoading,
      toValue: 1,
      duration: progressLoadingTime,
    }).start();
  };

  const animateContentOut = () => {
    Animated.parallel([
      animateTiming({
        variable: loadingOpacity,
        toValue: 1,
      }),
      animateElastic({
        variable: textOpacity,
        toValue: 0,
      }),
      animateElastic({
        variable: activityOpacity,
        toValue: 1,
      }),
    ]).start();
  };

  const animateProgressEnd = (callback: any) => {
    if (progress !== true) {
      return;
    }
    if (timeout?.current) {
      clearTimeout(timeout.current);
    }

    requestAnimationFrame(() => {
      animateTiming({
        variable: animatedLoading,
        toValue: 1,
      }).start(() => {
        Animated.parallel([
          animateElastic({
            variable: textOpacity,
            toValue: 1,
          }),
          animateElastic({
            variable: activityOpacity,
            toValue: 0,
          }),
          animateTiming({
            variable: loadingOpacity,
            toValue: 0,
            delay: 100,
          }),
        ]).start(() => {
          animateRelease(() => {
            progressing.current = false;
            callback && callback();
          });
        });
      });
    });
  };

  const animateRelease = (callback?: any) => {
    if (pressAnimation.current) {
      pressAnimation.current.stop();
    }

    pressed.current = false;
    pressing.current = false;

    if (springRelease === true) {
      Animated.parallel([
        animateSpring({
          variable: animatedActive,
          toValue: 0,
        }),
        animateSpring({
          variable: animatedValue,
          toValue: 0,
        }),
        animateTiming({
          variable: animatedOpacity,
          toValue: 1,
        }),
      ]).start(() => {
        pressed.current = false;
        pressing.current = false;
        callback && callback();
      });
      return;
    }

    Animated.parallel([
      animateTiming({
        variable: animatedActive,
        toValue: 0,
        duration: ANIMATED_TIMING_OFF,
      }),
      animateTiming({
        variable: animatedValue,
        toValue: 0,
        duration: ANIMATED_TIMING_OFF,
      }),
      animateTiming({
        variable: animatedOpacity,
        toValue: 1,
      }),
    ]).start(() => {
      callback && callback();
    });
  };

  const startProgress = () => {
    progressing.current = true;
    setActivity(true);
    animateLoadingStart();
    animateContentOut();
  };

  const press = () => {
    actioned.current = true;
    if (progressing.current === true) {
      return;
    }

    if (progress === true) {
      requestAnimationFrame(startProgress);
    }

    debouncedPress.current(animateProgressEnd);
  };

  const handlePressIn = useCallback(() => {
    if (
      disabled === true ||
      !children ||
      progressing.current === true ||
      pressed.current === true
    ) {
      return;
    }

    animatePressIn();
  }, [disabled, children]);

  const handlePressOut = useCallback(
    (event) => {
      if (disabled === true || !children || progressing.current === true) {
        return;
      }

      if (event.nativeEvent && event.nativeEvent.contentOffset) {
        animateRelease();
        return;
      }

      if (pressed.current === true || raiseLevel === 0) {
        press();

        if (progress === true) {
          return;
        }
      }

      animateRelease();
    },
    [raiseLevel, children, progress, onPress]
  );

  const animatedValues = getAnimatedValues();

  const renderActivity = useMemo(() => {
    if (activity === false) {
      return null;
    }

    return (
      <>
        <Animated.View
          testID="aws-btn-progress"
          style={[
            styles.progress,
            dynamicStyles.progress,
            animatedValues.animatedProgress,
          ]}
        />
        <Animated.View
          testID="aws-btn-activity-indicator"
          style={[styles.container__activity, animatedValues.animatedActivity]}
        >
          <ActivityIndicator color={activityColor} />
        </Animated.View>
      </>
    );
  }, [activity]);

  const renderContent = useMemo(() => {
    const animatedStyles = {
      opacity: textOpacity,
      transform: [
        {
          scale: textOpacity,
        },
      ],
    };

    if (!children) {
      return <Placeholder style={[dynamicStyles.container__placeholder]} />;
    }

    let content = children;

    if (typeof children === 'string') {
      content = (
        <Text
          testID="aws-btn-content-text"
          style={[styles.container__text, dynamicStyles.container__text]}
        >
          {children}
        </Text>
      );
    }

    return (
      <Animated.View
        style={[
          styles.container__view,
          dynamicStyles.container__view,
          animatedStyles,
        ]}
      >
        {before && before}
        {content}
        {after && after}
      </Animated.View>
    );
  }, [children, before, after, textColor]);

  return (
    <Pressable
      testID="aws-btn-content-view"
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        testID="aws-btn-content-2"
        style={[
          styles.container,
          dynamicStyles.container,
          animatedValues.animatedContainer,
          style,
        ]}
      >
        <Animated.View
          testID="aws-btn-shadow"
          style={[
            styles.shadow,
            dynamicStyles.shadow,
            animatedValues.animatedShadow,
          ]}
        />
        <View
          testID="aws-btn-bottom"
          style={[styles.bottom, dynamicStyles.bottom]}
        />
        <Animated.View
          testID="aws-btn-content"
          style={[
            styles.content,
            dynamicStyles.content,
            animatedValues.animatedContent,
          ]}
        >
          <View
            testID="aws-btn-text"
            style={[styles.text, dynamicStyles.text]}
            onLayout={onTextLayout}
          >
            {ExtraContent}
            <Animated.View
              testID="aws-btn-active-background"
              style={[
                styles.activeBackground,
                dynamicStyles.activeBackground,
                animatedValues.animatedActive,
              ]}
            />
            {renderActivity}
            {renderContent}
          </View>
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

export default AwesomeButton;
