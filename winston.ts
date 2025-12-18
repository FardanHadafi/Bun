import winston from "winston";

const logger = winston.createLogger({
  format: winston.format.json(),
  level: "debug",
  transports: [
      new winston.transports.Console(),
  ]
});

console.info("Hello World");
console.warn("Hello World");
console.error("Hello World");