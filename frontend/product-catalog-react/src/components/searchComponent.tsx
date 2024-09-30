// frontend/product-catalog-react/src/components/SearchBar.tsx
import React, { useCallback, useState } from "react";
import { debounce } from "../utils/debounce";
import { searchProducts } from "../services/api";
import { SearchBarProps } from "../models/interfaces/product-props";
import "./searchComponent.css";

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
    <>
        <input
          type="search"
          placeholder="Search for products..."
          className="search-input"
          aria-label="Search"
          value={query}
          onChange={handleChange}
        />
    </>
  );
};

export default SearchBar;
