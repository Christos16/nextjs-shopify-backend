// productSeed.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../models/Product';

dotenv.config();

interface IProduct {
  name: string;
  category: string;
  price: number;
  commissionPercent: number; // Include commissionPercent field
}

const categories = ['Shirts', 'Pants', 'Skirts', 'Jackets', 'Coats & Jackets'];

const generateRandomProductName = (category: string): string => {
  // Generate a random number to choose a random index from the category name
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  return `${category} ${randomNumber}`;
};

const generateRandomPrice = (): number => {
  // Generate a random price between 10 and 100
  return Math.floor(Math.random() * 91) + 10;
};

const generateRandomCommissionPercent = (): number => {
  // Generate a random commission percentage of either 10 or 20
  return Math.random() < 0.5 ? 10 : 20;
};

const generateRandomProducts = (numProducts: number): IProduct[] => {
  const products: IProduct[] = [];
  for (let i = 0; i < numProducts; i++) {
    const randomCategoryIndex = Math.floor(Math.random() * categories.length);
    const category = categories[randomCategoryIndex];
    const name = generateRandomProductName(category);
    const price = generateRandomPrice();
    const commissionPercent = generateRandomCommissionPercent(); // Include commission percent
    products.push({ name, category, price, commissionPercent });
  }
  return products;
};

mongoose.connect(process.env.MONGODB_URI as string)
  .then(async () => {
    console.log('MongoDB Connected');
    await Product.deleteMany({});
    const numProductsToAdd = 1000; // Change this value to add more products
    const productsToAdd = generateRandomProducts(numProductsToAdd);
    await Product.insertMany(productsToAdd);
    console.log('Products seeded');
    process.exit();
  })
  .catch((err: Error) => console.error(err));
