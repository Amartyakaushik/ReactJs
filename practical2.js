class Person{
    constructor(name, age){
        this.n = name;
        this.a = age;
    }
}

var p1 = new Person("Amartya", 19);
console.log(p1.n);
console.log(p1.a);

//-------------Arrow Function--------------
var add = (a,b) => {
    console.log(a + b);
}

var printTable = (a) => {
    for(var i in 10){
        console.log(a * i);
    }
}

printTable(3);
// add(23,32);

//--------------map-------------------
const array1 = new Array(23,22,21,11);
const map = array1.map(a => a * 2);
console.log(map);