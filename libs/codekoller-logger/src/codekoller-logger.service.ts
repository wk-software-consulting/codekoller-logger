import { Injectable, Logger } from '@nestjs/common';
import { LoggerInterface } from './interfaces/logger.interface';

@Injectable()
export class CodekollerLoggerService extends Logger implements LoggerInterface {
  debug(context: string, message: string) {
    super.debug(`[DEBUG] ${message}`, context);
  }
  log(context: string, message: string) {
    super.log(`[INFO] ${message}`, context);
  }
  error(context: string, message: string, trace?: string) {
    super.error(`[ERROR] ${message}`, trace, context);
  }
  warn(context: string, message: string) {
    super.warn(`[WARN] ${message}`, context);
  }
  verbose(context: string, message: string) {
    super.verbose(`[VERBOSE] ${message}`, context);
  }
}
