import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { Container, safeAreaStyle } from '../Styles/screens/home';

import { HomeScreenProps } from '../interfaces/screens';
import { ListsType } from '../interfaces/lists';

import Item from '../Components/Item';

export default function Home({ route }: HomeScreenProps) {
  const [lists, setLists] = useState([] as ListsType[]);
  
  const addNewList = (item: ListsType): void => {
    lists.map(list => {
      if (list.title === item.title) {
        return; // Lista com mesmo nome, arrumar popup de erro depois
      }
    });

    setLists(prev => [...prev, item])
  }

  const handleDeleteList = (title: string) => {
    setLists(prev => prev.filter(item => item.title !== title));
  }

  useEffect(() => {
    const newList = route.params?.newList;

    if (newList) {
      addNewList(newList);
    }
  }, [route.params?.newList]);

  const renderItem = ({ item }: { item: ListsType }) => (
    <Item title={item.title} onDeleteItem={() => handleDeleteList(item.title)}/>
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