// frontend/product-catalog-react/src/components/SearchBar.tsx
import React, { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { searchProducts } from "../../services/api";
import { SearchBarProps } from "../../models/interfaces/product-props";
import "./searchComponent.css";

const SearchBar: React.FC<SearchBarProps> = ({ onSearchResults }) => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    // handle search
    const handleSearch = async () => {
      if (debouncedQuery) {
        const results = await searchProducts(debouncedQuery);
        onSearchResults(results);
      }
    };

    handleSearch();
  }, [debouncedQuery]);
  
  // handle search input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
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
