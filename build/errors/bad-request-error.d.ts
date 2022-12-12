import { CustomError } from "./custom-error";
export declare class BadRequestError extends CustomError {
    message: string;
    constructor(message: string);
    StatusCode: number;
    serializeErrors(): {
        message: string;
    }[];
}
