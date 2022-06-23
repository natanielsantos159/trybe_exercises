var MyClass = /** @class */ (function () {
    function MyClass(myNumber) {
        this.myNumber = myNumber;
    }
    MyClass.prototype.myFunc = function (myParam) {
        return "Soma: ".concat(this.myNumber + myParam);
    };
    return MyClass;
}());
var myObj = new MyClass(4);
console.log(myObj.myNumber);
console.log(myObj.myFunc(5));
