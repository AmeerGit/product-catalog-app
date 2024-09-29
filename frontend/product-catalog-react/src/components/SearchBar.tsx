// frontend/product-catalog-react/src/components/SearchBar.tsx
import React, { useCallback, useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { debounce } from "../utils/debounce";
import { searchProducts } from "../services/api";

interface SearchBarProps {
  onSearchResults: (results: any[]) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSearch = useCallback(
    debounce(async (searchTerm: string) => {
      const results = await searchProducts(searchTerm);
      onSearchResults(results);
    }, 500),
    [onSearchResults]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
  };

  const handleButtonClick = () => {
    handleSearch(query);
  };

  return (
    <div>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search for products..."
          className="me-2"
          aria-label="Search"
          value={query}
          onChange={handleChange}
        />
        <Button variant="primary" onClick={handleButtonClick}>
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchBar;
