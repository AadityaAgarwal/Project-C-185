import "react-native-gesture-handler"
import React from 'react';
import Main from "./screens/Main";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Introduction from './screens/Introduction';

const Stack=createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Introduction" screenOptions={{
        headerShown:false,
      }} >
        <Stack.Screen name="Introduction" component={Introduction} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


