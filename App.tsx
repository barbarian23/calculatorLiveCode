/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { CalculatorScreen, ResultScreen } from "./src/screen";
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import reducer from "./src/reducer";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Calculator" component={CalculatorScreen} />
      <Tab.Screen name="ResultScreen" component={ResultScreen} />
    </Tab.Navigator>
  );
}

const store = createStore(reducer)

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
