// // class Student{
// //     constructor(name, age){
// //         this.n = name;
// //         this.a = age;
// //     }
// //     stu(){
// //         console.log("Name of the student is "+ this.n);
// //         console.log("Age of the student is "+ this.a);
// //     }
// // }

// // var std = new Student("Amar",23);
// // std.stu();

// class Car{
//     // static brand = " ";
//     constructor(name){
//         this.brand = name
//     }
//     // static brandName = this.brand;

// static present(){
//     console.log( "I have a "+ this.brand);
//     // console.log( "I have a "+ this.brandName);
// }
// }
// const myCar = new Car("Ford");
// // myCar.present();


// // Static Keyword---------------------
// // class Example{
// //     static show(){
// //         console.log("Static function");
// //     }
// // }

// // Example.show();

// // Inheritance------------

// class Model extends Car{
//     constructor(name, model){
//         super(name);
//         this.model = model;
//     }

//     // Car.present();    // won't work
//     // Model.present();  // won't work
//     info(){
//         Car.present();
//         Model.present();
//         // console.log("I have a "+ super.name + " Which is "+ this.brand);
//         // console.log(" Which is "+ this.model);
//     }
// }

// const Ford = new Model("Ford","Mustang");
// Ford.info();  // accessible   if info is not declared static otherwise not accessible
// // Model.info();  // not accessible  if info is not declared static otherwise accessible
// Car.present();
// Model.present();


// class React{
//     constructor(name){
//         this.n = name;
//     }

//     static Amar(){
//         console.log("Amartya");
//     }
// }


// class ReactJs extends React{
//     // static show(){
//     //     console.log("THis is child class");
//     //     React.Amar();
//     // }
//      show(){
//         console.log("THis is child class");
//     }
// }
// React.Amar();
// ReactJs.show();

//-----------------ARROW FUNCTION-------------------
var square = (a) => a*a;
console.log(square(5));