import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Container from "./container";
import Section from "./section";
import { AntDesign } from "@expo/vector-icons";

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
      <Section title="Auto Sizes">
        <ButtonComponent width={null} style={styles.button} type="primary">
          Primary Auto
        </ButtonComponent>
        <ButtonComponent
          style={styles.button}
          type="primary"
          size="small"
          width={null}
        >
          Secondary Small Auto
        </ButtonComponent>
        <ButtonComponent
          style={styles.button}
          type="anchor"
          size="large"
          width={null}
        >
          Anchor Large Auto
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
  iconLeft: { marginRight: 5 }
});
