import 'react-native-gesture-handler';
import * as React from 'react';
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes'

function App() {
  return (
    <>
    <View style={{ flex: 1 }}>
    <StatusBar style="auto" />
    <Routes />
    </View>
    </>
  );
}

export default App;
