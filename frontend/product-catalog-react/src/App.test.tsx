import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe('App render test', () => {
  it('renders the App page', () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  });
});