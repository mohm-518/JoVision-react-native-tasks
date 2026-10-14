
import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function ScreenContent({number, navigation}) {
  const otherScreens = [1, 2, 3, 4].filter(
    screen => screen !== number,
  );

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.title}>Screen {number}</Text>

      {otherScreens.map(screen => (
        <View style={styles.button} key={screen}>
          <Button
            title={`Go to Screen ${screen}`}
            onPress={() =>
              navigation.navigate(`Screen ${screen}`)
            }
          />
        </View>
      ))}
    </ScrollView>
  );
}

function Screen1({navigation}) {
  return <ScreenContent number={1} navigation={navigation} />;
}

function Screen2({navigation}) {
  return <ScreenContent number={2} navigation={navigation} />;
}

function Screen3({navigation}) {
  return <ScreenContent number={3} navigation={navigation} />;
}

function Screen4({navigation}) {
  return <ScreenContent number={4} navigation={navigation} />;
}

export default function Task42() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen 1" component={Screen1} />
        <Tab.Screen name="Screen 2" component={Screen2} />
        <Tab.Screen name="Screen 3" component={Screen3} />
        <Tab.Screen name="Screen 4" component={Screen4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 24,
    backgroundColor: '#f1f5f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#1e293b',
  },
  button: {
    marginBottom: 15,
    borderRadius: 8,
    overflow: 'hidden',
  },
});
