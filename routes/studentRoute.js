import express from 'express';
const router = express.Router();

// Importing files from controllers
import { getStudent, setStudent, updateStudent, deleteStudent } from '../controllers/studentController.js';

//* List all students
router.route("/").get(getStudent);

//* Create a new student
router.route("/set").post(setStudent);

//* Find and update an existing student
router.route("/update/:id").put(updateStudent);

//* Delete an existing student
router.route("/delete/:id").delete(deleteStudent);

export default router;