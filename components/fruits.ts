import { Injection } from '../decorators/injection';
import { FruitsService } from '../services/fruits.service';
import { LoggerService } from '../services/logger.service';

@Injection()
export class Fruits {
  constructor(
    private fruitsService: FruitsService,
    private loggerService: LoggerService,
  ) {}

  public get(): string[] {
    this.loggerService.log(this.fruitsService.get());

    return this.fruitsService.get();
  }
}