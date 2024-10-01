import { ProductCardProps } from "../../models/interfaces/product-props";
import "./ProductCard.css";

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <div className="card-image">
        <img src={product.imageUrl[0]} alt={product.name} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;