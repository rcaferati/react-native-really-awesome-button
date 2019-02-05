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
        <ButtonComponent style={styles.button} type="secondary">
          Secondary
        </ButtonComponent>
        <ButtonComponent style={styles.button} type="anchor">
          Anchor
        </ButtonComponent>
        <ButtonComponent disabled style={styles.button} type="primary">
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
        >
          Progress
        </ButtonComponent>
      </Section>
      <Section title="Empty Placeholder">
        <ButtonComponent style={styles.button} type="primary" />
        <ButtonComponent style={styles.button} type="secondary" />
      </Section>
      <Section title="Icons">
        <ButtonComponent style={styles.button} type="twitter">
          <AntDesign
            style={[styles.iconLeft, { marginTop: 1 }]}
            name="twitter"
            size={24}
            color="white"
          />
          <Text style={styles.text}>Button Icon</Text>
        </ButtonComponent>
        <ButtonComponent style={styles.button} type="facebook">
          <AntDesign
            style={[styles.iconLeft, { marginTop: 1 }]}
            name="facebook-square"
            size={24}
            color="white"
          />
          <Text style={styles.text}>Button Icon</Text>
        </ButtonComponent>
      </Section>
      <Section title="Sizes">
        <ButtonComponent width={null} style={styles.button} type="secondary">
          Secondary Auto
        </ButtonComponent>
        <ButtonComponent style={styles.button} size="small" type="primary">
          Primary Small
        </ButtonComponent>
        <ButtonComponent style={styles.button} type="secondary" size="large">
          Secondary Large
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
