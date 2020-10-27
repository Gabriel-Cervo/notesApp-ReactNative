import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { styledThemeType } from 'styled-components';

export const safeAreaStyle = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const Container = styled.SafeAreaView`
  background-color: ${(props: styledThemeType) => props.theme.colors.primary};
`;