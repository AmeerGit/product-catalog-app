// frontend/product-catalog-react/src/services/api.ts
export const searchProducts = async (query: string) => {
    const response = await fetch(`http://localhost:3000/products/search?query=${query}`);
    const data = await response.json();
    return data;
  };