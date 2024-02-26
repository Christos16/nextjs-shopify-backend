import express from 'express';
import { getAllStaffMembers, addStaffMember } from '../controllers/staffMemberController';

const router = express.Router();

router.get('/', getAllStaffMembers);
router.post('/', addStaffMember);

export default router;
