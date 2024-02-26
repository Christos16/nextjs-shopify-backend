// controllers/productController.ts
import { Request, Response } from 'express';
import Product from '../models/Product';

// Fetch all products
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update commission percent for a product
// Update commission percent for multiple products
export const updateCommissionPercentBulk = async (req: Request, res: Response) => {
    try {
      const { productIds, commissionPercent } = req.body;
      console.log(productIds, "PRODUCT IDS")
      console.log(commissionPercent, "COMMISSION PERCENT")
  
      // Update commission percent for each product ID in the array
      const updatePromises = productIds.map(async (productId: string) => {
        const product = await Product.findByIdAndUpdate(productId, { commissionPercent }, { new: true });
        return product;
      });
  
      // Wait for all updates to complete
      const updatedProducts = await Promise.all(updatePromises);

      // Fetch all products after updating commission percent
    const allProducts = await Product.find();
  
      res.json(allProducts);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };
  

  export const updateCommissionPercent = async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;
      const { commissionPercent } = req.body;
      
  
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        { commissionPercent },
        { new: true }
      );
  
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      // Fetch all products after updating commission percent
    const allProducts = await Product.find();

      res.json(allProducts);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };