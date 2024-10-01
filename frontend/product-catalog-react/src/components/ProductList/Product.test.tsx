import { describe, it, expect} from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductList from './Product';

describe('ProductList Component', () => {
  it('renders the ProductList component', async () => {
    render(
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>
    );
    // Check if the header is rendered
    expect(screen.getByText('Product Catalog App')).toBeInTheDocument();

    // Check if the search bar is rendered
    expect(screen.getByPlaceholderText('Search for products...')).toBeInTheDocument();
  });
});