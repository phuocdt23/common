import { CustomError } from "./custom-error";
export declare class UnauthorizedError extends CustomError {
    constructor();
    StatusCode: number;
    reason: string;
    serializeErrors(): {
        message: string;
    }[];
}
