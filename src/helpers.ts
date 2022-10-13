import { Animated, Easing } from 'react-native';
import {
  ANIMATED_SPRING_TENSION,
  ANIMATED_SPRING_FRICTION,
  ANIMATED_ELASTIC_DURATION,
  ANIMATED_ELASTIC_BOUNCINESS,
  ANIMATED_TIMING_IN,
} from './constants';

export function animateTiming({
  variable,
  toValue,
  duration = ANIMATED_TIMING_IN,
  delay = 0,
  easing = Easing.out(Easing.cubic),
}: any) {
  return Animated.timing(variable, {
    toValue,
    duration,
    easing,
    delay,
    useNativeDriver: true,
  });
}

export function animateLoop({
  variable,
  toValue,
  duration = 3223,
  easing = Easing.linear,
}: any) {
  const animation = Animated.loop(
    Animated.timing(variable, {
      toValue,
      duration,
      easing,
      isInteraction: false,
      useNativeDriver: true,
    })
  );
  animation.start();
  return animation;
}

export function animateSpring({
  variable,
  toValue,
  delay = 0,
  tension = ANIMATED_SPRING_TENSION,
  friction = ANIMATED_SPRING_FRICTION,
}: any) {
  return Animated.spring(variable, {
    toValue,
    tension,
    friction,
    delay,
    useNativeDriver: true,
  });
}

export function animateElastic(params: any) {
  return animateTiming({
    duration: ANIMATED_ELASTIC_DURATION,
    easing: Easing.elastic(ANIMATED_ELASTIC_BOUNCINESS),
    ...params,
  });
}
