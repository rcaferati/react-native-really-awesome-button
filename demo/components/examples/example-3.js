import React from "react";
// import AwesomeButton from "react-native-really-awesome-button/src/themes/cartman";
import AwesomeButton from "../../src/themes/cartman";
import { Example } from "../index";

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
        textColor="#FFE11D"
        width={80}
        onPress={() => navigation.navigate("Example4")}
      >
        Next
      </AwesomeButton>
    ),
    headerLeft: (
      <AwesomeButton
        size="small"
        type="primaryFlat"
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
