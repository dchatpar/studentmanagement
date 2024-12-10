const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./shared/config/db');


dotenv.config();


connectDB();


const app = express();


app.use(express.json());
app.use(require('cors')());


const studentService = require('./services/student_service/index');
const courseService = require('./services/course_service/index');
// const attendanceService = require('./services/attendance_service/app');
// const notificationService = require('./services/notification-service/app');


app.use('/api/students', studentService);
app.use('/api/courses', courseService);
// app.use('/api/attendance', attendanceService);
// app.use('/api/notifications', notificationService);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
