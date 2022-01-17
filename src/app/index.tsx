import React from 'react';
import AppLoading from 'expo-app-loading';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
// import AppProvider from './src/contexts'
import { Routes } from './routes';
// import {
//   useFonts,
//   Roboto_400Regular,
//   Roboto_500Medium,
//   Roboto_700Bold
// } from '@expo-google-fonts/roboto';

// import theme from './src/styles/theme';

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Roboto_400Regular,
  //   Roboto_500Medium,
  //   Roboto_700Bold
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }
  return (
    <NavigationContainer>
      {/* <ThemeProvider theme={theme}> */}
      {/* <AppProvider> */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#121214' }}>
        <Routes />
      </SafeAreaView>
      {/* </AppProvider> */}
      {/* </ThemeProvider> */}
    </NavigationContainer>
  );
}
