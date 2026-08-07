export interface ProductItem {
  id: string;
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
  image: string;
  category: string;
}

export type Product = ProductItem;
