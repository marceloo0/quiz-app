import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { useTheme } from 'styled-components'

// import { SignIn } from '../screens/SignIn';
// import { ForgotPassword } from '../screens/ForgotPassword';

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
      {/* <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="ForgotPassword"
        component={ForgotPassword}
      /> */}
    </Navigator>
  );
}
