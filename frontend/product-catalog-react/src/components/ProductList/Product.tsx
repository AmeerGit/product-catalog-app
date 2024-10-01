import {useState } from "react";
import { Product } from "../../models/interfaces/product-props";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import SearchBar from "../SearchComponent/searchComponent";
import "./Product.css";
import { useFetch } from "../../hooks/useFetch";

const ProductList: React.FC = () => {
  const { data: products, loading, error } = useFetch<Product[]>("http://localhost:3000/products");
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !products) {
    return <div>Having trouble finding the product!! Please try again later</div>;
  }

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