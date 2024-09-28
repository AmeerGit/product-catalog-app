// Product controller
import { Request, Response } from 'express';
import { products } from '../data/products';
import { Product } from '../models/product';
import { calculateFuzzyDistance } from '../utils/calculateFuzzyDistance';

let productList: Product[] = [...products];

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

export const getAllProducts = (req: Request, res: Response) => {
  res.json(productList);
};

export const getProductById = (req: Request, res: Response) => {
  const product = productList.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
};

export const searchProducts = (req: Request, res: Response) => {
  const searchTerm = req.query.query as string;
  const lowercasedTerm = searchTerm.toLowerCase();
  const results = productList.filter(product => {
    const distance = calculateFuzzyDistance(product.name.toLowerCase(), lowercasedTerm);
    const maxDistance = Math.floor(Math.max(product.name.length, lowercasedTerm.length) / 2);
    return distance <= maxDistance;
  });

  res.json(results);
};