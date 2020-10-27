import React from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';

import { Container, safeAreaStyle } from '../Styles/screens/home';

import Item from '../Components/Item';

interface DataType {
  item: {
    id: string;
    title: string;
  }
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Primeira Lista',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Segunda Lista',
  }
];

export default function Home() {
  const renderItem = ({ item }: DataType) => (
    <Item title={item.title} />
  );

  return (
    <Container style={safeAreaStyle.container}>
      <FlatList 
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>
  );
}