"use strict";
console.log("De09 Session2");
// const person : {username:string, age:number, city:string, isActive:boolean} = {
//     username:"Fatih",
//     age:39,
//     city:"Bad Waldsee",
//     isActive:false
//      address:"..." // yanlış kullanım
// }
const person2 = {
    username: "Fatih",
    age: 39,
    city: "Bad Waldsee",
    isActive: false
};
const person3 = {
    username: "Fatih",
    age: 39,
    city: "Bad Waldsee",
    isActive: false
};
const redCar = {
    model: "X5",
    year: new Date(),
    price: 3000,
    color: "red",
    getName: () => "X5"
};
const user1 = {
    username: "Fatih",
    firstname: "Fatih",
    age: 39,
    getname: () => {
        console.log("5");
    }
};
const adminUser = {
    username: "Fatih",
    firstname: "Fatih",
    age: 15,
    isAdmin: true,
    password: "1234",
    getname: () => console.log("admin")
};
console.log(adminUser);
//? object arrays
// const users = [] //any[]
// users.push(5)
// users.push({username:"s"})
const users = [];
// users.push(5)
// users.push("5")
// users.push({username:"as"}) 
//* hepsi ts bakımından hata verdi, çünkü tanımlama yaptık
users.push({ username: "as", firstname: "as", age: 25, getname: () => "as" });
//! Type Inference
let myName = "Fatih";
let arr = [];
let myArr = [
    {
        username: "asd",
        department: "asda",
        salary: 3000
    }
];
// myArr.push(5) //* hata verir
myArr.push({ username: "asdaa", department: "s", salary: 5000 });
const myArr2 = [...myArr, ...users];
//* generic kullanarak
const testGenerics = {
    id: 1,
    title: "asda",
    content: "asdasd",
    createrAt: new Date(),
    extra: ["extra", "asdasd", "generic"]
};
const testGenerics2 = {
    id: 1,
    title: "asda",
    content: "asdasd",
    createrAt: new Date(),
    extra: [5, 6, 8]
};
const testGenerics3 = {
    id: 1,
    title: "asda",
    content: "asdasd",
    createrAt: new Date(),
    extra: [{ id: 2, title: "deneme" }]
};
const testGenerics4 = {
    id: 1,
    title: "asda",
    content: "asdasd",
    createrAt: new Date(),
    extra: [{ id: 2, title: "deneme" }]
};
const testGenerics5 = {
    id: 1,
    title: "asda",
    content: "asdasd",
    createrAt: new Date(),
    extra: [{ id: 2, username: "deneme" }]
};
