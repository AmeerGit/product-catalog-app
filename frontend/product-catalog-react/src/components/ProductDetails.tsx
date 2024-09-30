import { useParams } from "react-router-dom";
import { Product } from "../models/interfaces/product-props";
import { useEffect, useState } from "react";
import "./ProductDetails.css";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError('Failed to load Product');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product || error) {
    return <div>Having trouble finding the product!! Please try again later</div>;
  }

  return (
    <div className="product-details-container">
    <div className="product-details-header">
      <h2>Product Details ID: {id}</h2>
      <h3>{product?.name}</h3>
    </div>
    <div className="product-details-content">
      <p>{product?.description}</p>
      <p>Price: ${product?.price}</p>
      <p>Category: {product?.category}</p>
    </div>
    <div className="product-details-button">
      <button onClick={() => window.history.back()} aria-label="Back to Products"
        >Back to Products</button>
    </div>
  </div>
  );
};

export default ProductDetails;