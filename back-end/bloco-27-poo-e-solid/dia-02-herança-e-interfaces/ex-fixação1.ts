class SuperClass {
  public isSuper: boolean = true;

  sayHello() {
    console.log('Olá Mundo!');
  }
}

class SubClass extends SuperClass {

}

function sayHello(obj) {
  obj.sayHello();
}

const firstObject = new SuperClass();
const secondObject = new SubClass();

sayHello(firstObject);
sayHello(secondObject);