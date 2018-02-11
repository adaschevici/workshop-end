export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  quantity: number;
  inStock: boolean;
  lastRenewed?: number;
}

