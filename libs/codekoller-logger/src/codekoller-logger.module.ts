import { Module } from '@nestjs/common';
import { CodekollerLoggerService } from './codekoller-logger.service';

@Module({
  providers: [CodekollerLoggerService],
  exports: [CodekollerLoggerService],
})
export class CodekollerLoggerModule {}
