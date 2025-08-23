/* Lec___1 */
//NOt so important

/* Lec___2 */

// const acccount_ID = 1231;
// let accountName = "John Doe";
// var account_Password = "12334a";


// // const This can never be changed it is solid rock;
// // let This can be changed, it is like clay that can be molded;
// // var This can be changed, it is like water that can take any shape;

// console.table([acccount_ID, accountName, accout_Password]); 

/* Lec___3 */


"use strict";//Force to advance js

/* Common data type
    1. String
    2.Int=>Number
    3.Boolean
    4.Null
    5.Undefined
    6.Symbol
    7.BigInt
    8.Object
*/

// type casting;
/*
    let a = 100;
    let b = String(a);
    console.log(typeof(b));
    console.log(b);
*/

/* Lec___4 */

// Operators
/*
    //console.log(10 + 20); // Addition
    //console.log(10 - 20); // Subtraction
    //console.log(10 * 20); // Multiplication
    //console.log(10 / 20); // Division
    //console.log(10 % 20); // Modulus (Remainder)
    //console.log(10 ** 2); // Exponentiation (Power)
    //console.log(10 + 20 * 2); // Operator Precedence (Multiplication before Addition)
    //console.log((10 + 20) * 2); // Parentheses to change precedence
    //console.log(10 + 20 - 5 * 2); // Mixed Operations
    //console.log(10 + 20 - 5 * 2 / 2); // Mixed Operations with Division
    //console.log(10 + 20 - 5 * 2 / 2 + 3); // Mixed Operations with Addition
    //console.log(10 + 20 - 5 * 2 / 2 + 3 - 1); // Mixed Operations with Subtraction
    
*/

// Arithmetic Operations
/*

    let value = 3;
    let negValue = -value;
    console.log(negValue); // Output: -3
*/


/* Lec___5 */

//Comparison Operators
/*
console.log(10 == 10); // Equal to
console.log(10 != 20); // Not equal to
console.log(10 > 5); // Greater than
console.log(10 < 20); // Less than
console.log(10 >= 10); // Greater than or equal to
console.log(10 <= 20); // Less than or equal to
*/

/* Lec___6 */

// Data types are 2 type 1=> Primitive 2=> Reference(Non primitive)
/*
    1=>Primitive Data Types
        - String
        - Number
        - Boolean
        - Null
        - Undefined
        - Symbol
        - BigInt
    2=>Reference Data Types
        - Object
        - Array
        - Function
*/

//array
/*
    let arr = [1, 2, 3, 4, 5];
    console.log(arr);
    console.log(arr[0]); // Accessing the first element
*/
//object
/*
    let person = {
        name: "John",
        age: 30
    };
    console.log(person);
*/
//function
/*
    function greet(name) {
        console.log("Hello, " + name + "!");
    }

    greet("Arnab");
*/

/* Lec___7 */

// Array
// const arr = ["physics", "chemistry", "biology"]
// methods
/*
arr.push("Math")
arr.push("English")
arr.unshift("History")
const new_arr = arr.join()
const new_arr = arr.slice(0,2)
const new_arr_2 = arr.splice(0,2)
*/

/* Lec___8 */
// const arr1=[1,2,3,4,5,[6,7,8,[9,10]]]
// const arr2 = [6,7,8,9,10]
// const new_Arr = arr1.flat(Infinity)
// console.log(new_Arr);
// const comb = arr1.concat(arr2);
// console.log(comb);

// const com = [...arr1, ...arr2]; // spread
// console.log(com);

/* Lec___9 */

//Objects
/*
    const user = {
        name: "Arnab",
        age : 16,
        isStudent: true
    }
    user.greet = function(){
        console.log(`HI You are welcome! ${this.name}`);

    }
    user.greet();
*/

/* Lec___10 */
// JSON
// {
//     "key"; "value",
//     "key2"; "value2"
// }


//Functions
/*
function function_name(){
    //work
}
function_name() // to call a function
*/

/*
function sum(num1, num2){
    let number = typeof(2)
    if (typeof(num1) != number || typeof(num2) != number) {
        return "error"
    }
    else{
        return num1+num2
}
}

let ans = sum(7,4)
console.log(ans)
*/

// function calc_cart_price(...num) {

//     return num;
// }

// let a = calc_cart_price(200, 400, 400);

/* Lec___12 */
//Scope

// if (true){

//     const a = 5;//closed in if//local scope;
//     let b = 5;//closed in if//local scope;
//     var c = 5;//not closed in if//global scope;

