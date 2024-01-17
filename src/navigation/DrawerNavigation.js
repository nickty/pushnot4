import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import SideMenu from '../components/SideMenu';

const DrawerStack = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <DrawerStack.Navigator>
      <DrawerStack.Screen name='HomeStackScreens' component={StackNavigation}/>
    </DrawerStack.Navigator>
  )
}

export default DrawerNavigation;