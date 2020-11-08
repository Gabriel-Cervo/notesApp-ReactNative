import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: { newList?: {
    title: string;
    itens: Array<string>
  } };

  SubList: {
    title: string;
    itens: Array<string>
  };
};

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
type SubListScreenRouteProp = RouteProp<RootStackParamList, 'SubList'>;

export type HomeScreenProps = {
  route: HomeScreenRouteProp;
};

export type  SubListScreenProps = {
  route: SubListScreenRouteProp;
}