"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
const custom_error_1 = require("./custom-error");
class UnauthorizedError extends custom_error_1.CustomError {
    constructor() {
        super("You're not authorized to access this route");
        this.StatusCode = 404;
        this.reason = "You're not authorized to access this route";
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
    serializeErrors() {
        return [
            {
                message: this.reason
            }
        ];
    }
}
exports.UnauthorizedError = UnauthorizedError;
