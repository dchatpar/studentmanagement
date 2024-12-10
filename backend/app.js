const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

// Global Middleware
app.use(morgan('dev')); // Logging
app.use(helmet()); // Security headers
app.use(express.json()); // JSON body parser

// Rate Limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

module.exports = app;
