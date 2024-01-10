import expressAsyncHandler from "express-async-handler";

// Importing models
import Student from '../models/studentModel.js';

//* @desc   List all students
//* @route  GET /api/students/
//* @access Public
const getStudent = expressAsyncHandler(async (req, res) => {
    const name = "Andam";
    const students = await Student.findOne({
        name: name
    });

    if (!students) {
        res.status(404);
        throw new Error(`There is no student named ${name}`);
    }

    res.status(200).json(students);
});

//* @desc   Create a new student
//* @route  POST /api/students/set
//* @access Public
const setStudent = expressAsyncHandler(async (req, res) => {
    const student = await Student.create({
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex,
        address: req.body.address
    });

    res.status(200).json(student);
});

export { getStudent, setStudent };