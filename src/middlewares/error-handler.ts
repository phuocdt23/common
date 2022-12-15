import { NextFunction, Request, Response } from "express";
import { CustomError } from '../errors/custom-error';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(
    '-----------------------Start---------------------\n',
    err,
    '\n---------------------End-----------------------');
  if (err instanceof CustomError) {
    return res.status(err.StatusCode).send({ errors: err.serializeErrors() });
  }

  res.status(400).send({
    errors: [
      {
        message: 'Something went wrong!'
      }
    ]
  })
}