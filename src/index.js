import React from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  TouchableWithoutFeedback,
  View,
  Animated,
  ViewPropTypes,
} from 'react-native';
import {
  animateTiming,
  animateElastic,
  animateSpring,
} from './helpers';
import { styles, getStyles } from './styles';
import {
  ANIMATED_TIMING_LOADING,
  ANIMATED_TIMING_OFF,
  DEFAULT_ACTIVITY_COLOR,
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
} from './constants';

export default class Button extends React.Component {
  static propTypes = {
    activityColor: PropTypes.string,
    backgroundActive: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundDarker: PropTypes.string,
    backgroundPlaceholder: PropTypes.string,
    backgroundProgress: PropTypes.string,
    backgroundShadow: PropTypes.string,
    borderColor: PropTypes.string,
    borderRadius: PropTypes.number,
    borderWidth: PropTypes.number,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    height: PropTypes.number,
    horizontalPadding: PropTypes.number,
    onPress: PropTypes.func,
    progress: PropTypes.bool,
    raiseLevel: PropTypes.number,
    springRelease: PropTypes.bool,
    style: ViewPropTypes.style,
    textColor: PropTypes.string,
    textLineHeight: PropTypes.number,
    textSize: PropTypes.number,
    width: PropTypes.number,
  };

  static defaultProps = {
    activityColor: DEFAULT_ACTIVITY_COLOR,
    backgroundActive: DEFAULT_BACKGROUND_ACTIVE,
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    backgroundDarker: DEFAULT_BACKGROUND_DARKER,
    backgroundPlaceholder: DEFAULT_BACKGROUND_SHADOW,
    backgroundProgress: DEFAULT_BACKGROUND_SHADOW,
    backgroundShadow: DEFAULT_BACKGROUND_SHADOW,
    borderColor: null,
    borderRadius: DEFAULT_BORDER_RADIUS,
    borderWidth: DEFAULT_BORDER_WIDTH,
    children: null,
    disabled: false,
    height: DEFAULT_HEIGHT,
    horizontalPadding: DEFAULT_HORIZONTAL_PADDING,
    onPress: null,
    progress: false,
    raiseLevel: DEFAULT_RAISE_LEVEL,
    springRelease: true,
    style: null,
    textColor: DEFAULT_TEXT_COLOR,
    textLineHeight: DEFAULT_LINE_HEIGHT,
    textSize: DEFAULT_TEXT_SIZE,
    width: DEFAULT_WIDTH,
  };

  constructor(props) {
    super(props);
    this.loadingOpacity = new Animated.Value(1);
    this.textOpacity = new Animated.Value(1);
    this.activityOpacity = new Animated.Value(0);
    this.animatedActive = new Animated.Value(0);
    this.animatedValue = new Animated.Value(0);
    this.animatedLoading = new Animated.Value(0);
    this.animating = false;
    this.timeout = null;
    this.state = {
      activity: false,
      width: null,
    };
  }

