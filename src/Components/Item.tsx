import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { BorderlessButton } from 'react-native-gesture-handler';

import { Container, Title } from '../Styles/components/item';

interface PropsType {
  title: string;
}

function Item({ title }: PropsType) {
  const { colors } = useContext(ThemeContext);

  return (
    <Container> 
      <View />
      
      <Title>{title}</Title> 
      
      <BorderlessButton onPress={() => {}}>
        <Feather name="chevron-right" size={24} color={colors.terciary} />
      </BorderlessButton>    
    </Container>
  )
}

export default Item;