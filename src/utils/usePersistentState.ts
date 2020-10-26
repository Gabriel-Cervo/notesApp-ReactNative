import { useState, useEffect, Dispatch, SetStateAction } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import getStorageDefault from './getStorageDefault';

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>
]

function usePersistentState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    getStorageDefault(key, initialState).then(res => setState(res));
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(key, JSON.stringify(state));
  }, [state, setState])

  return [state, setState];
} 

export default usePersistentState;
