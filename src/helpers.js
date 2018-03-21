import {
  Animated,
  Easing,
} from 'react-native';
import {
  ANIMATED_SPRING_TENSION,
  ANIMATED_SPRING_FRICTION,
  ANIMATED_ELASTIC_DURATION,
  ANIMATED_ELASTIC_BOUNCINESS,
  ANIMATED_TIMING_IN,
} from './constants';

export function memoize(fn) {
  memoize.cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (memoize.cache[key]) {
      return memoize.cache[key];
    }
    const value = fn.apply(this, args);
    memoize.cache[key] = value;
    return value;
  };
}

export function animateTiming({
  variable,
  toValue,
  duration = ANIMATED_TIMING_IN,
  delay = 0,
  easing = Easing.easeOut,
  callback = null,
}) {
  Animated.timing(
    variable,
    {
      toValue,
      duration,
      easing,
      delay,
      useNativeDriver: true,
    },
  ).start(callback);
}

export function animateSpring({
  variable,
  toValue,
  delay = 0,
  tension = ANIMATED_SPRING_TENSION,
  friction = ANIMATED_SPRING_FRICTION,
  callback = null,
}) {
  Animated.spring(
    variable,
    {
      toValue,
      tension,
      friction,
      delay,
      useNativeDriver: true,
    },
  ).start(callback);
}

export function animateElastic(params) {
  animateTiming({
    duration: ANIMATED_ELASTIC_DURATION,
    easing: Easing.elastic(ANIMATED_ELASTIC_BOUNCINESS),
    ...params,
  });
}
