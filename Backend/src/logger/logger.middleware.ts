import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const logger = new Logger();

    logger.debug(
      `Request: ${req.method} ${req.originalUrl}, Response Status: ${res.statusCode}`,
    );
    next();
  }
}
