import { StyleSheet } from 'react-native';

export function getStyles(styleProps) {
  return StyleSheet.create({
    container: {
      height: styleProps.height,
      width: styleProps.width,
    },
    container__text: {
      color: styleProps.textColor,
    },
    container__placeholder: {
      width: styleProps.width * 0.5,
      height: styleProps.textLineHeight,
    },
    shadow: {
      bottom: -styleProps.raiseLevel/2,
      width: styleProps.width - 4,
      height: styleProps.height - styleProps.raiseLevel,
      borderRadius: styleProps.borderRadius,
    },
    bottom: {
      borderRadius: styleProps.borderRadius,
      backgroundColor: styleProps.backgroundDarker,
      width: styleProps.width,
      height: styleProps.height - styleProps.raiseLevel,
    },
    progress: {
      backgroundColor: styleProps.backgroundProgress,
      width: styleProps.width,
      height: styleProps.height - styleProps.raiseLevel,
    },
    content: {
      width: styleProps.width,
      height: styleProps.height - styleProps.raiseLevel,
      borderRadius: styleProps.borderRadius,
    },
    text: {
      borderColor: styleProps.borderColor,
      borderWidth: styleProps.borderWidth,
      borderRadius: styleProps.borderRadius,
      backgroundColor: styleProps.backgroundColor,
    },
  });
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'relative',
  },
  container__text: {
    fontWeight: 'bold',
    zIndex: 10,
    textAlign: 'center',
  },
  container__view: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container__placeholder: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  container__activity: {
    position: 'absolute',
    zIndex: 5,
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  shadow: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    position: 'absolute',
    left: 2,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  progress: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    overflow: 'hidden',
    paddingLeft: 12,
    paddingRight: 12,
  },
});
