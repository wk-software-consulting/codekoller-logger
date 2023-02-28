import { DynamicModule, Module } from '@nestjs/common';
import { CodekollerLoggerService } from './codekoller-logger.service';

@Module({
  providers: [CodekollerLoggerService],
  exports: [CodekollerLoggerService],
})
export class CodekollerLoggerModule {
  static register(): DynamicModule {
    return {
      module: CodekollerLoggerModule,
      providers: [CodekollerLoggerService],
      exports: [CodekollerLoggerService],
    };
  }
}
