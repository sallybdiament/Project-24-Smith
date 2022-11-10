import { NextFunction, Request, Response } from 'express';

const httpErrorMiddleware = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.log('err', err);
  const [status, message] = err.message.split(' | ');
  return res.status(Number(status)).json({ message }); 
};

export default httpErrorMiddleware;