# CodeKoller Logger

## For Projects NestJS

## Installation

```bash
npm i @williamkoller/codekoller-logger
```

## How to use

### In AppModule

```bash
import { Module } from '@nestjs/common';
import { LoggerModule } from '@williamkoller/codekoller-logger';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

### In Service

```bash
import { Injectable } from '@nestjs/common';
import { LoggerService } from '@williamkoller/codekoller-logger';

@Injectable()
export class AppService {
  constructor(private readonly logger: LoggerService) {}
  getHello(): string {
    this.logger.log('AppService', 'getHello');
    return 'Hello World!';
  }
}
```

Made with 🖤 by [williamkoller](https://github.com/williamkoller) :wave:
