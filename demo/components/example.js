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
          Primary
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
          Secondary
        </ButtonComponent>
      </Section>
      <Section title="Empty Placeholder">
        <ButtonComponent style={styles.button} type="primary" size="medium" />
        <ButtonComponent style={styles.button} type="secondary" size="medium" />
      </Section>
      <Section title="Flat Buttons">
        <ButtonComponent
          raiseLevel={0}
          activeOpacity={0.75}
          style={styles.button}
          type="primary"
          size="medium"
        >
          Primary
        </ButtonComponent>
        <ButtonComponent
          raiseLevel={0}
          activeOpacity={0.75}
          style={styles.button}
          type="secondary"
          size="medium"
        >
          Secondary
        </ButtonComponent>
        <ButtonComponent
          raiseLevel={0}
          activeOpacity={0.75}
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
      <Section title="Linear Gradient Overwrite">
        <ButtonComponent
          backgroundDarker="#EAAC1E"
          ExtraContent={
            <LinearGradient
              colors={["#4C63D2", "#BC3081", "#F47133", "#FED576"]}
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
        >
          Primary Large Stretch
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
    ...StyleSheet.absoluteFillObject
  }
});
