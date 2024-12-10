const logger = (message) => {
    console.log(`[Logger] ${new Date().toISOString()}: ${message}`);
  };
  
  module.exports = { logger };
  