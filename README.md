# React Native &lt;AwesomeButton /&gt;

[![Travis](https://img.shields.io/travis/rcaferati/react-native-really-awesome-button/master.svg)](https://travis-ci.org/rcaferati/react-native-really-awesome-button) ![NPM](https://img.shields.io/npm/v/react-native-really-awesome-button.svg)

`react-native-really-awesome-button` is a performant, extendable, production ready ReactNative component that renders an animated set of 3D UI buttons.

Run the <a target="_blank" title="Live Demo" href="https://expo.io/@rcaferati/react-native-really-awesome-button">live demo</a> @ expo.io

<img width="280" src='https://raw.githubusercontent.com/rcaferati/react-native-really-awesome-button/master/demo/demo-button-blue-new.gif?raw=true' /><img width="280" src='https://raw.githubusercontent.com/rcaferati/react-native-really-awesome-button/master/demo/demo-button-rick.gif?raw=true' /><img width="280" src='https://raw.githubusercontent.com/rcaferati/react-native-really-awesome-button/master/demo/demo-button-cartman.gif?raw=true' />

### Installation

```
npm install --save react-native-really-awesome-button
```

or

```
yarn add react-native-really-awesome-button
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

## Props

| Attributes            |     Type      |  Default  | Description                                               |
| :-------------------- | :-----------: | :-------: | :-------------------------------------------------------- |
| activityColor         | `String`      | `#FFFFFF` | Progress button error label text                          |
| backgroundActive      | `String`      | `#C0C0C0` | Button active background-color                            |
| backgroundColor       | `String`      | `#C0C0C0` | Button main background-color                              |
| backgroundPlaceholder | `String`      | `#C0C0C0` | Button placeholder background-color                       |
| backgroundProgress    | `String`      | `#C0C0C0` | Button progress bar background-color                      |
| backgroundShadow      | `String`      | `#C0C0C0` | Button progress bar background-color                      |
| backgroundDarker      | `String`      | `#9F9F9F` | Button front face background-color                        |
| borderColor           | `String`      | `null `   | Button border-color                                       |
| borderRadius          | `Number`      | `4`       | Button border-radius                                      |
| borderWidth           | `Number`      | `0`       | Button border-width                                       |
| disabled              | `Boolean`     | `true`    | Button disabled state: cancels animation and onPress func |
| height                | `Number`      | `50`      | Button height                                             |
| onPress               | `Func`        | `null`    | Button onPress function                                   |
| progress              | `Boolean`     | `false`   | Enable progress animation                                 |
| raiseLevel            | `Number`      | `4`       | Button 3D raise level                                     |
| springRelease         | `Boolean`     | `true`    | Button uses spring on the release animation               |
| style                 | `Style`       | `null`    | Button container custom styles                            |
| textColor             | `String`      | `#FFFFFF` | Button default label text color                           |
| textLineHeight        | `Number`      | `20`      | Button default label text line-height                     |
| textSize              | `Number`      | `16`      | Button default label text font-size                       |
| width                 | `Number`      | `null`    | Setting width to `null` mirrors an `auto` behaviour       |

## Author

#### Rafael Caferati

- Checkout my <a href="https://caferati.me" title="Full-Stack Web Developer, UI/UX Javascript Specialist" target="_blank">Full-Stack Web Developer Website</a>
- Other open source projects @ <a title="Web Software Developer Code Laboratory" target="_blank" href="https://caferati.me/labs">Code Laboratory</a>
- A scope of my work @ <a title="Web Software Developer Portfolio" target="_blank" href="https://caferati.me/portfolio">Web Portfolio</a>

## License

MIT. Copyright (c) 2018 Rafael Caferati.
