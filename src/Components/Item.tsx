import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import { Feather } from '@expo/vector-icons';

import { BorderlessButton } from 'react-native-gesture-handler';

import { Container, EmptyView, Title } from '../styles/components/item';

import { ListsType } from '../interfaces/lists';

interface PropsType {
  title: string;
  hasSubList?: boolean;
  onDeleteItem: () => void;
  handleGoToSubList?: () => void;
}

function Item({ title, onDeleteItem, hasSubList = false, handleGoToSubList }: PropsType) {
  const { colors } = useContext(ThemeContext);

  return (
    <Container> 
      <BorderlessButton onPress={onDeleteItem}>
        <Feather name="trash" size={24} color={colors.terciary} />
      </BorderlessButton>   
      
      <Title>{title}</Title> 
      
      {hasSubList ? (
        <BorderlessButton onPress={handleGoToSubList}>
          <Feather name="chevron-right" size={24} color={colors.terciary} />
        </BorderlessButton>   
      ): (
        <EmptyView />
      )}
       
    </Container>
  )
}

export default Item;