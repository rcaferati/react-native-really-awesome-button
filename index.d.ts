// Type definitions for react-native-svg-uri 1.1.2
// Project: https://github.com/matc4/react-native-svg-uri
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// TypeScript Version: 2.2.2

declare module "react-native-really-awesome-button" {
  import React, { Component } from "react";
  import { ViewStyle } from "react-native";

  export interface AwesomeButtonProps {
    activityColor?: string;
    backgroundActive?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    backgroundDarker?: string;
    backgroundPlaceholder?: string;
    backgroundProgress?: string;
    backgroundShadow?: string;
    borderColor?: string;
    borderRadius?: number;
    borderBottomLeftRadius?: number;
    borderBottomRightRadius?: number;
    borderTopLeftRadius?: number;
    borderTopRightRadius?: number;
    borderLeftBottomRadius?: number;
    borderWidth?: number;
    ExtraContent?: React.ReactNode;
    disabled?: boolean;
    height?: number;
    paddingHorizontal?: number;
    progress: boolean;
    paddingBottom: number;
    raiseLevel: number;
    springRelease: boolean;
    stretch: boolean;
    style: ViewStyle;
    textColor: string;
    textLineHeight: number;
    textSize: number;
    textFamily: string;
    width: number;
    onPress?(): void;
  }

  export default class AwesomeButton extends Component<
    AwesomeButtonProps,
    {}
  > {}
}

// export class AwesomeButton extends React.Component<AwesomeButtonProps, any> {}
