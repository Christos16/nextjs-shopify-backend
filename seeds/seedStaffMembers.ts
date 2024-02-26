// seedStaffMembers.ts
import mongoose from 'mongoose';
import { StaffMember } from '../models/StaffMember';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI as string)
  .then(async () => {
    console.log('MongoDB Connected');
    await StaffMember.deleteMany({}); // Clear existing staff members

    // Seed staff members
    const staffMembersData = [
      { name: 'John Doe', commissionPercent: 10 }, // John Doe with 10% commission
      { name: 'Jane Smith', commissionPercent: 20 }, // Jane Smith with 20% commission
    ];

    await StaffMember.insertMany(staffMembersData);
    console.log('Staff members seeded');
    process.exit();
  })
  .catch((err: Error) => console.error(err));
