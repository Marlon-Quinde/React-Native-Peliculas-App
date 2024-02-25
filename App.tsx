import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
import { FadeScreen } from './src/screens/FadeScreen';
import { GradientProvider } from './src/context/gradientContext';

const AppState = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  return (

    <GradientProvider>
      {children}
    </GradientProvider>
    )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        
        <Navigation />
      {/* <FadeScreen /> */}
      </AppState>
    </NavigationContainer>
  );
};

export default App;
