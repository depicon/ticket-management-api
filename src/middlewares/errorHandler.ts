import { Request, Response, NextFunction } from 'express';
import { errorResponse } from '../helper/responseHelper';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error('Error:', err.stack);
  errorResponse(res, 'Something went wrong!', 500);
};

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  errorResponse(res, 'Route not found', 404);
};