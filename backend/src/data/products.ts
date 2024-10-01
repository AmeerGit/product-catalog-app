// Products mock data for the application
import { Product } from '../models/product';

export const products : Product[] = [
    {
      id: 1,
      name: 'Bed',
      category: 'furniture',
      description: 'The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.',
      price: 1899.99,
      imageUrl: [
        'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png',
        'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/2.png',
        'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/3.png'
      ]
    },
    {
      id: 2,
      name: 'Sofa',
      category: 'furniture',
      description: 'The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.',
      price: 2499.99,
      imageUrl: [
        'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png',
        'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/2.png',
        'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/3.png'
      ]
    },
    {
      id: 3,
      name: 'Table',
      category: 'furniture',
      description: 'The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.',
      price: 299.99,
      imageUrl: [
        'https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png',
        'https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/2.png',
        'https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/3.png'
      ]
    },
    {
      id: 4,
      name: 'Chair',
      category: 'furniture',
      description: 'The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.',
      price: 499.99,
      imageUrl: [
        'https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png', 
        'https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/2.png', 
        'https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/3.png'  
      ]
    }
];