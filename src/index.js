import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  ActivityIndicator,
  TouchableWithoutFeedback,
  View,
  Animated,
  ViewPropTypes
} from "react-native";
import { animateTiming, animateElastic, animateSpring } from "./helpers";
import { styles, getStyles } from "./styles";
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
  DEFAULT_HEIGHT,
  DEFAULT_HORIZONTAL_PADDING,
  DEFAULT_LINE_HEIGHT,
  DEFAULT_RAISE_LEVEL,
  DEFAULT_TEXT_COLOR,
  DEFAULT_TEXT_SIZE,
  DEFAULT_WIDTH,
  DEFAULT_RELEASE_DELAY
} from "./constants";

export default class Button extends React.Component {
  static propTypes = {
    activityColor: PropTypes.string,
    backgroundActive: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundDarker: PropTypes.string,
    backgroundPlaceholder: PropTypes.string,
    backgroundProgress: PropTypes.string,
    backgroundShadow: PropTypes.string,
    borderColor: PropTypes.string,
    borderRadius: PropTypes.number,
    borderBottomLeftRadius: PropTypes.number,
    borderBottomRightRadius: PropTypes.number,
    borderTopLeftRadius: PropTypes.number,
    borderTopRightRadius: PropTypes.number,
    borderLeftBottomRadius: PropTypes.number,
    borderWidth: PropTypes.number,
    children: PropTypes.node,
    ExtraContent: PropTypes.node,
    disabled: PropTypes.bool,
    height: PropTypes.number,
    paddingHorizontal: PropTypes.number,
    onPress: PropTypes.func,
    progress: PropTypes.bool,
    paddingBottom: PropTypes.number,
    raiseLevel: PropTypes.number,
    springRelease: PropTypes.bool,
    stretch: PropTypes.bool,
    style: ViewPropTypes.style,
    textColor: PropTypes.string,
    textLineHeight: PropTypes.number,
    textSize: PropTypes.number,
    textFamily: PropTypes.string,
    width: PropTypes.number
  };

  static defaultProps = {
    activityColor: DEFAULT_ACTIVITY_COLOR,
    activeOpacity: DEFAULT_ACTIVE_OPACITY,
    backgroundActive: DEFAULT_BACKGROUND_ACTIVE,
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    backgroundDarker: DEFAULT_BACKGROUND_DARKER,
    backgroundImage: null,
    backgroundPlaceholder: DEFAULT_BACKGROUND_SHADOW,
    backgroundProgress: DEFAULT_BACKGROUND_SHADOW,
    backgroundShadow: DEFAULT_BACKGROUND_SHADOW,
    borderColor: null,
    borderRadius: DEFAULT_BORDER_RADIUS,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderWidth: DEFAULT_BORDER_WIDTH,
    children: null,
    disabled: false,
    height: DEFAULT_HEIGHT,
    paddingHorizontal: DEFAULT_HORIZONTAL_PADDING,
    onPress: null,
    progress: false,
    paddingBottom: 0,
    paddingTop: 0,
    progressLoadingTime: ANIMATED_TIMING_LOADING,
    raiseLevel: DEFAULT_RAISE_LEVEL,
    springRelease: true,
    stretch: false,
    style: null,
    textColor: DEFAULT_TEXT_COLOR,
    textLineHeight: DEFAULT_LINE_HEIGHT,
    textSize: DEFAULT_TEXT_SIZE,
    textFontFamily: null,
    width: DEFAULT_WIDTH
  };

  constructor(props) {
    super(props);
    this.loadingOpacity = new Animated.Value(1);
    this.textOpacity = new Animated.Value(1);
    this.activityOpacity = new Animated.Value(0);
    this.animatedActive = new Animated.Value(0);
    this.animatedValue = new Animated.Value(0);
    this.animatedLoading = new Animated.Value(0);
    this.animatedOpacity = new Animated.Value(
      props.width === null && !props.stretch == true ? 0 : 1
    );
    this.layouted = null;
    this.animating = false;
    this.timeout = null;
    this.pressing = false;
    this.containerWidth = null;

    this.state = {
      activity: false,
      width: null
    };
  }

