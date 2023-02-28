# CodeKoller Logger

## Installation

```bash
npm i @williamkoller/codekoller-logger
```

## How to use

### In AppModule

```bash
import { Module } from '@nestjs/common';
import { CodekollerLoggerModule } from '@williamkoller/codekoller-logger';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CodekollerLoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

### In Service

```bash
import { Injectable } from '@nestjs/common';
import { CodekollerLoggerService } from '@williamkoller/codekoller-logger';

@Injectable()
export class AppService {
  constructor(private readonly logger: CodekollerLoggerService) {}
  getHello(): string {
    this.logger.log('AppService', 'getHello');
    return 'Hello World!';
  }
}
```

Made with 🖤 by [williamkoller](https://github.com/williamkoller) :wave:
