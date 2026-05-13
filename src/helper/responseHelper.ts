import { Response } from 'express';

export const successResponse = <T>(
  res: Response,
  data: T,
  statusCode: number = 200
): Response => {
  return res.status(statusCode).json({
    success: true,
    data,
  });
};

export const errorResponse = (
  res: Response,
  message: string,
  statusCode: number = 500
): Response => {
  return res.status(statusCode).json({
    success: false,
    error: message,
  });
};