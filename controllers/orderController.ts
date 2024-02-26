import { Request, Response } from 'express';
import { Order } from '../models/Order';

// Fetch all orders
export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new order
export const createOrder = async (req: Request, res: Response) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};
