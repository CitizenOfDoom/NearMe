import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';
import ScreenC from './screens/ScreenC';
import Constants from 'expo-constants';
import { Container, PersistContainer } from 'unstated';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

//basically only Nav management

const TabNav = createBottomTabNavigator({
  Saved: {screen: ScreenC},
  Home: {screen: ScreenA},
  Location: {screen: ScreenB}

 });

const AppContainer = createAppContainer(TabNav);

export default AppContainer;
