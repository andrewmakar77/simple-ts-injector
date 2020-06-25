interface ILogger {
  log:(value: any) => void
}

export class LoggerService implements ILogger{
  log(value: any): void {
    console.log(`Logger: ${value}`)
  }
}