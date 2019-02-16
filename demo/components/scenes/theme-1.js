import React from "react";
import AwesomeButton from "react-native-really-awesome-button/src/themes/blue";
// import AwesomeButton from "../../src/themes/blue";
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
        backgroundActive="rgba(0,0,0,0)"
        activeOpacity={0.5}
        width={80}
        onPress={() => navigation.navigate("Theme2")}
        color="#fff"
      >
        Next
      </AwesomeButton>
    )
  };
};

export default example;
