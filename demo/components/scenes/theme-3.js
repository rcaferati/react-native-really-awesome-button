import React from "react";
import AwesomeButton from "react-native-really-awesome-button/src/themes/cartman";
// import AwesomeButton from "../../src/themes/cartman";
import Example from "../example";

function example() {
  return <Example ButtonComponent={AwesomeButton} />;
}

example.navigationOptions = ({ navigation }) => {
  return {
    title: "Cartman Theme",
    headerStyle: {
      backgroundColor: "#EE3253"
    },
    headerTintColor: "#FFE11D",
    headerTitleStyle: {
      fontWeight: "bold"
    },
    headerRight: (
      <AwesomeButton
        size="small"
        type="primaryFlat"
        backgroundActive="rgba(0,0,0,0)"
        activeOpacity={0.5}
        textColor="#FFE11D"
        width={80}
        onPress={() => navigation.navigate("Theme4")}
      >
        Next
      </AwesomeButton>
    ),
    headerLeft: (
      <AwesomeButton
        size="small"
        type="primaryFlat"
        backgroundActive="rgba(0,0,0,0)"
        activeOpacity={0.5}
        textColor="#FFE11D"
        width={80}
        onPress={() => navigation.goBack()}
      >
        Back
      </AwesomeButton>
    )
  };
};

export default example;
