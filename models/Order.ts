// models/Order.ts
import mongoose, { Document } from 'mongoose';

interface IOrder extends Document {
  date: Date;
  staffMember: mongoose.Schema.Types.ObjectId;
  products: [{
    productId: mongoose.Schema.Types.ObjectId,
    quantity: number
  }];
}

const OrderSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  staffMember: { type: mongoose.Schema.Types.ObjectId, ref: 'StaffMember', required: true },
  products: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true }
  }]
});

export const Order = mongoose.model<IOrder>('Order', OrderSchema);
