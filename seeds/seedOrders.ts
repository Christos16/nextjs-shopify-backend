import mongoose from 'mongoose';
import { Order } from '../models/Order';
import { StaffMember } from '../models/StaffMember';
import Product from '../models/Product';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI as string)
  .then(async () => {
    console.log('MongoDB Connected');
    await Order.deleteMany({}); // Clear existing orders

    // Get all staff members
    const staffMembers = await StaffMember.find();

    // Get all products
    const products = await Product.find();

    // Seed orders
    const ordersData = [];
    const totalOrders = 1000; // Number of orders to generate

    // Date range between December 2023 and February 25, 2024
    const startDate = new Date('2023-12-01').getTime();
    const endDate = new Date('2024-02-25').getTime();
    const range = endDate - startDate;

    // Generate orders with random dates
    for (let i = 0; i < totalOrders; i++) {
      const randomProductIndex = Math.floor(Math.random() * products.length);
      const randomStaffMemberIndex = Math.floor(Math.random() * staffMembers.length);
      const randomQuantity = Math.floor(Math.random() * 5) + 1; // Random quantity between 1 and 5

      // Generate random date between startDate and endDate
      const randomDate = new Date(startDate + Math.random() * range);

      const order = {
        date: randomDate,
        staffMember: staffMembers[randomStaffMemberIndex]._id,
        products: [{ productId: products[randomProductIndex]._id, quantity: randomQuantity }]
      };

      ordersData.push(order);
    }

    await Order.insertMany(ordersData);
    console.log('Orders seeded');
    process.exit();
  })
  .catch((err: Error) => console.error(err));
