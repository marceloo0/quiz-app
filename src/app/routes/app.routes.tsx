import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { useTheme } from 'styled-components'

import { SignInScreen } from '../screens/SignInScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {
  // const theme = useTheme()
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        // cardStyle: { backgroundColor: theme.colors.background_primary},
      }}
    >
      <Screen name="SignInScreen" component={SignInScreen} />
    </Navigator>
  );
}
