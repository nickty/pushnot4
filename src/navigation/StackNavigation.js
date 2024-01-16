import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'

const HomeStack = createStackNavigator 

const StackNavigation = () => {
  return (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  )
}

export default StackNavigation