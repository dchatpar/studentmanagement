const express = require('express');
const { getStudents, addStudent, getStudentById, updateStudent, deleteStudent } = require('../controllers/index');

const router = express.Router();


router.get('/', getStudents);


router.get('/:id', getStudentById);


router.post('/', addStudent);


router.put('/:id', updateStudent);


router.delete('/:id', deleteStudent);

module.exports = router;
