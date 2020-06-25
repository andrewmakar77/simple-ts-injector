interface Type<T> {
  new (...args: any[]): T;
}

export class Injector {
  public resolve<T>(target: Type<any>): T {
    const tokens = Reflect.getMetadata('design:paramtypes', target) || [];
    const injections = tokens.map(token => this.resolve<any>(token));

    return new target(...injections);
  }
}