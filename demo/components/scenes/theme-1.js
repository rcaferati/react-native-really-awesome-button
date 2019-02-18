import React from "react";
import AwesomeButton from "react-native-really-awesome-button/src/themes/c137";
// import AwesomeButton from "../../src/themes/c137";
import Example from "../example";

function example() {
  return <Example ButtonComponent={AwesomeButton} />;
}

example.navigationOptions = ({ navigation }) => {
  return {
    title: "C-137 Theme",
    headerStyle: {
      backgroundColor: "#fffa82"
    },
    headerTintColor: "#535015",
    headerTitleStyle: {
      fontWeight: "bold"
    },
    headerRight: (
      <AwesomeButton
        size="small"
        type="primaryFlat"
        backgroundActive="rgba(0,0,0,0)"
        activeOpacity={0.5}
        textColor="#535015"
        width={80}
        onPress={() => navigation.navigate("Theme2")}
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
        textColor="#535015"
        width={80}
        onPress={() => navigation.goBack()}
      >
        Back
      </AwesomeButton>
    )
  };
};

export default example;
