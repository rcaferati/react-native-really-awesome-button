# ReactNavite &lt;AwesomeButton /&gt;

[![Travis](https://img.shields.io/travis/rcaferati/react-native-really-awesome-button/master.svg)](https://travis-ci.org/rcaferati/react-native-really-awesome-button) ![NPM](https://img.shields.io/npm/v/react-native-really-awesome-button.svg)

`react-native-really-awesome-button` is a performant, extendable, production ready ReactNative component that renders an animated set of 3D UI buttons.

<img width="225" src='https://raw.githubusercontent.com/rcaferati/react-native-really-awesome-button/master/demo/ios-button-gif.gif?raw=true' />

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
  import AwesomeButton from 'react-native-really-awesome-button';

  function Button() {
    return (
      <AwesomeButton>Label</AwesomeButton>
    );
  }
```
### Progress
```jsx
  import AwesomeButton from 'react-native-really-awesome-button';

  function Button() {
    return (
     <AwesomeButton
       progress
       onPress={(next) => {
         /** Do Something **/
         next();
       }}
     >
       Label
     </AwesomeButton>
    );
  }
```

### Custom Children
```jsx
  import AwesomeButton from 'react-native-really-awesome-button';

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

| Attributes            | Type          | Default     | Description |
| :---------            | :--:          | :-----:     | :----------- |
| onPress               | `Func`        | `null`      | Button onPress function |
| style                 | `Style`       | `null`      | Button container custom styles |
| raiseLevel            | `number`      | `4`         | Buttom 3D raise level |
| height                | `number`      | `50`        | Button height |
| width                 | `number`      | `200`       | Button width |
| borderRadius          | `number`      | `4`         | Button border-radius |
| borderWidth           | `number`      | `0`         | Button border-width |
| borderColor           | `string`      | `null`      | Button border-color |
| backgroundColor       | `string`      | `#C0C0C0`   | Button main background-color |
| backgroundDarker      | `string`      | `#9F9F9F`   | Button frontal darker background-color |
| textColor             | `string`      | `#FFFFFF`   | Button default label text color |
| textSize              | `number`      | `16`        | Button default label text font-size |
| textLineHeight        | `number`      | `20`        | Button default label text line-height |
| activityColor         | `string`      | `#FFFFFF`   | Progress button error label text |
| progress              | `bool`        | `"Success"` | Enable progress animation |
| disabled              | `bool`        | `true`      | Button disabled state: cancels animation and onPress func |


## Author
#### Rafael Caferati
+ Checkout my <a href="https://caferati.me" title="Full-Stack Web Developer, UI/UX Javascript Specialist" target="_blank">Full-Stack Web Developer Website</a>
+ Other open source projects @ <a title="Web Software Developer Code Laboratory" target="_blank" href="https://caferati.me/labs">Code Laboratory</a>
+ A scope of my work @ <a title="Web Software Developer Portfolio" target="_blank" href="https://caferati.me/portfolio">Web Portfolio</a>

## License

MIT. Copyright (c) 2018 Rafael Caferati.
