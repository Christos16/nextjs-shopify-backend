import express from 'express';
import { getAllProducts, updateCommissionPercentBulk, updateCommissionPercent } from '../controllers/productController';

const router = express.Router();

router.put('/commission-update', updateCommissionPercentBulk);
router.put('/:productId/commission', updateCommissionPercent);
router.get('/', getAllProducts);


export default router;
