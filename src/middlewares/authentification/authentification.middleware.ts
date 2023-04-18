import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { decode, verify } from 'jsonwebtoken';

@Injectable()
export class AuthentificationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['auth-user'];
    if (!authHeader) {
      return res.status(401).json({ message: 'Auth token missing' });
    }
    try { 
      const decodedToken: any = decode(authHeader.toString());
      // console.log(authHeader.toString());
      req['userId'] = decodedToken.userId;
      console.log(req['userId']);
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Invalid auth token' });
    }
  }
}
