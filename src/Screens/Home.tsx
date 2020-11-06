import React, { useCallback, useEffect, useState, useContext } from 'react';
import { FlatList } from 'react-native';

import { Container, safeAreaStyle } from '../Styles/screens/home';

import { HomeScreenProps } from '../interfaces/screens';
import { ListsType } from '../interfaces/lists';

import Item from '../Components/Item';
import { useListContext } from '../context/list';

export default function Home({ route }: HomeScreenProps) {
  const context = useListContext();
  const { lists } = context;

  useEffect(() => {
    const newList = route.params?.newList;

    if (newList) {
      context.addNewList(newList);
    }
  }, [route.params?.newList]);

  const renderItem = ({ item }: { item: ListsType }) => (
    <Item title={item.title} onDeleteItem={() => context.deleteList(item.title)} />
  );

  return (
    <Container style={safeAreaStyle.container}>
      <FlatList<ListsType>
        data={lists}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.title + index}
      />

    </Container>
  );
}