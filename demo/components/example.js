import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Container from "./container";
import Section from "./section";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo";

export default function example({ ButtonComponent }) {
  return (
    <Container>
      <Section title="Common">
        <ButtonComponent style={styles.button} type="primary" size="medium">
          Primary
        </ButtonComponent>
        <ButtonComponent style={styles.button} type="secondary" size="medium">
          Secondary
        </ButtonComponent>
        <ButtonComponent style={styles.button} type="anchor" size="medium">
          Anchor
        </ButtonComponent>
        <ButtonComponent
          disabled
          style={styles.button}
          type="primary"
          size="medium"
        >
          Disabled
        </ButtonComponent>
      </Section>
      <Section title="Progress">
        <ButtonComponent
          progress
          onPress={next =>
            setTimeout(() => {
              next();
            }, 1000)
          }
          style={styles.button}
          type="primary"
          size="medium"
        >
          Progress
        </ButtonComponent>
        <ButtonComponent
          progress
          onPress={next =>
            setTimeout(() => {
              next();
            }, 1000)
          }
          style={styles.button}
          type="secondary"
          size="medium"
        >
          Progress
        </ButtonComponent>
      </Section>
      <Section title="Empty Placeholder">
        <ButtonComponent style={styles.button} type="primary" size="medium" />
        <ButtonComponent style={styles.button} type="secondary" size="medium" />
      </Section>
      <Section title="Flat Buttons">
        <ButtonComponent
          raiseLevel={0}
          style={styles.button}
          type="primary"
          size="medium"
        >
          Primary
        </ButtonComponent>
        <ButtonComponent
          raiseLevel={0}
          style={styles.button}
          type="secondary"
          size="medium"
        >
          Secondary
        </ButtonComponent>
        <ButtonComponent
          raiseLevel={0}
          style={styles.button}
          type="anchor"
          size="medium"
        >
          Anchor
        </ButtonComponent>
      </Section>
      <Section title="Icons">
        <ButtonComponent style={styles.button} type="twitter" size="medium">
          <AntDesign
            style={[styles.iconLeft, { marginTop: 1 }]}
            name="twitter"
            size={24}
            color="white"
          />
          <Text style={styles.text}>Button Icon</Text>
        </ButtonComponent>
        <ButtonComponent style={styles.button} type="facebook" size="medium">
          <AntDesign
            style={[styles.iconLeft, { marginTop: 1 }]}
            name="facebook-square"
            size={24}
            color="white"
          />
          <Text style={styles.text}>Button Icon</Text>
        </ButtonComponent>
      </Section>
      <Section title="With auto and stretch">
        <ButtonComponent width={null} style={styles.button} type="primary">
          Primary Auto
        </ButtonComponent>
        <ButtonComponent
          style={styles.button}
          width={null}
          type="primary"
          size="small"
        >
          Secondary Small Auto
        </ButtonComponent>
        <ButtonComponent style={styles.button} type="anchor" size="large">
          Anchor Large Auto
        </ButtonComponent>
        <ButtonComponent
          style={styles.button}
          type="primary"
          size="large"
          stretch
          progress
          onPress={next =>
            setTimeout(() => {
              next();
            }, 1000)
          }
        >
          Primary Large Stretch
        </ButtonComponent>
      </Section>
      <Section title="Linear Gradient Overwrite">
        <ButtonComponent
          backgroundDarker="#4f4f4f"
          ExtraContent={
            <LinearGradient
              colors={["#cfcfcf", "#ababab", "#6f6f6f"]}
              style={styles.gradient}
            />
          }
          style={styles.button}
          type="primary"
          size="medium"
        >
          Gradient Overwrite
        </ButtonComponent>
      </Section>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 8,
    marginBottom: 8
  },
  text: {
    fontWeight: "bold",
    color: "white"
  },
  iconLeft: { marginRight: 5 },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%"
  }
});
