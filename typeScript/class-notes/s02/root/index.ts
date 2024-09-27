console.log("De09 Session2")

// const person : {username:string, age:number, city:string, isActive:boolean} = {
//     username:"Fatih",
//     age:39,
//     city:"Bad Waldsee",
//     isActive:false
//      address:"..." // yanlış kullanım
// }

const person2 : {username:string, age:number, city:string, isActive:boolean} = {
    username:"Fatih",
    age:39,
    city:"Bad Waldsee",
    isActive:false
}

type Person = {
    username:string,
    age:number,
    city:string,
    isActive:boolean
} 

const person3 : Person = {
    username:"Fatih",
    age:39,
    city:"Bad Waldsee",
    isActive:false
}

//* Interface // arada eşittir yok, type'da var!!
interface ICar {
    model:string,
    year:Date,
    price:number,
    color:string,
    getName:()=>string
}

const redCar : ICar = {
    model:"X5",
    year: new Date(),
    price:3000,
    color:"red",
    getName:()=>"X5"
}

interface IUser {
    username:string,
    firstname:string,
    age:number,
    getname:()=>void
}

const user1 :IUser = {
    username:"Fatih",
    firstname: "Fatih",
    age:39,
    getname:()=>{
        console.log("5")
    }
}

// interface IAdminUser {
//     username:string,
//     firstname:string,
//     age:number,
//     getName:()=>void,
//     isAdmin:boolean,
//     password:string
// }
// interface IManagerUser {
//     username:string,
//     firstname:string,
//     age:number,
//     getName:()=>void,
//     isManager:boolean,
//     department:string
// }

interface IAdminUser2 extends IUser {
    isAdmin:boolean,
    password:string
}

const adminUser : IAdminUser2 ={
    username:"Fatih",
    firstname:"Fatih",
    age:15,
    isAdmin:true,
    password:"1234",    
    getname:()=>console.log("admin")
}

console.log(adminUser);

//? object arrays

// const users = [] //any[]
// users.push(5)
// users.push({username:"s"})


const users : IUser[] = []
// users.push(5)
// users.push("5")
// users.push({username:"as"}) 
//* hepsi ts bakımından hata verdi, çünkü tanımlama yaptık

users.push({username:"as", firstname:"as", age:25, getname:()=>"as"}) 

//! Type Inference

let myName = "Fatih"

let arr = []

let myArr = [
    {
        username:"asd",
        department:"asda",
        salary:3000
    }
]

// myArr.push(5) //* hata verir
myArr.push({username:"asdaa", department:"s", salary:5000})

const myArr2 = [...myArr, ...users]

// myArr2.push(5) //* hata verir, bu dizi iki tür farklı biçim kabul eder sadece, hover yap gör!


//! Generics

//* generic kullanmadan

interface Auth {
    id:number,
    username:string
}

interface Category {
    id:number,
    title:string
}

interface Post {
    id:number,
    title:string,
    content:string,
    createrAt: Date,
    extra: Auth[] | Category[]
}

interface PostBetter<T> {
    id:number,
    title:string,
    content:string,
    createrAt: Date,
    extra: T[] // aşağıdaki duruma göre burası string[] oldu!!!
}


//* generic kullanarak

const testGenerics : PostBetter<string> = {
    id:1,
    title:"asda",
    content:"asdasd",
    createrAt:new Date(),
    extra:["extra", "asdasd", "generic"]
}



const testGenerics2 : PostBetter<number> = {
    id:1,
    title:"asda",
    content:"asdasd",
    createrAt:new Date(),
    extra:[5, 6, 8]
}

const testGenerics3 : PostBetter<{id:number, title:string}> = {
    id:1,
    title:"asda",
    content:"asdasd",
    createrAt:new Date(),
    extra:[{id:2, title:"deneme"}]
}

const testGenerics4 : PostBetter<Category> = {
    id:1,
    title:"asda",
    content:"asdasd",
    createrAt:new Date(),
    extra:[{id:2, title:"deneme"}]
}

const testGenerics5 : PostBetter<Auth> = {
    id:1,
    title:"asda",
    content:"asdasd",
    createrAt:new Date(),
    extra:[{id:2, username:"deneme"}]
}