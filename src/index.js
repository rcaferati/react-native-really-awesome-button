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
    this.animating = false;
    this.timeout = null;
    this.animatedValue = new Animated.Value(0);
    this.animatedLoading = new Animated.Value(0);
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

  animateOpacityOut({ variable, value, delay = 0, callback = null}) {
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
        this.animateOpacityOut({
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
        this.animateOpacityOut({
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

// function getStyles(styleProps) {
//   return StyleSheet.create({
//     container: {
//       height: styleProps.height,
//       width: styleProps.width,
//     },
//     container__text: {
//       color: styleProps.textColor,
//     },
//     container__placeholder: {
//       width: styleProps.width * 0.5,
//       height: styleProps.textLineHeight,
//     },
//     shadow: {
//       bottom: -styleProps.raiseLevel/2,
//       width: styleProps.width - 4,
//       height: styleProps.height - styleProps.raiseLevel,
//       borderRadius: styleProps.borderRadius,
//     },
//     bottom: {
//       borderRadius: styleProps.borderRadius,
//       backgroundColor: styleProps.backgroundDarker,
//       width: styleProps.width,
//       height: styleProps.height - styleProps.raiseLevel,
//     },
//     progress: {
//       backgroundColor: styleProps.backgroundProgress,
//       width: styleProps.width,
//       height: styleProps.height - styleProps.raiseLevel,
//     },
//     content: {
//       width: styleProps.width,
//       height: styleProps.height - styleProps.raiseLevel,
//       borderRadius: styleProps.borderRadius,
//     },
//     text: {
//       borderColor: styleProps.borderColor,
//       borderWidth: styleProps.borderWidth,
//       borderRadius: styleProps.borderRadius,
//       backgroundColor: styleProps.backgroundColor,
//     },
//   });
// }
//
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'transparent',
//     position: 'relative',
//   },
//   container__text: {
//     fontWeight: 'bold',
//     zIndex: 10,
//     textAlign: 'center',
//   },
//   container__view: {
//     flexDirection: 'row',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   container__placeholder: {
//     backgroundColor: 'rgba(0, 0, 0, 0.35)',
//   },
//   container__activity: {
//     position: 'absolute',
//     zIndex: 5,
//   },
//   button: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   shadow: {
//     backgroundColor: 'rgba(0, 0, 0, 0.15)',
//     position: 'absolute',
//     left: 2,
//   },
//   bottom: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//   },
//   progress: {
//     zIndex: 1,
//     position: 'absolute',
//     top: 0,
//     left: 0,
//   },
//   content: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//   },
//   text: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: 3,
//     overflow: 'hidden',
//     paddingLeft: 12,
//     paddingRight: 12,
//   },
// });
