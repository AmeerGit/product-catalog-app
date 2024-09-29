// frontend/product-catalog-react/src/components/SearchBar.tsx
import React, { useCallback, useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { debounce } from "../utils/debounce";
import { searchProducts } from "../services/api";
import { SearchBarProps } from "../models/interfaces/product-props";

const SearchBar: React.FC<SearchBarProps> = ({ onSearchResults }) => {
  const [query, setQuery] = useState("");
  
  // debounce the search function and pass the search results to the parent component
  const handleSearch = useCallback(
    debounce(async (searchTerm: string) => {
      const results = await searchProducts(searchTerm);
      onSearchResults(results);
    }, 500),
    [onSearchResults]
  );
  
  // handle the search input change and call the search function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
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
      </Form>
    </div>
  );
};

export default SearchBar;
