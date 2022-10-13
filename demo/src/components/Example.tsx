import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedButton, getTheme } from 'react-native-really-awesome-button';
import { AntDesign } from '@expo/vector-icons';
import Container from './Container';
import Section from './Section';
import Character from './Character';

export default function Example({ index }: any) {
  const theme = getTheme(index);
  const handleTimeout = (next: any) => setTimeout(next, 500);

  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Character char={theme.name} />
        <Container>
          <Section title="Common">
            <ThemedButton
              config={theme}
              style={styles.button}
              type="primary"
              size="medium"
            >
              Primary
            </ThemedButton>
            <ThemedButton
              config={theme}
              style={styles.button}
              type="secondary"
              size="medium"
            >
              Secondary
            </ThemedButton>
            <ThemedButton
              config={theme}
              style={styles.button}
              type="anchor"
              size="medium"
            >
              Anchor
            </ThemedButton>
            <ThemedButton
              config={theme}
              style={styles.button}
              type="danger"
              size="medium"
            >
              Danger
            </ThemedButton>
            <ThemedButton
              config={theme}
              disabled
              style={styles.button}
              type="primary"
              size="medium"
            >
              Disabled
            </ThemedButton>
          </Section>
          <Section title="Progress">
            <ThemedButton
              config={theme}
              progress
              onPress={handleTimeout}
              style={styles.button}
              type="primary"
              size="medium"
            >
              Primary
            </ThemedButton>
            <ThemedButton
              config={theme}
              progress
              onPress={handleTimeout}
              style={styles.button}
              type="secondary"
              size="medium"
            >
              Secondary
            </ThemedButton>
            <ThemedButton
              config={theme}
              progress
              onPress={handleTimeout}
              style={styles.button}
              type="anchor"
              size="medium"
            >
              Anchor
            </ThemedButton>
            <ThemedButton
              config={theme}
              progress
              onPress={handleTimeout}
              style={styles.button}
              type="danger"
              size="medium"
            >
              Danger
            </ThemedButton>
          </Section>
          <Section title="Empty Placeholder">
            <ThemedButton
              config={theme}
              style={styles.button}
              type="primary"
              size="medium"
            />
            <ThemedButton
              config={theme}
              style={styles.button}
              type="secondary"
              size="medium"
            />
            <ThemedButton
              config={theme}
              style={styles.button}
              type="anchor"
              size="medium"
            />
            <ThemedButton
              config={theme}
              style={styles.button}
              type="danger"
              size="medium"
            />
          </Section>
          <Section title="Flat Buttons">
            <ThemedButton
              config={theme}
              raiseLevel={0}
              activeOpacity={0.75}
              style={styles.button}
              type="primary"
              size="medium"
            >
              Primary
            </ThemedButton>
            <ThemedButton
              config={theme}
              raiseLevel={0}
              activeOpacity={0.75}
              style={styles.button}
              type="secondary"
              size="medium"
            >
              Secondary
            </ThemedButton>
            <ThemedButton
              config={theme}
              raiseLevel={0}
              activeOpacity={0.75}
              style={styles.button}
              type="anchor"
              size="medium"
            >
              Anchor
            </ThemedButton>
            <ThemedButton
              config={theme}
              raiseLevel={0}
              progress
              onPress={handleTimeout}
              activeOpacity={0.75}
              style={styles.button}
              type="danger"
              size="medium"
            >
              Danger
            </ThemedButton>
          </Section>

          <Section title="Icons">
            <ThemedButton
              config={theme}
              style={styles.button}
              type="primary"
              size="medium"
              before={
                <AntDesign
                  style={[styles.iconLeft]}
                  name="menufold"
                  size={21}
                  color={theme.buttons.primary.textColor}
                />
              }
            >
              Button Icon
            </ThemedButton>
            <ThemedButton
              config={theme}
              style={styles.button}
              after={
                <AntDesign
                  style={[styles.iconRight]}
                  name="appstore-o"
                  size={21}
                  color={theme.buttons.anchor.textColor}
                />
              }
              type="anchor"
              size="medium"
            >
              Button Icon
            </ThemedButton>
            <ThemedButton
              progress
              onPress={handleTimeout}
              config={theme}
              style={styles.button}
              type="danger"
              size="medium"
              before={
                <AntDesign
                  style={[styles.iconLeft]}
                  name="delete"
                  size={21}
                  color={theme.buttons.danger.textColor}
                />
              }
            >
              Button Icon
            </ThemedButton>
            <ThemedButton
              config={theme}
              style={styles.button}
              type="primary"
              size="icon"
            >
              <AntDesign
                name="plussquareo"
                size={21}
                color={theme.buttons.primary.textColor}
              />
            </ThemedButton>
            <ThemedButton
              config={theme}
              style={styles.button}
              type="anchor"
              size="icon"
            >
              <AntDesign
                name="adduser"
                size={21}
                color={theme.buttons.anchor.textColor}
              />
            </ThemedButton>
            <ThemedButton
              progress
              onPress={handleTimeout}
              config={theme}
              style={styles.button}
              type="danger"
              size="icon"
            >
              <AntDesign
                name="delete"
                size={21}
                color={theme.buttons.danger.textColor}
              />
            </ThemedButton>
          </Section>
          {/* <Section title="Linear Gradient Overwrite">
            <Themed
              config={theme}
              backgroundDarker="#EAAC1E"
              backgroundActive="rgba(0,0,0,0.1)"
              ExtraContent={
                <LinearGradient
                  colors={['#4C63D2', '#BC3081', '#F47133', '#FED576']}
                  style={styles.gradient}
                />
              }
              style={styles.button}
              type="primary"
              size="medium">
              Gradient Overwrite
            </ThemedButton>
          </Section> */}
          <Section title="With auto and stretch">
            <ThemedButton
              config={theme}
              width={null}
              style={styles.button}
              type="primary"
            >
              Primary Auto
            </ThemedButton>
            <ThemedButton
              config={theme}
              style={styles.button}
              width={null}
              type="secondary"
              size="small"
            >
              Secondary Small Auto
            </ThemedButton>
            <ThemedButton
              config={theme}
              style={styles.button}
              type="anchor"
              size="large"
            >
              Anchor Large Auto
            </ThemedButton>
            <ThemedButton
              config={theme}
              style={styles.button}
              type="danger"
              size="large"
              stretch
            >
              Primary Large Stretch
            </ThemedButton>
          </Section>
        </Container>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 8,
    marginBottom: 8,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  iconLeft: { marginRight: 5 },
  iconRight: { marginLeft: 5 },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
});
