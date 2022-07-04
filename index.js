"use strict";

// 2․ ստեղծում եք 20 օրինակ Destructuring-ի, այսինքն 10 հատ զանգված 10 հատ օբջեքթ, կեսը  պետք է լինեն ճյուղավորված 
// գոնե 1 աստիճան, այսինքն զանգվածի մեջ զանգված, օբջեքթի մեջ օբջեքթ, բայց պետք է լինեն նաև չճյուղավորվածները

// Destructuring of Arrays
// 1
const numArr = [11, 45, 78, 125, 9, 20, 2];

let [a, b] = numArr;
// console.log(a);
// console.log(b);
// console.log("--------------");

// 2
let [a1, , b1] = numArr;
// console.log(a1);
// console.log(b1);
// console.log("--------------");

// 3
const phones = ["Samsung", "iphone", "Nokia", "Xiaomi"];
let [ph1, ph2, ph3, ph4] = phones;
// console.log(ph1);
// console.log(ph4);
// console.log("--------------");

// 4
const people = [
    {name: "Joe", age: 25},
    {name: "Bill", age: 19},
    {name: "Jesika", age: 29}
 ];
let [person1, , person3] = people;
// console.log(person1);
// console.log(person3);
// console.log("--------------");


// 5
const carNames = ["Audi", "Opel", "Kia", "Reno", "BMW", "VW"];
let [carName1, , , , carName2] = carNames;
// console.log(carName1);
// console.log(carName2);
// console.log("--------------");

// 6
const cars = ["Audi", ["Optima", "Sportage", "Sorento", "Cadenza" ], "Reno", ["Touareg", "Golf", "Passat", "Tiguan"]];
let [, kiaModels, ,vwModels] = cars;
// console.log(kiaModels);
// console.log(vwModels);
// console.log("--------------");

// 7
const numArr1 = [11, 45, [78, 125, 9], 20, 2];
let [ , , x] = numArr1;
// console.log(x);
// console.log("--------------");

// 8
const numArr2 = [[11, [22, 33], 44], 45, [78, 125, 9], 20, 2];
let [ x1] = numArr2;
let [, x2] = x1;
// console.log(x1);
// console.log(x2[1]);
// console.log("--------------");

// 9
const people1 = [
    {name: "Joe", age: 25},
    {name: "Bill", age: 19},
    {name: "Jesika", age: 29},
    [ 
        {name: "James", age: 18},
        {name: "Tomm", age: 34},
        {name: "Mike", age: 28}
    ]
 ];
let [, , , peoples] = people1;
//console.log(peoples[2]);
// console.log("--------------");

// 10
const letters = ["A", "B", "C", "D", "E"];
let [A, B, C, D, E] = letters;
//console.log(A);
// console.log("--------------");



// Destructuring of Objects
// 1
const person = {
    name: {
        firstName: "Aram",
        lastName: "Khachaturyan"
    },
    age: 100
};
const {firstName, lastName} = person.name;
//console.log(`${firstName} ${lastName}`);
// console.log("--------------");

// 2
const phoneShop = {
    phones: {
        smartphones: "Available",
        justPhone: "NotAvailable"
    },
    laptops: {
        notebooks: "Available",
        netbooks: "Available"
    }
};
const {justPhone} = phoneShop.phones;
//console.log(justPhone);
// console.log("--------------");

// 3
const car = {
    carName: "Rolls-Royce",
    model: "Phantom",
    price$: 470000,
    color: "White"
};
const {carName, model} = car;
//console.log(`${carName} ${model}`);
// console.log("--------------");

// 4
const carDescription = {
    carName: "Audi",
    model: "R8",
    price$: 50000,
    color: {
        innerColor: "White",
        outerColor: "Dark Braun"
    }
};
const {innerColor, outerColor} = carDescription.color;
//console.log(`Inner color of car is ${innerColor}, outer color is ${outerColor}`);
// console.log("--------------");

// 5
const city = {
    cityName: "Yerevan",
    isCapiatal: true,
    country: "Armenia",
    otherName: "Erebuni"
};
const {cityName, otherName} = city;
//console.log(`Current name is ${cityName}, other name is ${otherName}`);
// console.log("--------------");


// 6
const webPage = {
    frontEnd: {
        progLanguage: "JS",
        frameworks: {            
            fr1: "React",
            fr2: "Vyu",
            fr3: "Angular"
        },
        structure: "HTML",
        styles: "CSS"
    },
    backEnd: {
        dataBase: "MySQL",
        conectionWithDb: "Java"
    }
};
const {frameworks} = webPage.frontEnd;
// console.log(frameworks);
// console.log("--------------");


// 7
const professions = {
    developer: "Front End",
    doctor: "Cardiologist",
    singer: "Jazz singer",
    lawyer: "Advocate"
};
const {singer} = professions;
// console.log(singer);
// console.log("--------------");


// 8
const shape = {
    type: "Rectangle",
    width: 500,
    height: 350,
    structure: "Metal"
};
const {type} = shape;
// console.log(type);
// console.log("--------------");

// 9
const drinks = {
    alcohol: "Martini",
    water: "Mineral",
    refreshing : "Cola",
    semiAlcoholic: "Cocktail"
};
const {water} = drinks;
console.log(water);
console.log("--------------");

