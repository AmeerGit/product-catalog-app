import { ProductCardProps } from "../models/interfaces/product-props";
import { Card } from "react-bootstrap";

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {

  return (
    <Card onClick={onClick} style={{height: "100%"}}>
      <Card.Img variant="top" src={product.imageUrl[0]} alt={product.name}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;