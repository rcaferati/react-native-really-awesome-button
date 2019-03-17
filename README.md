# React Native &lt;AwesomeButton /&gt;

[![Travis](https://img.shields.io/travis/rcaferati/react-native-really-awesome-button/master.svg)](https://travis-ci.org/rcaferati/react-native-really-awesome-button) ![NPM](https://img.shields.io/npm/v/react-native-really-awesome-button.svg)

`react-native-really-awesome-button` is a performant, extendable, production ready ReactNative component that renders an animated set of 3D UI buttons.

Run the <a target="_blank" title="Live Demo" href="https://expo.io/@rcaferati/react-native-really-awesome-button">live demo</a> @ expo.io

<img width="280" src='https://raw.githubusercontent.com/rcaferati/react-native-really-awesome-button/master/demo/demo-button-blue-new.gif?raw=true' /><img width="280" src='https://raw.githubusercontent.com/rcaferati/react-native-really-awesome-button/master/demo/demo-button-rick.gif?raw=true' /><img width="280" src='https://raw.githubusercontent.com/rcaferati/react-native-really-awesome-button/master/demo/demo-button-cartman.gif?raw=true' />

### Installation

```
npm install --save react-native-really-awesome-button
```

## Usage

### Basic

```jsx
import AwesomeButton from "react-native-really-awesome-button";

function Button() {
  return <AwesomeButton>Text</AwesomeButton>;
}
```

### Progress

```jsx
import AwesomeButton from "react-native-really-awesome-button";

function Button() {
  return (
    <AwesomeButton
      progress
      onPress={next => {
        /** Do Something **/
        next();
      }}
    >
      Text
    </AwesomeButton>
  );
}
```

### Custom Children

```jsx
import AwesomeButton from "react-native-really-awesome-button";

function Button() {
  return (
    <AwesomeButton>
      <Image source="require('send-icon.png)" />
      <Text>Send it</Text>
    </AwesomeButton>
  );
}
```

### Importing a specific theme

```jsx
  import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

  function Button() {
    return (
     <AwesomeButtonRick type="primary">Rick's Primary Button</AwesomeButtonRick>
     <AwesomeButtonRick type="secondary">Rick's Secondary Button</AwesomeButtonRick>
    );
  }
```

### Extra Content placement
You can use the `Extra Content` prop to render a component inside the button content body. This could be useful to render an image or gradient background

```jsx
import AwesomeButton from "react-native-really-awesome-button";
import LinearGradient from "react-native-linear-gradient";

function Button() {
  return (
    <AwesomeButton
      ExtraContent={
        <LinearGradient
          colors={["#4C63D2", "#BC3081", "#F47133", "#FED576"]}
        />
      }
    >
      <Text>Instagram</Text>
    </AwesomeButton>
  );
}
```

## Props

| Attributes            |     Type      |  Default  | Description                                               |
| :-------------------- | :-----------: | :-------: | :-------------------------------------------------------- |
| activityColor         | `String`      | `#FFFFFF` | Button activity indicator color                           |
| activeOpacity         | `Number`      | `1`       | Button active state opacity                               |
| backgroundActive      | `String`      | `#C0C0C0` | Button active state background-color                      |
| backgroundColor       | `String`      | `#C0C0C0` | Button content background-color                           |
| backgroundDarker      | `String`      | `#9F9F9F` | Button bottom-front-face background-color                 |
| backgroundShadow      | `String`      | `#C0C0C0` | Button bottom shaddow background-color                    |
| backgroundPlaceholder | `String`      | `#C0C0C0` | Button placeholder background-color                       |
| backgroundProgress    | `String`      | `#C0C0C0` | Button progress bar background-color                      |
| borderColor           | `String`      | `null`   | Button border-color                                        |
| borderRadius          | `Number`      | `4`       | Button border-radius                                      |
| borderWidth           | `Number`      | `0`       | Button border-width                                       |
| height                | `Number`      | `50`      | Button height                                             |
| width                 | `Number`      | `null`    | Setting width to `null` mirrors an `auto` behaviour       |
| paddingHorizontal     | `Number`      | `12`      | Sets the button horizontal padding                        |
| paddingTop            | `Number`      | `0`       | Sets the button padding top                               |
| paddingBottom         | `Number`      | `0`       | Sets the button padding bottom                            |
| stretch               | `Boolean`     | `false`   | When set to `true` together with width set to `null` the button fills it's parent component width |
| disabled              | `Boolean`     | `true`    | Button disabled state: cancels animation and onPress func |
| raiseLevel            | `Number`      | `4`       | Button 3D raise level                                     |
| ExtraContent          | `Node`        | `null`    | Renders a custom component inside the button content body |
| springRelease         | `Boolean`     | `true`    | Button uses spring on the release animation               |
| onPress               | `Function`    | `null`    | Button onPress function. It receives a `next` argument when the `progress` prop is set to `true` |
| progress              | `Boolean`     | `false`   | When set to `true` enables progress animation             |
| progressLoadingTime   | `Number`      | `3000`    | Number in `ms` for the maximum progress bar animation time |
| textColor             | `String`      | `#FFFFFF` | Button default label text color                           |
| textLineHeight        | `Number`      | `20`      | Button default label text line height                     |
| textSize              | `Number`      | `16`      | Button default label text font size                       |
| textFamily            | `Number`      | `null`    | Button default label text font family                     |
| style                 | `Style`       | `null`    | Button container custom styles                            |

## Web version
Checkout the web version of the Awesome Button UI component at [rcaferati/react-awesome-button](https://github.com/rcaferati/react-awesome-button)

[<img src="https://github.com/rcaferati/react-awesome-button/blob/master/demo/public/images/react-awesome-button-customizer.png?raw=true" width="800" />](https://caferati.me/demo/react-awesome-button)

## About the Author

#### Rafael Caferati

- Checkout my <a href="https://caferati.me" title="Full-Stack Web Developer, UI/UX Javascript Specialist" target="_blank">Full-Stack Web Developer Website</a>
- Other open source projects @ <a title="Web Software Developer Code Laboratory" target="_blank" href="https://caferati.me/labs">Code Laboratory</a>
- A scope of my work @ <a title="Web Software Developer Portfolio" target="_blank" href="https://caferati.me/portfolio">Web Portfolio</a>

## License

MIT. Copyright (c) 2018 Rafael Caferati.
