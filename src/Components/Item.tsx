import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import { Feather } from '@expo/vector-icons';

import { BorderlessButton } from 'react-native-gesture-handler';

import { Container, Title } from '../Styles/components/item';

interface PropsType {
  title: string;
  onDeleteItem: () => void;
}

function Item({ title, onDeleteItem }: PropsType) {
  const { colors } = useContext(ThemeContext);

  return (
    <Container> 
      <BorderlessButton onPress={onDeleteItem}>
        <Feather name="trash" size={24} color={colors.terciary} />
      </BorderlessButton>   
      
      <Title>{title}</Title> 
      
      <BorderlessButton onPress={() => {}}>
        <Feather name="chevron-right" size={24} color={colors.terciary} />
      </BorderlessButton>    
    </Container>
  )
}

export default Item;