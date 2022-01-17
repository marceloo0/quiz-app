import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, View } from 'react-native';
import { useTheme } from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';

import * as S from './styles';

export function AccessScreen() {
  const theme = useTheme();
  // const { isLoading, getWorkTime } = useWorkTime()

  // useEffect(() => {
  //   getWorkTime()
  // }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={['#084C7D', '#B1BECA']}>
        <S.Container>
          <S.Title>HomeScreen</S.Title>
        </S.Container>
      </LinearGradient>
    </SafeAreaView>
  );
}
