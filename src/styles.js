import { StyleSheet } from "react-native";
import { memoize } from "./helpers";

const memoized = memoize(props => {
  const dimensionsDiff = {
    width: props.width,
    height: props.height - props.raiseLevel
  };
  return StyleSheet.create({
    container: {
      height: props.height,
      width: props.width
    },
    container__text: {
      color: props.textColor,
      fontSize: props.textSize,
      paddingLeft: props.horizontalPadding,
      paddingRight: props.horizontalPadding
    },
    container__placeholder: {
      width: props.width * 0.5,
      height: props.textLineHeight,
      backgroundColor: props.backgroundPlaceholder
    },
    shadow: {
      bottom: -props.raiseLevel / 2,
      width: props.width - 4,
      height: props.height - props.raiseLevel,
      borderRadius: props.borderRadius,
      backgroundColor: props.backgroundShadow
    },
    bottom: {
      borderRadius: props.borderRadius,
      backgroundColor: props.backgroundDarker,
      ...dimensionsDiff
    },
    progress: {
      backgroundColor: props.backgroundProgress,
      ...dimensionsDiff
    },
    content: {
      ...dimensionsDiff,
      borderRadius: props.borderRadius
    },
    activeBackground: {
      ...dimensionsDiff,
      backgroundColor: props.backgroundActive
    },
    text: {
      borderColor: props.borderColor,
      borderWidth: props.borderWidth,
      borderRadius: props.borderRadius,
      backgroundColor: props.backgroundColor
    }
  });
});

export const getStyles = (styleProps, state) => {
  const {
    backgroundActive,
    backgroundColor,
    backgroundDarker,
    backgroundShadow,
    backgroundPlaceholder,
    backgroundProgress,
    borderColor,
    borderRadius,
    borderWidth,
    height,
    horizontalPadding,
    raiseLevel,
    textColor,
    textLineHeight,
    textSize
  } = styleProps;
  return memoized({
    backgroundActive,
    backgroundColor,
    backgroundDarker,
    backgroundShadow,
    backgroundPlaceholder,
    backgroundProgress,
    borderColor,
    borderRadius,
    borderWidth,
    height,
    horizontalPadding,
    raiseLevel,
    textColor,
    textLineHeight,
    textSize,
    width: styleProps.width || state.width || null
  });
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    position: "relative"
  },
  container__text: {
    fontWeight: "bold",
    zIndex: 10,
    textAlign: "center"
  },
  container__view: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  container__activity: {
    position: "absolute",
    zIndex: 5
  },
  shadow: {
    position: "absolute",
    left: 2
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    left: 0
  },
  progress: {
    zIndex: 1,
    position: "absolute",
    top: 0,
    left: 0
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0
  },
  activeBackground: {
    position: "absolute",
    top: 0,
    left: 0
  },
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
    overflow: "hidden"
  }
});
