import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes'

function App() {
  return (
    <>
    <StatusBar style="auto" />
    <Routes />
    </>
  );
}

export default App;
