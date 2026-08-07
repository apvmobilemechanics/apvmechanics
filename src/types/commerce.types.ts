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

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  author: string;
}

export interface CartLine {
  id: string;
  quantity: number;
}
