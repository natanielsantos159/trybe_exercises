interface MyInterface {
  myNumber: number;
  myFunc (myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number){

  }

  myFunc (myParam: number): string {
    return `Soma: ${this.myNumber + myParam}`;
  }
}

const myObj = new MyClass(4);
console.log(myObj.myNumber)
console.log(myObj.myFunc(5));