import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AwesomeButton from "react-native-really-awesome-button/src/themes/blue";
// import AwesomeButton from "../../src/themes/blue";
import Container from "../container";
import Section from "../section";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { LinearGradient } from "expo";

export default function progress({ ButtonComponent }) {
  return (
    <Container>
      <Section title="Labeled Buttons">
        <AwesomeButton
          style={styles.button}
          progress
          onPress={next => {
            setTimeout(() => {
              next();
            }, 1000);
          }}
          type="primary"
          width={200}
        >
          Progress
        </AwesomeButton>
        <AwesomeButton
          style={styles.button}
          progress
          onPress={next => {
            setTimeout(() => {
              next();
            }, 2000);
          }}
          type="primary"
          width={200}
          progressLoadingTime={6000}
        >
          Slower
        </AwesomeButton>
        <AwesomeButton
          style={styles.button}
          progress
          onPress={next => {
            setTimeout(() => {
              next();
            }, 1000);
          }}
          type="primary"
          width={200}
          backgroundActive="rgba(0,0,0,0)"
          backgroundProgress="rgba(0,0,0,0)"
        >
          No Bar
        </AwesomeButton>
        <AwesomeButton
          style={styles.button}
          progress
          onPress={next => {
            setTimeout(() => {
              next();
            }, 1000);
          }}
          type="primary"
          raiseLevel={0}
          borderRadius={0}
          width={200}
        >
          Flat Progress
        </AwesomeButton>
        <AwesomeButton
          style={styles.button}
          progress
          onPress={next => {
            setTimeout(() => {
              next();
            }, 500);
          }}
          type="primary"
          raiseLevel={6}
          borderRadius={60}
          width={58}
          height={60}
        >
          <MaterialCommunityIcons name="send" size={24} color="#FFFFFF" />
        </AwesomeButton>
        <AwesomeButton
          style={styles.button}
          progress
          onPress={next => {
            setTimeout(() => {
              next();
            }, 500);
          }}
          type="primary"
          raiseLevel={0}
          borderRadius={60}
          width={58}
          height={60}
        >
          <MaterialCommunityIcons name="facebook" size={24} color="#FFFFFF" />
        </AwesomeButton>
      </Section>
    </Container>
  );
}

progress.navigationOptions = ({ navigation }) => {
  return {
    title: "Progress Examples",
    headerStyle: {
      backgroundColor: "#1390da"
    },
    headerTintColor: "#FFF",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
};

const styles = StyleSheet.create({
  button: {
    marginTop: 8,
    marginBottom: 8
  },
  text: {
    fontWeight: "bold",
    color: "white"
  },
  iconLeft: { marginRight: 8 }
});
