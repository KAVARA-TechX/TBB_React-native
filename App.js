import React from 'react';
import { ScrollView, StyleSheet, Text,Image,View } from 'react-native';
import AppContainer from './src/navigation';
import { colors } from './src/constants/colors';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import RNBootSplash from "react-native-bootsplash";

export default App = () => {
  SplashScreen.hide();
  return(<AppContainer/>
  )
}

