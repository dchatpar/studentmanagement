const express = require('express');
const courseRoutes = require('./routes/index');
// const { validateStudentInput } = require('./utils/studentValidator');

const app = express();


app.use((req, res, next) => {
  console.log(`[Course Service] ${req.method} ${req.url}`);
  next();
});


app.use('/course', courseRoutes);

module.exports = app;