  getAnimatedValues() {
    const width = this.props.width || this.state.width || 0;
    return {
      animatedShadow: {
        transform: [
          {
            translateY: this.animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -this.props.raiseLevel / 2],
            }),
          },
        ],
      },
      animatedContent: {
        transform: [
          {
            translateY: this.animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, this.props.raiseLevel],
            }),
          },
        ],
      },
      animatedActive: {
        opacity: this.animatedActive,
      },
      animatedActivity: {
        opacity: this.activityOpacity,
        transform: [{
          scale: this.activityOpacity,
        }],
      },
      animatedProgress: {
        opacity: this.loadingOpacity,
        transform: [
          {
            translateX: this.animatedLoading.interpolate({
              inputRange: [0, 1],
              outputRange: [-width, 0],
            }),
          },
        ],
      },
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
    animateTiming({
      variable: this.animatedValue,
      toValue: 1,
      duration: ANIMATED_TIMING_OFF,
    });
    animateTiming({
      variable: this.animatedActive,
      toValue: 1,
      duration: ANIMATED_TIMING_OFF,
    });
  }

  pressOut = () => {
    if (
      this.props.disabled === true ||
      !this.props.children ||
      this.animating === true
    ) {
      return false;
    }
    this.timeout = setTimeout(() => {
      this.release();
    }, 100);
  }

  press = () => {
    if (
      this.props.disabled === true ||
      !this.props.children ||
      this.animating === true
    ) {
      return false;
    }
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    if (this.props.progress === true) {
      this.animating = true;
      this.setState({
        activity: true,
      }, () => {
        this.animateLoadingStart();
        animateTiming({
          variable: this.loadingOpacity,
          toValue: 1,
        });
        animateElastic({
          variable: this.textOpacity,
          toValue: 0,
        });
        animateElastic({
          variable: this.activityOpacity,
          toValue: 1,
        });
      });
    } else {
      this.release();
    }
    if (this.props.onPress) {
      this.props.onPress(this.end);
    }
  }

  end = () => {
    if (this.props.progress) {
      animateTiming({
        variable: this.animatedLoading,
        toValue: 1,
        callback: () => {
          animateElastic({
            variable: this.textOpacity,
            toValue: 1,
          });
          animateElastic({
            variable: this.activityOpacity,
            toValue: 0,
          });
          animateTiming({
            variable: this.loadingOpacity,
            toValue: 0,
            delay: 100,
            callback: () => {
              this.release(() => {
                this.animating = false;
              });
            },
          });
        },
      });
    }
  }

  release(callback) {
    if (this.props.springRelease === true) {
      animateSpring({
        variable: this.animatedActive,
        toValue: 0,
      });
      animateSpring({
        variable: this.animatedValue,
        toValue: 0,
        callback,
      });
      return;
    }
    animateTiming({
      variable: this.animatedActive,
      toValue: 0,
      duration: ANIMATED_TIMING_OFF,
    });
    animateTiming({
      variable: this.animatedValue,
      toValue: 0,
      duration: ANIMATED_TIMING_OFF,
      callback,
    });
  }

  animateLoadingStart() {
    this.animatedLoading.setValue(0);
    animateTiming({
      variable: this.animatedLoading,
      toValue: 1,
      duration: ANIMATED_TIMING_LOADING,
    });
  }

  textLayout = (event) => {
    if (this.props.width === null) {
      this.setState({
        width: event.nativeEvent.layout.width,
      });
    }
  }

  renderContent(dynamicStyles) {
    const animatedStyles = {
      opacity: this.textOpacity,
      transform: [{
        scale: this.textOpacity,
      }],
    };
    const { children } = this.props;
    if (!children) {
      return (
        <Animated.View
          style={[
            styles.container__placeholder,
            dynamicStyles.container__placeholder,
            animatedStyles,
          ]}
        />
      );
    }
    if (typeof children === 'string') {
      return (
        <Animated.Text
          style={[
            styles.container__text,
            dynamicStyles.container__text,
            animatedStyles,
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
          animatedStyles,
        ]}
      >
        {children}
      </Animated.View>
    );
  }

  render() {
    const animatedValues = this.getAnimatedValues();
    const dynamicStyles = getStyles(this.props, this.state);

    return (
      <TouchableWithoutFeedback
        onPressIn={this.pressIn}
        onPressOut={this.pressOut}
        onPress={this.press}
      >
        <View style={
          [
            styles.container,
            dynamicStyles.container,
            this.props.style,
          ]}
        >
          <Animated.View
            style={[
              styles.shadow,
              dynamicStyles.shadow,
              animatedValues.animatedShadow,
            ]}
          />
          <View
            style={[
              styles.bottom,
              dynamicStyles.bottom,
            ]}
          />
          <Animated.View
            style={[
              styles.content,
              dynamicStyles.content,
              animatedValues.animatedContent,
            ]}
          >
            <View
              style={[
                styles.text,
                dynamicStyles.text,
              ]}
              onLayout={this.textLayout}
            >
              <Animated.View
                style={[
                  styles.activeBackground,
                  dynamicStyles.activeBackground,
                  animatedValues.animatedActive,
                ]}
              />
              <Animated.View
                style={[
                  styles.progress,
                  dynamicStyles.progress,
                  animatedValues.animatedProgress,
                ]}
              />
              { this.state.activity && (
                <Animated.View
                  style={[
                    styles.container__activity,
                    animatedValues.animatedActivity,
                  ]}
                >
                  <ActivityIndicator
                    color={this.props.activityColor}
                  />
                </Animated.View>
              )}
              { this.renderContent(dynamicStyles) }
            </View>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
