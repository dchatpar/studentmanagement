const Course = require('../model/index');


const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving courses', error: err.message });
  }
};


const getCourseById = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving course', error: err.message });
  }
};


const addCourse = async (req, res) => {
  const { title, description, instructor, duration, category } = req.body;

  try {
    const course = new Course({ title, description, instructor, duration, category });
    const savedCourse = await course.save();
    res.status(201).json(savedCourse);
  } catch (err) {
    res.status(400).json({ message: 'Error adding course', error: err.message });
  }
};


const updateCourse = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedCourse = await Course.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });
    if (!updatedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(updatedCourse);
  } catch (err) {
    res.status(400).json({ message: 'Error updating course', error: err.message });
  }
};

const deleteCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCourse = await Course.findByIdAndDelete(id);
    if (!deletedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting course', error: err.message });
  }
};

module.exports = {
  getCourses,
  getCourseById,
  addCourse,
  updateCourse,
  deleteCourse,
};
