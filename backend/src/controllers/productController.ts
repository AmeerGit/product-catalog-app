// Product controller
import { Request, Response } from 'express';
import { products } from '../data/products';
import { Product } from '../models/product';
import { calculateFuzzyDistance } from '../utils/calculateFuzzyDistance';

let productList: Product[] = [...products];

// Add a new product
export const addProduct = (req: Request, res: Response) => {
  const { name, category, description, price, imageUrl } = req.body;
  const newProduct: Product = {
    id: productList.length + 1,
    name,
    category,
    description,
    price,
    imageUrl
  };
  productList.push(newProduct);
  res.status(201).json(newProduct);
};

// Get all products
export const getAllProducts = (req: Request, res: Response) => {
  res.json(productList);
};

// Get a product by ID
export const getProductById = (req: Request, res: Response) => {
  const product = productList.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
};

// Search for products
export const searchProducts = (req: Request, res: Response) => {
  const searchTerm = req.query.query as string;
  const lowercasedTerm = searchTerm.toLowerCase();
  const results = productList.filter(product => {
    const productName = product.name.toLowerCase();
    const distance = calculateFuzzyDistance(productName, lowercasedTerm);
    const maxDistance = Math.floor(Math.max(productName.length, lowercasedTerm.length) / 2);
    const isMatch = productName.includes(lowercasedTerm) || distance <= maxDistance;
    return isMatch;
  });

  res.json(results);
};