import { StyleSheet } from "react-native";
import { memoize } from "./helpers";

const memoized = memoize(
  ({
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
    textFontFamily,
    width
  }) => {
    const dimensionsDiff = {
      width,
      height: height - raiseLevel
    };

    return StyleSheet.create({
      container: {
        height,
        width
      },
      container__text: {
        color: textColor,
        fontSize: textSize,
        fontFamily: textFontFamily,
        paddingHorizontal: horizontalPadding
      },
      container__placeholder: {
        height: textLineHeight,
        backgroundColor: backgroundPlaceholder
      },
      shadow: {
        bottom: -raiseLevel / 2,
        height: height - raiseLevel,
        borderRadius,
        backgroundColor: backgroundShadow
      },
      bottom: {
        borderRadius,
        backgroundColor: backgroundDarker,
        ...dimensionsDiff
      },
      progress: {
        ...dimensionsDiff,
        backgroundColor: backgroundProgress
      },
      content: {
        ...dimensionsDiff,
        borderRadius
      },
      activeBackground: {
        ...dimensionsDiff,
        backgroundColor: backgroundActive
      },
      text: {
        borderColor,
        borderWidth,
        borderRadius,
        backgroundColor
      }
    });
  }
);

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
    textSize,
    textFontFamily
  } = styleProps;

  const width = styleProps.stretch
    ? "100%"
    : styleProps.width || state.width || null;

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
    textFontFamily,
    width
  });
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    zIndex: 10
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
  container__placeholder: {
    width: "55%"
  },
  container__activity: {
    position: "absolute",
    zIndex: 5
  },
  shadow: {
    width: "98%",
    position: "absolute",
    left: "1%"
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
