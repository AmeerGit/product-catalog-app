// fetch search API results from the server
export const searchProducts = async (query: string) => {
    const response = await fetch(`http://localhost:3000/products/search?query=${query}`);
    const data = await response.json();
    return data;
  };