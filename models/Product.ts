import mongoose, { Document, Schema } from 'mongoose';

interface IProduct extends Document {
  name: string;
  category: string;
  price: number;
  commissionPercent?: number;
}

const productSchema: Schema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  commissionPercent: Number,
});

const Product = mongoose.model<IProduct>('Product', productSchema);

export default Product;
