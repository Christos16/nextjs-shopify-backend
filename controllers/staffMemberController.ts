// src/controllers/staffMemberController.ts
import { Request, Response } from 'express';
import { StaffMember } from '../models/StaffMember';

// Fetch all staff members
export const getAllStaffMembers = async (req: Request, res: Response) => {
  try {
    const staffMembers = await StaffMember.find();
    res.json(staffMembers);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new staff member
export const addStaffMember = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const newStaffMember = new StaffMember({ name });
    await newStaffMember.save();
    res.status(201).json(newStaffMember);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};
