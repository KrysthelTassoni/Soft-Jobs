import { logger } from "logger-express";
const loggerOption = {
    logToFile: true, // If you need to log information to a file
    colorize: true, // enable console colors
    infoColor: "magenta", // set a color for information messages
    errorColor: "red", // set a color for error messages:
  };
  const log = logger(loggerOption);

export default log;