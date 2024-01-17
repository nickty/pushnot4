import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';

const HomeStack = createStackNavigator();

const StackNavigation = () => {
  return (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <HomeStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
    </HomeStack.Navigator>
  )
}

export default StackNavigation