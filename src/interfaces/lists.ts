export interface ListsType {
  title: string;
  itens: Array<string> | null
}

export interface ListContextData {
  lists: Array<ListsType>;
  addNewList(item: ListsType): void;
  deleteList(title: string): void;
  deleteItem(title: string, index: number): void;
}