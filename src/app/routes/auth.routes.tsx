import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { useTheme } from 'styled-components';

import { HomeScreen } from '../../screens/HomeScreen';
import { CongratulationScreen } from '../../screens/CongratulationScreen';
import { QuestionsScreen } from '../../screens/QuestionsScreen';
import { ResultScreen } from '../../screens/ResultScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  // const theme = useTheme()
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        // cardStyle: { backgroundColor: theme.colors.background_primary },
      }}
    >
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="CongratulationScreen" component={CongratulationScreen} />
      <Screen name="QuestionsScreen" component={QuestionsScreen} />
      <Screen name="ResultScreen" component={ResultScreen} />
    </Navigator>
  );
}
