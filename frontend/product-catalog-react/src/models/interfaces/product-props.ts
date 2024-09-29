// Definition of the Product interface and ProductCardProps interface
export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  imageUrl: string[];
}

export interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export interface SearchBarProps {
  onSearchResults: (results: Product[]) => void;
}
