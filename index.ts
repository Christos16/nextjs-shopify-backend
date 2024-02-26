import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import productRoutes from './routes/productRoutes';
import cors from 'cors';
import orderRoutes from './routes/orderRoutes';
import staffMemberRoutes from './routes/staffMemberRoutes';
import commissionRoutes from './routes/commissionRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

// Enable CORS for all routes and origins
app.use(cors());

app.use(express.json());

// Use routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/staff-members', staffMemberRoutes);
app.use('/api/commissions', commissionRoutes);

mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT} || MongoDB connected`)))
  .catch(err => console.error(err));
