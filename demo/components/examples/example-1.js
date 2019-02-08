import React from "react";
import { Text } from "react-native";
// import AwesomeButton from "react-native-really-awesome-button/src/themes/blue";
import AwesomeButton from "../../src/themes/blue";
import Example from "../example";

function example() {
  return <Example ButtonComponent={AwesomeButton} />;
}

example.navigationOptions = ({ navigation }) => {
  return {
    title: "Blue Theme",
    headerStyle: {
      backgroundColor: "#1775c8"
    },
    headerTintColor: "#FFF",
    headerTitleStyle: {
      fontWeight: "bold"
    },
    headerRight: (
      <AwesomeButton
        size="small"
        type="primaryFlat"
        width={80}
        onPress={() => navigation.navigate("Example2")}
        color="#fff"
      >
        Next
      </AwesomeButton>
    )
  };
};

export default example;
