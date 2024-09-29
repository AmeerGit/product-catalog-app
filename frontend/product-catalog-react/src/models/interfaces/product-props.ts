export interface Product {
    id: number;
    name: string;
    category: string;
    description: string;
    price: number;
    imageUrl: string[];

}

export interface ProductCardProps {
  product: Product,
  onClick: () => void;
}
