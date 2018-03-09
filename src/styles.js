import { StyleSheet } from 'react-native';

export function getStyles(styleProps, state) {
  const width = styleProps.width || state.width || null;
  const dimensionsDiff = {
    width,
    height: styleProps.height - styleProps.raiseLevel,
  }
  return StyleSheet.create({
    container: {
      height: styleProps.height,
      width,
    },
    container__text: {
      color: styleProps.textColor,
      fontSize: styleProps.textSize,
    },
    container__placeholder: {
      width: width * 0.5,
      height: styleProps.textLineHeight,
      backgroundColor: styleProps.backgroundPlaceholder,
    },
    shadow: {
      bottom: -styleProps.raiseLevel/2,
      width: width - 4,
      height: styleProps.height - styleProps.raiseLevel,
      borderRadius: styleProps.borderRadius,
      backgroundColor: styleProps.backgroundShadow,
    },
    bottom: {
      borderRadius: styleProps.borderRadius,
      backgroundColor: styleProps.backgroundDarker,
      ...dimensionsDiff,
    },
    progress: {
      backgroundColor: styleProps.backgroundProgress,
      ...dimensionsDiff,
    },
    content: {
      ...dimensionsDiff,
      borderRadius: styleProps.borderRadius,
    },
    activeBackground: {
      ...dimensionsDiff,
      backgroundColor: styleProps.backgroundActive,
    },
    text: {
      borderColor: styleProps.borderColor,
      borderWidth: styleProps.borderWidth,
      borderRadius: styleProps.borderRadius,
      backgroundColor: styleProps.backgroundColor,
      paddingLeft: styleProps.horizontalPadding,
      paddingRight: styleProps.horizontalPadding,
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
  container__activity: {
    position: 'absolute',
    zIndex: 5,
  },
  shadow: {
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
  activeBackground: {
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
  },
});
