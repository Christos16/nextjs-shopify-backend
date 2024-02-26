// routes/index.ts
import express from 'express';
import { simulateCommissions } from '../controllers/commissionController';

const router = express.Router();

router.post('/simulate', simulateCommissions);

export default router;
