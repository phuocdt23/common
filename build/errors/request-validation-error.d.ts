import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";
export declare class RequestValidationError extends CustomError {
    errors: ValidationError[];
    StatusCode: number;
    constructor(errors: ValidationError[]);
    serializeErrors(): {
        field: string;
        message: any;
    }[];
}
