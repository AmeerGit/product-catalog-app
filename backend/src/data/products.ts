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
    },
    {
      id: 5,
      name: 'Mascara',
      category: 'beauty',
      description: 'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
      price: 9.99,
      imageUrl: [
        'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png'
      ]
    },
    {
      id: 6,
      name: 'Eyeshadow',
      category: 'beauty',
      description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      price: 19.99,
      imageUrl: [
        'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png'
      ]
    },
    {
      id: 7,
      name: 'Powder',
      category: 'beauty',
      description: 'The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.',
      price: 14.99,
      imageUrl: [
        'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png'
      ]
    },
    {
      id: 8,
      name: 'Lipstick',
      category: 'beauty',
      description: 'The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.',
      price: 12.99,
      imageUrl: [
        'https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png'
      ]
    },
    {
      id: 9,
      name: 'Nail Polish',
      category: 'beauty',
      description: 'The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.',
      price: 8.99,
      imageUrl: [
        'https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png'
      ]
    },
    {
      id: 10,
      name: 'Calvin Klein',
      category: 'fragrances',
      description: "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
      price: 49.99,
      imageUrl: [
        'https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png',
        'https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png',
        'https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png'
      ]
    },
    {
      id: 11,
      name: 'Noir',
      category: 'fragrances',
      description: 'Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.',
      price: 129.99,
      imageUrl: [
        'https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png',
        'https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/2.png',
        'https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/3.png'
      ]
    },
    {
      id: 12,
      name: "Dior",
      category: 'fragrances',
      description: "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
      price: 89.99,
      imageUrl: [
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/3.png"
      ]
    },
    {
      id: 13,
      name: 'Dolce',
      category: 'fragrances',
      description: "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
      price: 69.99,
      imageUrl: [
        'https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png',
        'https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/2.png',
        'https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/3.png'
      ]
    },
    {
      id: 14,
      name: 'Apple',
      category: 'groceries',
      description: 'Fresh and crisp apples, perfect for snacking or incorporating into various recipes.',
      price: 1.99,
      imageUrl: [
        'https://cdn.dummyjson.com/products/images/groceries/Apple/1.png'
      ]
    }
];