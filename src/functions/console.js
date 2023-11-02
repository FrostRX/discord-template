require("colors");
const moment = require("moment");

module.exports = {
  console: (...args) => {
    console.log("[CONSOLE]".white, ...args);
  },
  error: (...args) => {
    console.log("[ERROR]".red, ...args);
  },
  warn: (...args) => {
    console.log("[WARN]".yellow, ...args);
  },
  debug: (...args) => {
    console.log("[DEBUG]".blue, ...args);
  },
  info: (...args) => {
    console.log("[INFO]".cyan, ...args);
  },
  success: (...args) => {
    console.log("[SUCCESS]".green, ...args);
  },
  log: (...args) => {
    const time = moment().format("HH:mm:ss");
    console.log(`[${time}]`.magenta, ...args);
  },
  api: (...args) => {
    console.log("[API]".bgBlue, ...args);
  },
  bot: (...args) => {
    console.log("[BOT]".bgMagenta, ...args);
  },
  custom: (type, ...args) => {
    if (!type) return console.log(...args);
    console.log(`[${type.toUpperCase()}]`.magenta, ...args);
  },
};
