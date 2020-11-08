import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { Container, safeAreaStyle } from '../Styles/screens/home';

import { SubListScreenProps } from '../interfaces/screens';
import { ListsType, SubListType } from '../interfaces/lists';

import Item from '../components/Item';
import { useListContext } from '../context/list';

export default function SubList({ route }: SubListScreenProps) {
  const context = useListContext();

  const [subList, setSubList] = useState<ListsType>({} as ListsType);

  useEffect(() => {
    const { title, itens } = route.params;

    setSubList({ title, itens });
  }, []);

  const renderItem = ({ item }: { item: string }) => (
    <Item title={item} onDeleteItem={() => context.deleteItem(item, 0)} />
  );

  return (
    <Container style={safeAreaStyle.container}>
      <FlatList<string>
        data={subList.itens}
        renderItem={renderItem}
        keyExtractor={(item, index) => item + index}
      />

    </Container>
  );
}