class Student{
    constructor(name, age){
        this.n = name;
        this.a = age;
    }
    stu(){
        console.log("Name of the student is "+ this.n);
        console.log("Age of the student is "+ this.a);
    }
}

var std = new Student("Amar",23);
std.stu();

class Car{
    static brand = " ";
    constructor(name){
        this.brand = name
    }
    // static brandName = this.brand;

static present(){
    console.log( "I have a "+ this.brand);
    // console.log( "I have a "+ this.brandName);
}
}
const myCar = new Car("Ford");
// myCar.present();


// // Static Keyword---------------------
class Example{
    static show(){
        console.log("Static function");
    }
}

Example.show();

// // Inheritance------------

class Model extends Car{
    constructor(name, model){
        super(name);
        this.model = model;
    }

    // Car.present();    // won't work
    // Model.present();  // won't work
    info(){
        Car.present();
        Model.present();
        // console.log("I have a "+ super.name + " Which is "+ this.brand);
        // console.log(" Which is "+ this.model);
    }
}

const Ford = new Model("Ford","Mustang");
Ford.info();  // accessible   if info is not declared static otherwise not accessible
// Model.info();  // not accessible  if info is not declared static otherwise accessible
Car.present();
Model.present();


class React{
    constructor(name){
        this.n = name;
    }

    static Amar(){
        console.log("Amartya");
    }
}


class ReactJs extends React{
    // static show(){
    //     console.log("THis is child class");
    //     React.Amar();
    // }
     show(){
        console.log("THis is child class");
    }
}
React.Amar();
ReactJs.show();

//-----------------ARROW FUNCTION-------------------
var square = (a) => a*a;
console.log(square(5));


////----------------Aug-22nd---------------------
var myFun = function show(){
    console.log("It is a Function Expression");
}

var myFun2 = () => {
    console.log("This is an Arrow function");
}

myFun();
myFun2();

// //Arrow function with default parameters
var show = (a, b = 200) => {
    console.log(a + " " + b);
}

show(100,500);

////-------------Array---------------
var num = new Array(5);
var num = new Array(1,2);
var num = new Array(1,2,3,4,5);
var i;
for(i = 0; i<num.length; i++){
    // num[i] = i * 5;
    console.log(num[i]);
}

// //-------------2D-- Array--------------
var arr = [[2,3,4],[5,6,7]];
for(var i=0; i<2; i++){
    for(var j = 0; j<3; j++){
        console.log(arr[i][j]);
    }
}

var rainbow = new Array("Violet","Indigo","Green","Yellow","Orange","Red");
var show = (rainbow) => {
    for(var i = 0; i<rainbow.length; i++){
        console.log(rainbow[i]);
    }
}

show(rainbow);

for(var i in rainbow){
    console.log(i);
}
var show2(){
    return new Array("g","as","asd","asdf");
}

let name = Array.from("javaTpoint");
console.log(name);
let of = Array.of(42,10);
console.log(of);
console.log(of.length);


const num = [1,2,3,4,5,6,7,8,9,10];
const num1 = [1,2,3,4,5,6,7,8,9,10];
const num2 = [1,2,3,4,5,6,7,8,9,10];

console.log(num.copyWithin(1,3,5));
console.log(num1.copyWithin(1,3));
console.log(num2.copyWithin(1));

// //------------------ Array.prototype.find()--------------------
const numbers4 = [4,,9,16,25,29];
let first = numbers4.find(myFunction);
function myFunction(value, index,Array){
    return value > 7;
}
console.log(first);

////---------------Map-----------------
const numbers = [65,44,23,3];
const newArr = numbers.map(myFunction);
const numbers2 = [65,44,23,3];
const newArr2 = numbers.map(Math.sqrt);
console.log(newArr2);


function myFunction(num){
    return num * 10;
}
// console.log(newArr);
numbers.forEach((num)=>{
    console.log(num * 2);
})

////-------Map always creates a new array ----------------- 
const arr1 = [3,22,322,33432];
const map1 = arr1.map(x => x * 2);
console.log(map1);