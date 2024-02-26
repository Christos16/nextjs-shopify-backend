import { Request, Response } from 'express';
import { Order } from '../models/Order';
import { StaffMember } from '../models/StaffMember'; 

// Simulate commissions
export const simulateCommissions = async (req: Request, res: Response) => {
  try {
    const { startDate, endDate, staffMemberId } = req.body;

    // Populate staff member to get the actual document
    const staffMember = await StaffMember.findById(staffMemberId);

    // Check if staff member exists
    if (!staffMember) {
      return res.status(404).json({ message: 'Staff member not found' });
    }

    // Find orders within the specified date range for the staff member
    const orders = await Order.find({
      staffMember: staffMember._id, 
      date: { $gte: new Date(startDate), $lte: new Date(endDate) }
    }).populate('products.productId');

    let dailyCommissions: { [key: string]: any } = {};

    orders.forEach(order => {
      const orderDate = order.date.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
      if (!dailyCommissions[orderDate]) {
        dailyCommissions[orderDate] = { ordersCount: 0, sumCommissions: 0 };
      }
      dailyCommissions[orderDate].ordersCount += 1;

      order.products.forEach(({ productId, quantity }) => {
        const product: any = productId; 
        const commission = product.price * (product.commissionPercent / 100) * quantity;
        dailyCommissions[orderDate].sumCommissions += commission;
      });
    });

    // Convert dailyCommissions object into an array of items
    const commissionArray = Object.entries(dailyCommissions).map(([date, { ordersCount, sumCommissions }]) => ({
      date,
      ordersCount,
      sumCommissions
    }));

    res.json(commissionArray);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
