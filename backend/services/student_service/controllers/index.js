const Student = require('../models/index')


const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving students', error: err.message });
  }
};


const getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving student', error: err.message });
  }
};


const addStudent = async (req, res) => {
  const { name, age, grade, email, enrolled } = req.body;

  try {
    const student = new Student({ name, age, grade, email, enrolled });
    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(400).json({ message: 'Error adding student', error: err.message });
  }
};


const updateStudent = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedStudent = await Student.findByIdAndUpdate(id, updates, {
      new: true, 
      runValidators: true, 
    });
    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(400).json({ message: 'Error updating student', error: err.message });
  }
};


const deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedStudent = await Student.findByIdAndDelete(id);
    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting student', error: err.message });
  }
};

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
};
