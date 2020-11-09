import React, { useEffect, } from 'react';
import { FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Container, safeAreaStyle } from '../styles/screens/home';

import { HomeScreenProps } from '../interfaces/screens';
import { ListsType } from '../interfaces/lists';

import Item from '../components/Item';
import { useListContext } from '../context/list';

export default function Home({ route }: HomeScreenProps) {
  const context = useListContext();
  const { lists } = context;

  const navigation = useNavigation();

  useEffect(() => {
    const newList = route.params?.newList;

    if (newList) {
      context.addNewList(newList);
    }
  }, [route.params?.newList]);

  const goToSubList = (props: ListsType) => {
    navigation.navigate('SubList', { props });
  }

  const renderItem = ({ item, index }: { item: ListsType, index: number }) => (
      <Item title={item.title} hasSubList handleGoToSubList={() => goToSubList(lists[index])} onDeleteItem={() => context.deleteList(item.title)} />
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