import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useTheme } from 'styled-components';

import * as S from './styles';

export function HomeScreen() {
  const theme = useTheme();
  // const { isLoading, getWorkTime } = useWorkTime()

  // useEffect(() => {
  //   getWorkTime()
  // }, [])

  return (
    <S.Container>
      <S.Title>HomeScreen</S.Title>
    </S.Container>
  );
}
