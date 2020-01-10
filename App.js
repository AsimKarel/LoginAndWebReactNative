/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {switchNavigator} from './router'

const App = createAppContainer(switchNavigator);

export default App;
