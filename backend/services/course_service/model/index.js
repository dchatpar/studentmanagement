const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Course title is required'],
    },
    description: {
      type: String,
      required: [true, 'Course description is required'],
    },
    instructor: {
      type: String,
      required: [true, 'Instructor name is required'],
    },
    duration: {
      type: Number, 
      required: [true, 'Course duration is required'],
    },
    category: {
      type: String,
      required: [true, 'Course category is required'],
    },
  },
  {
    timestamps: true, 
  }
);

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
