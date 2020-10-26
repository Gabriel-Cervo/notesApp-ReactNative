import React, { useContext } from 'react';
import { Switch } from 'react-native';

import { ThemeContext } from 'styled-components';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, SwitchView, MoonIcon, Title} from './styles';

interface HeaderProps {
  title: string;
  toggleTheme: () => void;
}

export default function Header({ title, toggleTheme }: HeaderProps) {
  const { name, colors } = useContext(ThemeContext);
  
  const navigation = useNavigation();

  function handleGoToAddList() {
    navigation.navigate('NewList');
  }

  return (
      <Container>
      
      <SwitchView>
        <Switch 
          onValueChange={toggleTheme}
          value={name === 'dark'}
        />
        <MoonIcon name="moon" size={20} color={colors.secondary} />
      </SwitchView>

      <Title>{title}</Title>

      <BorderlessButton onPress={handleGoToAddList}>
        <Feather name="plus" size={24} color={colors.secondary} />
      </BorderlessButton>
    </Container>
  );
}