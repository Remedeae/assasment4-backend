import { createLogger, format, transports } from "winston";
const prettyPrint = format.printf(({ timestamp, level, message, stack }) => {
    let output = message instanceof Error
        ? `${message.message}\n${message.stack}`
        : typeof message === "object"
            ? JSON.stringify(message, null, 2)
            : message;
    if (stack) {
        output += `\n${stack}`;
    }
    return `${timestamp}, [${level}]: ${output}`;
});
const logger = createLogger({
    level: "info",
    format: format.combine(format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), format.errors({ stack: true }), prettyPrint),
    transports: [
        new transports.File({ filename: "logs/error.log", level: "error" }),
        new transports.File({ filename: "logs/combinedLogs.log" }),
        new transports.Console(),
    ],
});
export default logger;
//# sourceMappingURL=logger.js.map