  getAnimatedValues() {
    let width = this.containerWidth ? this.containerWidth * -1 : 0;

    return {
      animatedContainer: {
        opacity: this.animatedOpacity
      },
      animatedShadow: {
        transform: [
          {
            translateY: this.animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -this.props.raiseLevel / 2]
            })
          }
        ]
      },
      animatedContent: {
        transform: [
          {
            translateY: this.animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, this.props.raiseLevel]
            })
          }
        ]
      },
      animatedActive: {
        opacity: this.animatedActive
      },
      animatedActivity: {
        opacity: this.activityOpacity,
        transform: [
          {
            scale: this.activityOpacity
          }
        ]
      },
      animatedProgress: {
        opacity: this.loadingOpacity,
        transform: [
          {
            translateX: this.animatedLoading.interpolate({
              inputRange: [0, 1],
              outputRange: [width, 0]
            })
          }
        ]
      }
    };
  }

  pressIn = () => {
    if (
      this.props.disabled === true ||
      !this.props.children ||
      this.animating === true
    ) {
      return false;
    }
    this.pressing = true;
    if (this.props.progress) {
      this.animating = true;
    }
    animateTiming({
      variable: this.animatedValue,
      toValue: 1,
      duration: ANIMATED_TIMING_OFF
    });
    animateTiming({
      variable: this.animatedActive,
      toValue: 1,
      duration: ANIMATED_TIMING_OFF
    });
    animateTiming({
      variable: this.animatedOpacity,
      toValue: this.props.progress ? 1 : this.props.activeOpacity,
      duration: ANIMATED_TIMING_OFF,
      callback: () => {
        this.pressing = false;
      }
    });
  };

  pressOut = () => {
    if (this.props.disabled === true || !this.props.children) {
      return false;
    }
    if (this.animating === true) {
      this.press();
      return;
    }
    if (this.pressing === false) {
      this.press();
      this.release();
      return;
    }
    this.timeout = setTimeout(() => {
      this.press();
      this.release();
    }, ANIMATED_TIMING_OFF / 2.5);
  };

  press = () => {
    if (this.props.progress === true) {
      this.animating = true;
      this.setState(
        {
          activity: true
        },
        () => {
          this.animateLoadingStart();
          animateTiming({
            variable: this.loadingOpacity,
            toValue: 1
          });
          animateElastic({
            variable: this.textOpacity,
            toValue: 0
          });
          animateElastic({
            variable: this.activityOpacity,
            toValue: 1
          });
        }
      );
    }
    if (this.props.onPress) {
      this.props.onPress(this.end);
    }
  };

  end = callback => {
    if (this.props.progress === true) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        animateTiming({
          variable: this.animatedLoading,
          toValue: 1,
          callback: () => {
            animateElastic({
              variable: this.textOpacity,
              toValue: 1
            });
            animateElastic({
              variable: this.activityOpacity,
              toValue: 0,
              callback: () => {
                callback && callback();
              }
            });
            animateTiming({
              variable: this.loadingOpacity,
              toValue: 0,
              delay: 100,
              callback: () => {
                this.release(() => {
                  this.animating = false;
                });
              }
            });
          }
        });
      }, 50);
    }
  };

  release(callback) {
    if (this.props.springRelease === true) {
      animateSpring({
        variable: this.animatedActive,
        toValue: 0
      });
      animateSpring({
        variable: this.animatedValue,
        toValue: 0,
        callback
      });
      animateTiming({
        variable: this.animatedOpacity,
        toValue: 1,
        duration: ANIMATED_TIMING_OFF
      });
      return;
    }
    animateTiming({
      variable: this.animatedActive,
      toValue: 0,
      duration: ANIMATED_TIMING_OFF
    });
    animateTiming({
      variable: this.animatedOpacity,
      toValue: 1,
      duration: ANIMATED_TIMING_OFF
    });
    animateTiming({
      variable: this.animatedValue,
      toValue: 0,
      duration: ANIMATED_TIMING_OFF,
      callback
    });
  }

  animateLoadingStart() {
    this.animatedLoading.setValue(0);
    animateTiming({
      variable: this.animatedLoading,
      toValue: 1,
      duration: this.props.progressLoadingTime
    });
  }

  textLayout = event => {
    this.containerWidth = event.nativeEvent.layout.width;
    if (this.props.width === null && !this.props.stretch == true) {
      if (
        this.state.width !== event.nativeEvent.layout.width &&
        this.state.width < event.nativeEvent.layout.width
      ) {
        this.setState({
          width: event.nativeEvent.layout.width
        });
      }
      this.animatedOpacity.setValue(1);
    }
  };

  renderContent(dynamicStyles) {
    const { children } = this.props;
    const animatedStyles = {
      opacity: this.textOpacity,
      transform: [
        {
          scale: this.textOpacity
        }
      ]
    };

    if (!children) {
      return (
        <Animated.View
          testID="aws-btn-content-placeholder"
          style={[
            styles.container__placeholder,
            dynamicStyles.container__placeholder,
            animatedStyles
          ]}
        />
      );
    }
    if (typeof children === "string") {
      return (
        <Animated.Text
          testID="aws-btn-content-text"
          style={[
            styles.container__text,
            dynamicStyles.container__text,
            animatedStyles
          ]}
        >
          {children}
        </Animated.Text>
      );
    }
    return (
      <Animated.View
        style={[
          styles.container__view,
          dynamicStyles.container__view,
          animatedStyles
        ]}
      >
        {children}
      </Animated.View>
    );
  }

  render() {
    const animatedValues = this.getAnimatedValues();
    const dynamicStyles = getStyles({
      ...this.props,
      stateWidth: this.state.width
    });
    const { ExtraContent, style, activityColor } = this.props;

    return (
      <TouchableWithoutFeedback
        testID="aws-btn-content-view"
        onPressIn={this.pressIn}
        onPressOut={this.pressOut}
      >
        <Animated.View
          testID="aws-btn-content-2"
          style={[
            styles.container,
            dynamicStyles.container,
            animatedValues.animatedContainer,
            style
          ]}
        >
          <Animated.View
            testID="aws-btn-shadow"
            style={[
              styles.shadow,
              dynamicStyles.shadow,
              animatedValues.animatedShadow
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
              animatedValues.animatedContent
            ]}
          >
            <View
              testID="aws-btn-text"
              style={[styles.text, dynamicStyles.text]}
              onLayout={this.textLayout}
            >
              {ExtraContent}
              <Animated.View
                testID="aws-btn-active-background"
                style={[
                  styles.activeBackground,
                  dynamicStyles.activeBackground,
                  animatedValues.animatedActive
                ]}
              />
              {this.state.activity === true && (
                <Fragment>
                  <Animated.View
                    testID="aws-btn-progress"
                    style={[
                      styles.progress,
                      dynamicStyles.progress,
                      animatedValues.animatedProgress
                    ]}
                  />
                  <Animated.View
                    testID="aws-btn-activity-indicator"
                    style={[
                      styles.container__activity,
                      animatedValues.animatedActivity
                    ]}
                  >
                    <ActivityIndicator color={activityColor} />
                  </Animated.View>
                </Fragment>
              )}
              {this.renderContent(dynamicStyles)}
            </View>
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}
