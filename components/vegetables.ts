import { Injection } from '../decorators/injection';
import { LoggerService } from '../services/logger.service';

@Injection()
export class Vegetables {
  private list = ['Potato', 'Onion'];

  constructor(private loggerService: LoggerService) {}

  get():string[] {
    this.loggerService.log(this.list);

    return this.list;
  }
}