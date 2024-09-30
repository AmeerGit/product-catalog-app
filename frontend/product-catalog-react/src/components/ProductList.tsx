import { useEffect, useState } from "react";
import { Product } from "../models/interfaces/product-props";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import SearchBar from "./searchComponent";
import "./ProductList.css";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[] | []>([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
  }, []);
  
  // fetch products from the backend
  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
 
  // handle search results
  const handleSearchResults = (results: Product[]) => {
    setSearchResults(results);
  };

  const filterProducts = searchResults.length > 0 ? searchResults : products;

  if (!products) {
    return <div>Products not found!</div>;
  }

  return (
    <div className="container">
      <div className="wrapper">
      <h3 className="headerText">Product Catalog App</h3>
      <SearchBar onSearchResults={handleSearchResults} />
      </div>
      <div className="product-list">
        {filterProducts?.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} style={{ textDecoration: "none" }} aria-label={`View details for ${product.name}`}>
            <ProductCard product={product} onClick={() => {}} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;