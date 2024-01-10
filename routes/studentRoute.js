import express from 'express';
const router = express.Router();

// Importing files from controllers
import { getStudent, setStudent } from '../controllers/studentController.js';

router.route("/").get(getStudent);

router.route("/set").post(setStudent);

export default router;