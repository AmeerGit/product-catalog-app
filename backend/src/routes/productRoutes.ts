// router for products
import express from 'express';
import { addProduct, getAllProducts, getProductById, searchProducts } from '../controllers/productController';

const router = express.Router();

router.post('/', addProduct);
router.get('/', getAllProducts);
router.get('/search', searchProducts);
router.get('/:id', getProductById);

export default router;