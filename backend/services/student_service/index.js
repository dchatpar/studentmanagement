const express = require('express');
const studentRoutes = require('./routes/index');
// const { validateStudentInput } = require('./utils/studentValidator');

const app = express();


app.use((req, res, next) => {
  console.log(`[Student Service] ${req.method} ${req.url}`);
  next();
});


app.use('/students', studentRoutes);

module.exports = app;