// }

// console.log(a)
// console.log(b)
// console.log(c)


/* Lec___13 */
//Arrow function
// ()=>{}//base

//

/*
    //Type 1
    const sum = (num1, num2)=>{
        return num1+num2;
    }
    console.log(sum(5, 10));
*/

/*
    //Type 2
    const sum = (num1,num2)=>(num1+num2);
    console.log(sum(5, 10));
*/

//

/* Lec___13 */
// High End array loop

// for of 
/*
    let sum = 0;
    const arr = [1,2,3,4,5];
    for (const el of arr) {
        console.log(el);
        sum += el;
    }
    console.log(sum)
*/

// forEach
/*
    const arr = [1,2,3,4,5];
    arr.forEach(el => {
        console.log(el);
    });
*/

//Maps
/*
    const map = new Map();
    map.set("name", "Arnab");
    map.set("age", 16);

    // console.log(map); 

    for (const [el] of map) {
        console.log(el);
    }
*/


// +++++++++++++++++++++DOM++++++++++++++++++++++++++

/* Lec___14 */
// document.getElementById("").👇
// document.getElementsByClassName("").👇
// document.querySelector("").👇
// document.querySelectorAll("").👇
// innerHTML
// innerText
// Style


// to cover to array a HTML list or Node List
// Array.from()

// console.log("hi");

//Inner html creating
// for (let i = 0; i <= 5; i++) {
//     let card = document.createElement("div")
//     card.className = "box"
//     document.body.appendChild(card)
// }

/* Lec___15*/

// addEventListener("DOMContentLoaded",()=>{
//     const d = document.getElementById("X");
//     d.addEventListener("click",(el)=>{

//         d.remove()
//     });
// });



/* Lec___16*/

//Async

//SET TIME OUT
// const el = document.getElementById("x");

// function chenge(){
//     el.innerHTML = "<h1>I am an proud Indian</h>";

// }

// const b=document.getElementById("X")
// b.addEventListener("click", ()=>{
//     setTimeout(chenge, 500);
// });
//CLEAR TIME OUT
//SERT INTERVAL
// CLEAR INTERVAL

//collor changer random
/*
    const start = document.getElementById("start");
    const stop = document.getElementById("stop");
    const C = document.getElementById("x")
    let TI;
    
    start.addEventListener("click",(e)=>{
        e.preventDefault()
        start.disabled=true;
        TI = setInterval(() => {
            const hex = "0123456789ABCDEF"//Random color genaretor
            let colour = "#"//Random color genaretor
            for (let i = 0; i < 6; i++) {//Random color genaretor
                let x = Math.floor(Math.random() * 16)//Random color genaretor
                colour += hex[x]//Random color genaretor
            }
            document.body.style.backgroundColor=`${colour}`;
        }, 100)
        C.innerHTML="<h1> I am an proud INDIAN.</h1>"
    });
    
    stop.addEventListener("click",()=>{
        clearInterval(TI)
        start.disabled=false;
        C.innerHTML="<h1>HI! I am arnab.</h1>"
    });
*/


/* Lec___17*/

// API request and V8 engine

// const Pr = new Promise()//This is how a promise created and base.

// const P = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Async task is coimpleted")
//         resolve()
//     },1000)
// });
// P.then(()=>{
//     console.log("Promise consummed")
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Promise part done")
//         resolve()
//     }, 2000)
// }).then(() => {
//     console.log(".then part is done")
// })


// new Promise ((resolve, reject)=>{
//     let count=0;
//     const X = setInterval(()=>{
//         console.log("Step x is done.")
//         count += 1;
//         if(count===5){
//             clearInterval(X)
//             resolve()
//         }
//     },1000)
// }).then(()=>{
//     console.log("Done")
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const data = {
//             first_name: "Arnab",
//             last_name: "Biswas",
//             class: 9,
//             age: 16
//         }
//         resolve(data)
//         console.log("Data sent")
//     }, 5000);
// }).then((student) => {
//     document.body.style.backgroundColor = "lightblue"
//     console.log("Data received")
//     console.log(student)
//     let card = document.createElement("div")
//     card.className = "box";
//     card.innerHTML = `
//     <h1>${student.first_name} || ${student.last_name} </h1>
//     <div>
//         <h1>Class = ${student.class} </h1>
//         <h1>Age = ${student.age} </h1>
//     </div>
//     `
//     document.body.appendChild(card)
// })



