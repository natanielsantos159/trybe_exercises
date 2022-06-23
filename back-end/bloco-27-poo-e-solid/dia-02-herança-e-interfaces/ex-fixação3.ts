interface Logger {
  log(param: string): void;
}

interface DataBase {
  logger: Logger;
  save(key: string, value: string): void;
}

class ConsoleLogger implements Logger {
  log(param: string): void{
    console.log('ConsoleLogger1' + param);
  };
}

class ConsoleLogger2 implements Logger {
  log(param: string): void{
    console.log('ConsoleLogger2' + param);
  };
}

class ExampleDatabase implements DataBase {
  constructor(logger: Logger = new ConsoleLogger()){}
}