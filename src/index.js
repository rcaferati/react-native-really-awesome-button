import React from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing
} from 'react-native';
import { styles, getStyles } from './styles';

export default class Button extends React.Component {
  static propTypes = {
    raiseLevel: PropTypes.number,
    height: PropTypes.number,
    width: PropTypes.number,
    borderRadius: PropTypes.number,
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundDarker: PropTypes.string,
    backgroundActive: PropTypes.string,
    backgroundProgress: PropTypes.string,
    textColor: PropTypes.string,
    textSize: PropTypes.number,
    textLineHeight: PropTypes.number,
    activityColor: PropTypes.string,
    style: View.propTypes.style,
    disabled: PropTypes.bool,
    progress: PropTypes.bool,
  };

  static defaultProps = {
    progress: false,
    raiseLevel: 4,
    height: 60,
    width: 200,
    activityColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 0,
    borderColor: null,
    backgroundColor: '#c0c0c0',
    backgroundDarker: '#9f9f9f',
    backgroundActive: 'rgba(0, 0, 0, 0.075)',
    backgroundProgress: 'rgba(0, 0, 0, 0.15)',
    textColor: '#FFFFFF',
    textSize: 16,
    textLineHeight: 20,
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
    };
  }

  animateButton(value, callback) {
    Animated.timing(
      this.animatedValue,
      {
        toValue: value,
        duration: 100,
        easing: Easing.easeOut,
        useNativeDriver: true,
      }
    ).start(callback);
  }

  animateActive(value, callback) {
    Animated.timing(
      this.animatedActive,
      {
        toValue: value,
        duration: 100,
        easing: Easing.easeOut,
        useNativeDriver: true,
      }
    ).start(callback);
  }

  animateOpacity({ variable, value, delay = 0, callback = null}) {
    Animated.timing(
      variable,
      {
        toValue: value,
        duration: 200,
        easing: Easing.easeOut,
        useNativeDriver: true,
        delay,
      }
    ).start(callback);
  }

  animateElastic(variable, value) {
    Animated.timing(
      variable,
      {
        toValue: value,
        duration: 375,
        easing: Easing.elastic(1.2),
        useNativeDriver: true,
      }
    ).start();
  }

  animateLoadingStart() {
    this.animatedLoading.setValue(0);
    Animated.timing(
      this.animatedLoading,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.easeOut,
        useNativeDriver: true,
      }
    ).start();
  }

  animateLoadingEnd(callback) {
    Animated.timing(
      this.animatedLoading,
      {
        toValue: 1,
        duration: 250,
        easing: Easing.easeOut,
        useNativeDriver: true,
      }
    ).start(callback);
  }

  pressIn = () => {
    if (
      this.props.disabled === true ||
      !this.props.children ||
      this.animating === true
    ) {
      return false;
    }
    this.animateButton(1);
    this.animateActive(1);
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
        this.animateOpacity({
          variable: this.loadingOpacity,
          value: 1,
        });
        this.animateElastic(this.textOpacity, 0);
        this.animateElastic(this.activityOpacity, 1);
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
      this.animateLoadingEnd(() => {
        this.animateElastic(this.textOpacity, 1);
        this.animateElastic(this.activityOpacity, 0);
        this.animateOpacity({
          variable: this.loadingOpacity,
          value: 0,
          delay: 100,
          callback: () => {
            this.release(() => {
              this.animating = false;
            });
          }
        });
      });
    }
  }

  release = (callback) => {
    this.animateActive(0);
    this.animateButton(0, callback);
  }

  renderContent(dynamicStyles) {
    const animatedStyles = {
      opacity: this.textOpacity,
      transform: [{
        scale: this.textOpacity,
      }]
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

  getAnimatedValues() {
    return {
      animatedShadow: {
        transform: [
          {
            translateY: this.animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -this.props.raiseLevel/2],
            }),
          }
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
              outputRange: [-this.props.width, 0],
            }),
          },
        ],
      },
    };
  }

  render() {
    const animatedValues = this.getAnimatedValues();
    const dynamicStyles = getStyles(this.props);

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
          <View style={[
            styles.button,
            dynamicStyles.button
          ]}>
            <View style={[
              styles.bottom,
              dynamicStyles.bottom
            ]} />
            <Animated.View
              style={[
                styles.content,
                dynamicStyles.content,
                animatedValues.animatedContent,
              ]}
            >
              <View style={[
                styles.text,
                dynamicStyles.text,
              ]}>
                <Animated.View style={[
                  styles.activeBackground,
                  dynamicStyles.activeBackground,
                  animatedValues.animatedActive,
                ]} />
                <Animated.View style={[
                  styles.progress,
                  dynamicStyles.progress,
                  animatedValues.animatedProgress,
                ]} />
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
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
