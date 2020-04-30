import React from 'react';
import { StyleSheet, Text, View , Image ,TouchableOpacity,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {SignStackNavigation} from "./src/screen"
import HomeTabNavigation from "./src/navigations/MainTab.js"




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SignStackNavigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
