import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Example1 from './components/example-1';
import Example2 from './components/example-2';
import Example3 from './components/example-3';
import Example4 from './components/example-4';

const RootStack = StackNavigator(
  {
    Example1: {
      screen: Example1,
    },
    Example2: {
      screen: Example2,
    },
    Example3: {
      screen: Example3,
    },
    Example4: {
      screen: Example4,
    },
  },
  {
    initialRouteName: 'Example1',
  }
);

export default class Demo extends React.Component {
  render() {
    return <RootStack />;
  }
}

// export default class Demo extends React.Component {
//   render() {
//     return (
//       <View style={style.container}>
//         <ScrollView contentContainerStyle={style.scrollView}>
//           <AwesomeButtonBlue
//             style={style.button}
//             progress
//             onPress={(next) => {
//               setTimeout(() => {
//                 next();
//               }, 1000);
//             }}
//           >
//             Blue Progress
//           </AwesomeButtonBlue>
//           <AwesomeButtonBlue
//             type="secondary"
//             style={style.button}
//           >
//             Blue Secondary
//           </AwesomeButtonBlue>
//           <AwesomeButtonRed
//             style={style.button}
//             type="primary"
//           >
//             Blue Secondary
//           </AwesomeButtonRed>
//           <AwesomeButtonRed
//             type="secondary"
//             style={style.button}
//           >
//             Blue Secondary
//           </AwesomeButtonRed>
//           <AwesomeButtonRed
//             disabled
//             type="secondary"
//             style={style.button}
//           >
//             Blue Secondary
//           </AwesomeButtonRed>
//           <AwesomeButtonCartman
//             style={style.button}
//             type="primary"
//           >
//             Cartman Primary
//           </AwesomeButtonCartman>
//           <AwesomeButtonCartman
//             style={style.button}
//             type="secondary"
//           >
//             Cartman Secondary
//           </AwesomeButtonCartman>
//           <AwesomeButtonRick
//             progress
//             type="primary"
//             onPress={(next) => {
//               setTimeout(() => {
//                 next();
//               }, 1000);
//             }}
//             style={style.button}
//           >
//             Rick Progress
//           </AwesomeButtonRick>
//           <AwesomeButtonRick
//             type="secondary"
//             style={style.button}
//           >
//             Rick Secondary
//           </AwesomeButtonRick>
//           <AwesomeButtonC137
//             style={style.button}
//           >
//             C137 Primary
//           </AwesomeButtonC137>
//           <AwesomeButtonC137
//             type="secondary"
//             style={style.button}
//           >
//             C137 Secondary
//           </AwesomeButtonC137>
//         </ScrollView>
//       </View>
//     );
//   }
// }
//
// const style = StyleSheet.create({
//   button: {
//     marginTop: 12,
//     marginBottom: 12,
//   }
// });
