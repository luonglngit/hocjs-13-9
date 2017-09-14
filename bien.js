// từ khóa khởi tạo biến là var, let, const
var myVar;
console.log(myVar);
//các kiểu biến trong es
//kiểu string
var strVar = "đang học js";
myVar = "Luong " + strVar;
console.log(myVar);
console.log(typeof myVar);
myVar = `lUONG 2 ${strVar}`;
console.log(myVar);
console.log(typeof myVar);

//number
var myNum = 7;
console.log(typeof myNum);
var myNum = 0.1 + 0.2;
console.log(myNum);

myNum = NaN;
myNum = Infinity;
console.log(typeof myNum);

//object
//đối tượng
//(proprety:value)
var myObject = {
  name: "Luong",
  age: 20,
  learn: {
    js: "still learning",
    web: "new"
  },
  //method
  sayHello: function Hello(params) {
    console.log(params);
  }
};
console.log(myObject.name, myObject.age);
console.log(myObject["name"]);
console.log(`${myObject.name} ${myObject.learn.js}`);
console.log(typeof myObject);

//function
//es5
function myFunc(param) {
  console.log(typeof param);
  return "Hello";
}

myFunc(myObject);
console.log(myFunc());

//call method in object
console.log(myObject.sayHello(5));

//boolean
var myBol = true;
console.log(typeof myBol);

/// STRING, NUMBER, OBJECT, BOOLEAN, FUNCTION

//VAR LET CONST CỦA ES6
// ES5 CHỈ CÓ VAR
