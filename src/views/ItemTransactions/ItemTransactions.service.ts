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

export interface ParsedItemTransactionModel extends Omit<ItemTransactionModel, 'createdAt'|'updatedAt'>{
  createdAt: Date;
  updatedAt: Date;
}

export interface InventoryResponse {
  transactions: ParsedItemTransactionModel[];
  total: number;
}

export const getItemTransactions = async (): Promise<ParsedItemTransactionModel[]> => {
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
  return {
    transactions: response.data.transactions.map((i) => ({
      ...i,
      createdAt: new Date(i.createdAt),
      updatedAt: new Date(i.updatedAt),
    })),
    total: response.data.total,
  };
};
