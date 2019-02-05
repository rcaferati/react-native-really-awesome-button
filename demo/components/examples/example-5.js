import React from "react";
import AwesomeButton from "react-native-really-awesome-button/src/themes/c137";
import { Example } from "../index";

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
    headerLeft: (
      <AwesomeButton
        size="small"
        type="primaryFlat"
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
