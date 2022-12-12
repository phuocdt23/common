import { CustomError } from "./custom-error";
export declare class DatabaseConnectionError extends CustomError {
    StatusCode: number;
    reason: string;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
