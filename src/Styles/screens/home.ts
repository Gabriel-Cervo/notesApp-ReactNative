import styled from 'styled-components/native';
import { StyleSheet, StatusBar } from 'react-native';
import { styledThemeType } from 'styled-components';

export const safeAreaStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  }
});

export const Container = styled.SafeAreaView`
  background-color: ${(props: styledThemeType) => props.theme.colors.primary};
`;