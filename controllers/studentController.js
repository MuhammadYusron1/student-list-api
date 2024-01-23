import expressAsyncHandler from "express-async-handler";

// Importing models
import Student from '../models/studentModel.js';

//* @desc   List all students
//* @route  GET /api/students/
//* @access Public
const getStudent = expressAsyncHandler(async (req, res) => {
    const name = "Mia";
    const students = await Student.find({
        // name: name
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
        studentID: req.body.studentID,
        age: req.body.age,
        sex: req.body.sex,
        address: req.body.address,
        subject: req.body.subject,
    });

    res.status(200).json(student);
});

//* @desc   Find and update an existing student
//* @route  PUT /api/students/update/:id
//* @access Public
const updateStudent = expressAsyncHandler(async (req, res) => {
    const students = await Student.findOne({
        name: req.params.id
    });

    if (!students) {
        res.status(404);
        throw new Error(`There is no student named ${req.params.id}`);
    }

    const updatedStudent = await Student.updateOne({name: req.params.id}, {
        name: req.body.name,
        studentID: req.body.studentID,
        age: req.body.age,
        sex: req.body.sex,
        address: req.body.address,
        subject: req.body.subject,
    }, {runValidators: true});

    res.status(200).json(updatedStudent);
});

//* @desc   Delete existing student
//* @route  DELETE /api/students/delete/:id
//* @access Public
const deleteStudent = expressAsyncHandler(async (req, res) => {
    const students = await Student.findOne({
        name: req.params.id
    });

    if (!students) {
        res.status(404);
        throw new Error(`There is no student named ${req.params.id}`);
    }

    const deletedStudent = await Student.deleteOne({name: req.params.id});

    res.status(200).json(deletedStudent);
});

export { getStudent, setStudent, updateStudent, deleteStudent };