import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CreateScreen from '../screens/CreateScreen';
import PersonalDetails from '../screens/PersonalDetails';
import Education from '../screens/Education';
import Experience from '../screens/Experience';
import Skills from '../screens/Skills';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={null}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
        <Stack.Screen name="Education" component={Education} />
        <Stack.Screen name="Experience" component={Experience} />
        <Stack.Screen name="Skills" component={Skills} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
