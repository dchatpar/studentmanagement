const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    age: {
      type: Number,
      required: [true, 'Age is required'],
      min: [5, 'Age must be at least 5 years'],
    },
    grade: {
      type: String,
      required: [true, 'Grade is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      match: [/\S+@\S+\.\S+/, 'Invalid email address'],
    },
    enrolled: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, 
  }
);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
