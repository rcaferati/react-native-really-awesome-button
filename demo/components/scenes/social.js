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

export default function social({ ButtonComponent }) {
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
          type="facebook"
          width={180}
          borderRadius={50}
          raiseLevel={8}
        >
          <FontAwesome
            style={[styles.iconLeft, { marginTop: -1 }]}
            name="facebook-square"
            size={24}
            color="white"
          />
          <Text style={styles.text}>Facebook</Text>
        </AwesomeButton>
        <AwesomeButton
          style={styles.button}
          progress
          onPress={next => {
            setTimeout(() => {
              next();
            }, 1000);
          }}
          type="twitter"
          width={180}
          borderRadius={8}
          raiseLevel={8}
        >
          <AntDesign
            style={[styles.iconLeft, { marginTop: 1, marginRight: 5 }]}
            name="twitter"
            size={24}
            color="white"
          />
          <Text style={styles.text}>Twitter</Text>
        </AwesomeButton>
        <AwesomeButton
          style={styles.button}
          progress
          onPress={next => {
            setTimeout(() => {
              next();
            }, 1000);
          }}
          type="messenger"
          width={180}
          borderRadius={0}
          raiseLevel={6}
        >
          <MaterialCommunityIcons
            style={[styles.iconLeft, { marginTop: 0, marginRight: 4 }]}
            name="facebook-messenger"
            size={25}
            color="white"
          />
          <Text style={styles.text}>Messenger</Text>
        </AwesomeButton>
        <AwesomeButton
          backgroundDarker="#EAAC1E"
          progress
          backgroundProgress="rgba(0,0,0,0.15)"
          onPress={next => {
            setTimeout(() => {
              next();
            }, 1000);
          }}
          ExtraContent={
            <LinearGradient
              colors={["#4C63D2", "#BC3081", "#F47133", "#FED576"]}
              style={{ ...StyleSheet.absoluteFillObject }}
            />
          }
          style={styles.button}
          width={180}
        >
          <FontAwesome
            style={[styles.iconLeft, { marginTop: -2, marginRight: 7 }]}
            name="instagram"
            size={24}
            color="white"
          />
          <Text style={styles.text}>Instagram</Text>
        </AwesomeButton>
      </Section>
      <Section title="Iconed Buttons">
        <AwesomeButton
          style={styles.button}
          progress
          onPress={next => {
            setTimeout(() => {
              next();
            }, 1000);
          }}
          type="whatsapp"
          width={60}
          borderRadius={0}
          raiseLevel={0}
        >
          <FontAwesome
            style={[styles.iconLeft, { marginTop: 0, marginRight: 0 }]}
            name="whatsapp"
            size={24}
            color="white"
          />
        </AwesomeButton>
        <AwesomeButton
          style={styles.button}
          progress
          onPress={next => {
            setTimeout(() => {
              next();
            }, 1000);
          }}
          type="youtube"
          width={60}
          borderRadius={0}
          raiseLevel={8}
        >
          <FontAwesome
            style={[styles.iconLeft, { marginTop: 0, marginRight: 0 }]}
            name="youtube"
            size={24}
            color="white"
          />
        </AwesomeButton>
        <AwesomeButton
          style={styles.button}
          progress
          onPress={next => {
            setTimeout(() => {
              next();
            }, 1000);
          }}
          type="linkedin"
          width={60}
          borderRadius={8}
          raiseLevel={8}
        >
          <FontAwesome
            style={[styles.iconLeft, { marginTop: 0, marginRight: 0 }]}
            name="linkedin"
            size={24}
            color="white"
          />
        </AwesomeButton>
        <AwesomeButton
          style={styles.button}
          progress
          onPress={next => {
            setTimeout(() => {
              next();
            }, 1000);
          }}
          type="pinterest"
          width={60}
          height={60}
          borderRadius={80}
          raiseLevel={8}
        >
          <FontAwesome
            style={[styles.iconLeft, { marginTop: 0, marginRight: 0 }]}
            name="pinterest"
            size={24}
            color="white"
          />
        </AwesomeButton>
      </Section>
    </Container>
  );
}

social.navigationOptions = ({ navigation }) => {
  return {
    title: "Social Examples",
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
