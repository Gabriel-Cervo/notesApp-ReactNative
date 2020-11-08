import React, { useContext } from 'react';

import { useNavigation } from '@react-navigation/native';

import { ThemeContext } from 'styled-components';

import { Feather } from '@expo/vector-icons';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Container, Title } from '../styles/components/header';

interface HeaderProps {
  title: string;
  toggleTheme: () => Promise<void>;
  hasCancelButton?: boolean;
}

export default function Header({ title, toggleTheme, hasCancelButton }: HeaderProps) {

  const { name, colors } = useContext(ThemeContext);

  const navigation = useNavigation();

  const goToAddListScreen = () => {
    navigation.navigate('AddList');
  }

  const goToHomePage = () => {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <BorderlessButton onPress={toggleTheme}>
        {name === 'light' ? (
          <Feather name="moon" size={24} color={colors.terciary} />
        ) : (
            <Feather name="sun" size={24} color={colors.terciary} />
          )
        }
      </BorderlessButton>

      <Title>{title}</Title>
      
      {hasCancelButton ? (
        <BorderlessButton onPress={goToHomePage}>
          <Feather name="x" size={24} color="#ff669d" />
        </BorderlessButton>
      ) : (
        <BorderlessButton onPress={goToAddListScreen}>
          <Feather name="plus" size={24} color={colors.terciary} />
        </BorderlessButton>
      )}
      
    </Container>
  );
}