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
  padding: 25px;
`;

export const Illustration = StyleSheet.create({
  png: {
    marginTop: 50,
    alignSelf: 'center',
    width: 300,
    height: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export const Title = styled.Text`
  color: ${(props: styledThemeType) => props.theme.colors.terciary};
  width: 220px;
  font-weight: bold;
  font-size: 17px;
  margin-top: 25px;
  margin-bottom: 15px;
  align-self: center;
`;

export const Button = StyleSheet.create({
  borderless: {
    alignSelf: 'center',
    marginTop: 25
  }
}); 