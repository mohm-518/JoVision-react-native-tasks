
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Screen1() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Screen 1</Text>
    </View>
  );
}

function Screen2() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Screen 2</Text>
    </View>
  );
}

function Screen3() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Screen 3</Text>
    </View>
  );
}

function Screen4() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Screen 4</Text>
    </View>
  );
}

export default function Task41() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}>
        <Tab.Screen
          name="Screen 1"
          component={Screen1}
        />
        <Tab.Screen
          name="Screen 2"
          component={Screen2}
        />
        <Tab.Screen
          name="Screen 3"
          component={Screen3}
        />
        <Tab.Screen
          name="Screen 4"
          component={Screen4}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2563eb',
  },
});
