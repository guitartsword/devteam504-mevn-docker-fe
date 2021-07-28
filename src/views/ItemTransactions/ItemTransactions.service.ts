import axios from 'axios';

interface BaseModel {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

interface ItemTransaction {
  name: string;
  amount: number;
}

export type ItemTransactionModel = BaseModel & ItemTransaction;

export interface InventoryResponse {
  transactions: ItemTransactionModel[];
  total: number;
}

export const getItemTransactions = async () => {
  const response = await axios.get<ItemTransactionModel[]>('http://localhost:8020/api/item');
  return response.data.map((i) => ({
    ...i,
    createdAt: new Date(i.createdAt),
    updatedAt: new Date(i.updatedAt),
  }));
};

export const createItemTransaction = async (body: ItemTransaction) => {
  const response = await axios.post<ItemTransactionModel>('http://localhost:8020/api/item', body);
  return response;
};

export const getItemInventory = async (itemName: string) => {
  const response = await axios.get<InventoryResponse>(`http://localhost:8020/api/inventario/${itemName}`);
  return response.data;
};
