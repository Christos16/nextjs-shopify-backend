// models/StaffMember.ts
import mongoose, { Document } from 'mongoose';

interface IStaffMember extends Document {
  name: string;
  commissionPercent: number; // New field for commission percentage
}

const StaffMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  commissionPercent: { type: Number, default: 0 }, // Default to 0%
});

export const StaffMember = mongoose.model<IStaffMember>('StaffMember', StaffMemberSchema);
