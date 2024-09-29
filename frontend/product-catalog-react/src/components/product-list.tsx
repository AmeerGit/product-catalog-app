import { useEffect, useState } from "react";
import { Product } from "../models/interfaces/product-props";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductCard from "./product-card";
import SearchBar from "./SearchBar";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[] | []>([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
      console.log("Products fetched:", data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSearchResults = (results: Product[]) => {
    setSearchResults(results);
  };

  const filterProducts = searchResults.length > 0 ? searchResults : products;

  if (!products) {
    return <div>Products not found!</div>;
  }

  return (
    <Container>
      <Row className="mb-3">
        <Col xs={4}>
          <SearchBar onSearchResults={handleSearchResults} />
        </Col>
      </Row>
      <Row>
        {filterProducts?.map((product) => (
          <Col xs={12} md={4} lg={3} key={product.id} className="mb-3">
            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <ProductCard product={product} onClick={() => {}}></ProductCard>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
