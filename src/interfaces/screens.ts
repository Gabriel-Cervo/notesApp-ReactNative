import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: { newList?: {
    title: string;
    itens: Array<string>
  } };
};

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

export type HomeScreenProps = {
  route: HomeScreenRouteProp;
};