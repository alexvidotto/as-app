const winston = require('winston');

module.exports = () => {
  
  const consoleLogger = new winston.transports.Console({
    format: winston.format.combine(winston.format.simple(), winston.format.colorize())
  })
  
  const loggerOptions = {
    level: process.env.LOG_LEVEL,
    format: winston.format.json(),
    transports: [
      consoleLogger
    ]
  };
  
  logger = winston.createLogger(loggerOptions);
  logger.exitOnError = false;
  logger.info('Winston logger initialized');

  return logger;
}