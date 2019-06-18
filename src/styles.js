import { StyleSheet } from "react-native";
import { memoize } from "./helpers";

const memoized = memoize(
  ({
    backgroundActive,
    backgroundColor,
    backgroundDarker,
    backgroundPlaceholder,
    backgroundProgress,
    backgroundShadow,
    borderColor,
    borderRadius,
    borderWidth,
    height,
    paddingBottom,
    paddingHorizontal,
    paddingTop,
    raiseLevel,
    stateWidth,
    stretch,
    textColor,
    textFontFamily,
    textLineHeight,
    textSize,
    width
  }) => {
    const calcHeight = height + paddingBottom + paddingTop;
    const calcWidth = stretch ? "100%" : width || stateWidth || null;

    const dimensionsDiff = {
      width: calcWidth,
      height: calcHeight - raiseLevel
    };

    return StyleSheet.create({
      container: {
        height: calcHeight,
        width: calcWidth
      },
      container__text: {
        color: textColor,
        fontSize: textSize,
        fontFamily: textFontFamily,
        paddingBottom,
        paddingTop,
        paddingHorizontal
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

export const getStyles = ({
  backgroundActive,
  backgroundColor,
  backgroundDarker,
  backgroundPlaceholder,
  backgroundProgress,
  backgroundShadow,
  borderColor,
  borderRadius,
  borderWidth,
  height,
  paddingBottom,
  paddingHorizontal,
  paddingTop,
  raiseLevel,
  stateWidth,
  stretch,
  textColor,
  textFontFamily,
  textLineHeight,
  textSize,
  width
}) => {
  return memoized({
    backgroundActive,
    backgroundColor,
    backgroundDarker,
    backgroundPlaceholder,
    backgroundProgress,
    backgroundShadow,
    borderColor,
    borderRadius,
    borderWidth,
    height,
    paddingBottom,
    paddingHorizontal,
    paddingTop,
    raiseLevel,
    stateWidth,
    stretch,
    textColor,
    textFontFamily,
    textLineHeight,
    textSize,
    width
  });
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    zIndex: 10
  },
  container__text: {
    width: '100%',
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
