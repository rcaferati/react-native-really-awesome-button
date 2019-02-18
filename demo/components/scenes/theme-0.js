import React from "react";
import AwesomeButton from "react-native-really-awesome-button/src/themes/bojack";
// import AwesomeButton from "../../src/themes/bojack";
import Example from "../example";

function example() {
  return <Example ButtonComponent={AwesomeButton} />;
}

example.navigationOptions = ({ navigation }) => {
  return {
    title: "Bojack Theme",
    headerStyle: {
      backgroundColor: "#4f6fc4"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    },
    headerRight: (
      <AwesomeButton
        size="small"
        type="primaryFlat"
        backgroundActive="rgba(0,0,0,0)"
        activeOpacity={0.5}
        textColor="#FFFFFF"
        width={80}
        onPress={() => navigation.navigate("Theme1")}
      >
        Next
      </AwesomeButton>
    )
  };
};

export default example;
