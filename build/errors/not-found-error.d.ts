import { CustomError } from "./custom-error";
export declare class NotFoundError extends CustomError {
    constructor();
    StatusCode: number;
    serializeErrors(): {
        message: string;
    }[];
}
