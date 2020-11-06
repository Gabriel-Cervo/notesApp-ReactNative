import React, { createContext, useContext } from 'react';

import { ListsType, ListContextData } from '../interfaces/lists';

import usePersistentState from '../utils/usePersistentState';

const AuthContext = createContext<ListContextData>({} as ListContextData);

export const ListProvider: React.FC = ({ children }) => {
    const [lists, setLists] = usePersistentState<ListsType[]>("lists", [] as ListsType[]);
    
    function addNewList(item: ListsType) {
      lists.map(list => {
        if (list.title === item.title) {
          return; // Lista com mesmo nome, arrumar popup de erro depois
        }
      });
  
      setLists(prev => [...prev, item])
    }

    function deleteList(title: string) {
      setLists(prev => prev.filter(item => item.title !== title));    
    }

    function deleteItem(title: string, index: number) {
      setLists(prev => prev.map(list => {
        if (list.itens != null && list.title == title) {
          list.itens.splice(index, 1);
        }

        return list;
      }));    

    }

    return (
        <AuthContext.Provider value={{lists, addNewList, deleteList, deleteItem}}> 
            {children}
        </AuthContext.Provider>
    )
}

export function useListContext() {
    const context = useContext(AuthContext);

    return context;
}