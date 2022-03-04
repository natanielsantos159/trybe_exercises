class SuperClass {
  public isSuper: boolean = true;

  sayHello() {
    console.log('Olá Mundo!');
  }
}

class SubClass extends SuperClass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

function sayHello(obj) {
  obj.sayHello();
  const message = obj.isSuper ? "Super!" : "Sub!";
  console.log(message)
}

const firstObject = new SuperClass();
const secondObject = new SubClass();

sayHello(firstObject);
sayHello(secondObject);