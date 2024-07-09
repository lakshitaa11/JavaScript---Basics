// 1. Ways to print in JavaScript
// console.log("Hello World");
// alert("me");
// document.write("Heyaaa!!!");

// 2. JavaScript console API
// console.log("Hello World", 4+6, "another log");
// console.warn("This is a warning");
// console.error("This is an error");

// 3. JavaScript Variables (var, let, const)
// What are Variables? - Containers to store data values
// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);

// 4. Data types in JavaScript
// Numbers
// var number1 = 34;
// var number2 = 56.76;

// String
// var str1 = "This is a string";
// var str2 = 'This is also a string';

// Objects (data type of null is --> OBJECT )
// var marks = {
//     Harry: 25,
//     Lakshita: 28,
//     Kunal: 30
// }
// console.log(marks);

// Booleans
// var a = true;
// var b = false;
// console.log(a, b);

// Undefined
// var und = undefined;
// var un;
// console.log(und);
// console.log(un);

// null
// var a = null;
// console.log(a);

/*
At a very high-level, there are two 
types of Data Types in JavaScript
1. Primitive Data Types: undefined, null, number, string, boolean, symbol
2. Reference Data Types: Arrays and Objects
*/

// Arrays
// var array = [1, 2, 3, 4, 5];
// console.log(array);

// 5. Operators in JavaScript
// Arithmetic Operators
// var x = 10;
// var y = 8;
// console.log("The value of x + y is", x + y);
// console.log("The value of x - y is", x - y);
// console.log("The value of x * y is", x * y);
// console.log("The value of x / y is", x / y);

// Assignment Operators
// b = 10;
// var c = b;
// console.log(c);

// Logical Operators
// Logical AND
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);

// Logical OR
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);

// Logical NOT
// console.log(!true);
// console.log(!false);

// Functions in JavaScript
// function avg(a, b){
//     c = (a + b)/2;
//     return c;
// }

// DRY principle = Do Not Repeat Yourself
// c1 = avg(10, 8);
// c2 = avg(20, 4);
// console.log(c1, c2);

// 7. Conditionals in JavaScript
/*
var age = 41;
// Single if statement
if(age > 18){
    console.log('You can drink rasna water');
}
// if - else statement
// if(age > 18){
//     console.log('You can drink rasna water');
// }
// else{
//     console.log('You cannot drink rasna water');
// }

age = 25;
// if-else Ladder
if(age > 32){
    console.log("You are not a kid");
}
else if(age >26){
    console.log("Bachhe nahi rahe");
}
else if(age >22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age >18){
    console.log("18 Bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("End of ladder");
*/

// 8. Loops in JavaScript
// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr)

// for(i = 0; i < arr.length; i++){
//     console.log(arr[i]);

// alert("hello!") //one time pop-up
// let name = prompt("hello!") //allows to take input too
// console.log(name);

// Practice Ques - based on Conditional Statement
// let score = prompt("Enter your score(o-100)");
// let grade;

// if (score >= 90 && score <= 100){
//     garde = "A";
// } else if (score >= 70 && score <= 89){
//     garde = "B";
// } else if (score >= 60 && score <= 69){
//     garde = "C";
// } else if (score >= 50 && score <= 59){
//     garde = "D";
// } else if (score >= 0 && score <= 49){
//     garde = "F";
// }

// console.log("According to your score, your grade is:", grade);

// let a = prompt("Enter number 1:"); //SWAP USING TEMP
// let b = prompt("Enter number 2:");

// document.write("Number before swap is:", a, "&", b);

// let temp;
// temp = a;
// a = b;
// b = temp;

// document.write("Number after swap is:", a, "&", b);

// let a = prompt("Enter number 1:");
// let b = prompt("Enter number 2:");

// document.write("Number before swap is:", a, "&", b);

// a = a + b;
// b = a - b;
// a = a - b;

// document.write("Number after swap is:", a, "&", b);

// LOOPS

// for loop
// for (let i = 1; i <= 5; i++)
// {
//     console.log("Kunni");
// }
// console.log("Loop has ended");

// While loop
// let i = 1;
// while(i <= 5)
// {
//     console.log("i =", i);
//     i++;
// }

//do-while, for-of, for-in loops also exist

//Print all even numbers from 0 to 100
// for (let i = 0; i <= 100; i++)
// {
//     if(i % 2 == 0)
//     {
//         console.log(i);
//     }
// }

// STRINGS
// Create a string --> let str = "Lakshita";
// String Length --> str.length
// String Indices --> str[0], str[1], str[2]

// TEMPLATE LITERALS --> a way to have embedded expressions in string
// let specialString = `This is template literal`;
// console.log(typeof specialString);

// let obj = {
//     item: "pen",
//     price: 20,
// };

// let output = `the cost of ${obj.item} is ${obj.price} rupees`; // string interpolation --> to create strings by doing substitution of placeholders
// console.log(output);

// ESCAPE CHARACTERS --> for new line
// console.log("Heylo\nKunni")
// console.log("Heylo\tKunni")

// STRING METHODS IN JS
// str = "Lakshita Shekhawat";

// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.trim())
// console.log(str.slice(1,4))
// console.log(str.concat(" is my name"))
// console.log(str.replace("La", "Ya"))

 // LECT 4 - ARRAYS --> Used to sore collection of similar type of items in a linear manner (MUTABLE)
// let marks = [90, 53, 76, 78];
// console.log(marks);
// console.log(marks.length);
// console.log(marks[2]);
// l = marks.length
// for(let i = 0; i < l; i++)
// {
//     console.log(marks[i]);
// }

// ARRAY METHODS --> push(), pop(), toString(), concat(), shift(), unshift(), slice(), splice()
// console.log(marks.toString());

// FUNCTION --> block of code that performs a specific task, invoked whenever needed
// function call + function definition == function

// function myFunction(msg) // msg here is the PARAMETER(Input)
// {
//     console.log(msg);
// }

// myFunction("Lakshita"); // Lakshita here is the ARGUMENT that is passed in the parameter

// Function --> to find sum of 2 numbers

// function findSum(a, b)
// {
//     let sum = a + b;
//     console.log("Sum of a and b is:", sum)
// }
// findSum(5, 7);

// const arrowSum = (a, b) => { 
//     console.log(a+b);
// };

// const arrowMultiply = (a, b) => {
//     console.log(a*b);
// };

// FUNCTION TO COUNT VOWELS
// function countVowels(str){
//     str = str.toUpperCase()
//     let count = 0;
//     for(const char of str){
//         if (char === "A"  || char === "E" || char === "I" || char === "O" || char === "U")
//         {
//             count++;
//         }
//     }
//     console.log(count);
// }

// for each --> is used for normal calculation or normally print krwana kuch
// let arr = ["Delhi", "Mumbai", "Pune"];
// arr.forEach((val, idx) => {
//     console.log(val.toUpperCase(), idx);
// });

// map --> is used to create a new array
// let nums = [67, 53, 32];
// let newArr = nums.map((val) => {
//     return val * 2;
// });
// console.log(newArr);

// filter method --> creates a new array of elements that gives trues for a condition/filter
// let arr = [2, 57, 46,, 8, 13];
// let newArr = arr.filter((val) => {
//     return val % 2 == 0;
// });
// console.log(newArr);

// PRACTICE QUES: Make an array from 1 to n (take n as I/P from user) and then use reduce method to print sum of array elements and reduce method to calculate product of all numbers
// let n = prompt("Enter a number:");
// let arr = [];
// for(let i = 1; i <= n; i++) {
//     arr[i-1] = i;
// }
// console.log(arr);
// let sum = arr.reduce((res, curr) => {
//     return res + curr;
// });
// console.log("Sum:", sum);

// let product = arr.reduce((res, curr) => {
//     return res * curr;
// });
// console.log("Product:", product);

//For In/ For Of

// let arr = [10, 20, 30, 40]; // using FOR IN
// for(let ar in arr)
//     {
//         console.log(ar);
//     }
// let arr = [10, 20, 30, 40]; // using FOR IN
// for(let ar in arr)
//     {
//         console.log(arr[ar]);
//     }
// let arr = [10, 20, 30, 40]; // usin FOR OF
// for(let ar of arr)
//     {
//         console.log(ar);
//     }

// Multidimensional Array
// let arr = [
//     ["John", 10],
//     ["Thomas", 11],
//     ["Robert", 20]
// ]
// console.log(arr[1]);
// console.log(arr[0][1]);

// let arr = [        //using forEach
//     ["John", 10],
//     ["Thomas", 11],
//     ["Robert", 20]
// ]
// arr.forEach(data => {
//     data.forEach(value => {
//         console.log(value);
//     })
// })

// Copy and Spread --> To COPY we can simple use slice and concat + SPREAD method(line 383) which is an even better appoach
// let arr1 = ["John", 10, 2005];
// let arr2 = arr1.slice(0).concat("Ram");

// arr2.push("Mark");
// console.log(arr1);
// console.log(arr2);

//Spread
// let arr1 = ["John", 10, 2005];
// let arr2 = [...arr1]; //spread operator used for copying array
// arr2.push("Hi");
// console.log(arr2);

//Array Destructuring
// let arr = ["Ram", "Haris", "Karan", "Manav"];
// let [item1, item2, ...item3] = arr; //... allowed to store all following items to be saved in iteam3

// console.log(item1);
// console.log(item2);
// console.log(item3);

//Objects in JS
// let obj = {
//     "name": "Lakshita",
//     "age": 20,
//     "last name": "Singh",
//     fun: function(){
//         console.log("I m FUNCTION")
//     },
//     arr: [10, 20, 30]
// };
// console.log(obj["last name"]);
// obj.fun();
// console.log(obj.arr);
// console.log(obj);

// FUNCTION IN FUNCTION
// function fun(){
//     console.log("I am Function1");
//     function fun2(){
//         console.log("I am Function2");
//     }
//     fun2();
// }
// fun();

// Lexical Scope
// var a = 10; //global scope
// function fun(){
//     var b = 1; //lexical scope
//     console.log("I am function: ", +b);
//     function fun2(){
//         var b = 3;
//         console.log("I am function: ", +b);
//     }
//     fun2();
// }
// fun();

//SET
// const arr = [10, 20, 30, 40, 50, 30];
// console.log(arr);

// const s = new Set([10, 20, 30, 40, 50, 30]); //values are not repeated in SET
// s.add(60);
// s.add("Hi");
// console.log(s);

// MAP
// var map1 = new Map([[1, "one"], ["fname", "Mike"], ["whole number", [0, 1, 2, 3, 4]]]);
// console.log(map1);
// console.log(map1.get("fname")); // GET is used
// console.log(map1.set("lname", "Grey")); //SET is used

// THIS ("this" is a window object)
// var obj = {
//     fName: "John",
//     age: 8,
//     fun: function(){
//         console.log(this.fName); //this refers to the object inside which function is being used
//     }
// };
// obj.fun();

// NEW
// function fun(){
//     let fname = "John";
//     this.fname = fname;
// }
// var obj = new fun();
// console.log(obj.fname);

// Constructor Functions --> are like regular functions only but two conventions are there:
/* 1. They are named with capital letters first
   2. They should be executed only with "new" operator */
// function User(name){
//     if(!new.target){
//         return new User(name);
//     }
//     this.name = name;
// }
// let person = User("Jack");
// console.log(person.name);

// SYMBOL --> Represents a Unique Identifier & it's a hidden property and need to be called separately
// let sym = Symbol("id");
// let sym1 = Symbol("id");
// console.log(sym == sym1);
// console.log(sym.toString());
// let id = Symbol("id");
// var obj = {
//     name: "Jack",
//     [id]: 1
// };
// console.log(obj.name);
// console.log(obj[id]); //use square brackets

// RECURSION
// function printNumbersRecursive(n){
//     if (n <= 10){
//         console.log(n);
//         printNumbersRecursive(n+1);
//     }
// }
// printNumbersRecursive(1);
// function factorial(n){
//     if (n == 0){
//         return 1;
//     }
//     else{
//         return n * factorial(n-1);
//     }
// };
// console.log(factorial(5));

// JS is Synchronus while we can use it asynchronusly by using setTimeout
// console.log("This");
// console.log("Is");
// console.log("Synchronus");

// console.log("This");
// setTimeout(() => {
//     console.log("Asynchronus");
// }, 5000);
// console.log("Is");

// CALL BACK --> We give one function as argument in another function
// function fun(val){
//     console.log(val);
// };

// function add(a, b, callback){
//     let sum = a + b;
//     callback(sum);
// };
// add(5, 10, fun);

// CALL BACK HELL 
// function loadingData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("1) Loading Data...");
//             resolve();
//         }, 2000)
//     }
// )
// }
// function collectingData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("2) Collecting Data...");
//             resolve();
//         }, 2000)
//     })
// }
// function approvingData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("3) Approving Data...");
//             resolve();
//         }, 1000)
//     })
// }
// function approved(){
//     console.log("4) Approved...");
// }

// // callback hell is this type of nested callback situation which arises due to multiple callbacks and we use PROMISE to resolve it
// // loadingData(function(){
// //     collectingData(function(){
// //         approvingData(function(){
// //             approved();
// //         });
// //     });
// // });

// loadingData().then(collectingData).then(approvingData).then(approved); //we used the concept of promise to avoid callback hell

// ASYNC AWAIT (better way to implemet PROMISE method)
// async function Ex(){
//     await loadingData();
//     await collectingData();
//     await approvingData();
//     await approved();
// }
// Ex();

// SET INTERVAL & CLEAR INTERVAL
// let num = 0;
// setInterval(fun, 2000)
//     function fun(){
//         num = num + 1;
//         console.log(num);
//     }

// setInterval(fun, 1000) //to print time second by second
// function fun(){
//     let date = new Date().toLocaleTimeString();
//     console.log(date);
// }

// var inter = setInterval(fun, 1000) //to print time second by second and clear after every 10 sec using clearInterval
// function fun(){
//     let date = new Date().toLocaleTimeString();
//     console.log(date);
// }
// setTimeout(() => {
//     clearInterval(inter);
// }, 10000)

// CALL BIND & APPLY
// CALL
// function fun(){
//     console.log(this.fName);
// }
// var obj1 = {
//     fName: "John",
// }
// var obj2 = {
//     fName: "Kenny"
// }
// fun.call(obj1); 
// fun.call(obj2); //here the call after fun will call the fName from obj2

// APPLY --> everything same as call but we use sq. bracket instead to make it array like
// function fun(age, gender){
//     console.log(this.fName, age, gender);
// }
// var obj1 = {
//     fName: "John",
// }
// var obj2 = {
//     fName: "Kenny"
// }
// fun.apply(obj1, [12, "M"]); 

// BIND --> Makes it all into a function
// function fun(age, gender){
//     console.log(this.fName, age, gender);
// }
// var obj1 = {
//     fName: "John",
// }
// var obj2 = {
//     fName: "Kenny"
// }
// var a = fun.bind(obj1, [12, "M"]); 
// console.log(typeof a);
// console.log(a);

// Property flag & descriptors
// let emp = {};
// emp.name = "John";
// console.log(Object.getOwnPropertyDescriptor(emp, "name"));

// Object.defineProperty(emp, "age",
// {
//     value: 21,
//     writable: true,
//     configurable: true,
//     enumerable: true
// });
// console.log(emp);
// console.log(Object.getOwnPropertyDescriptor(emp, "age"));

// PROTO
// var obj1 = {
//     fName: "John"
// };
// var obj2 = {
//     lName: "Moore"
// };
// obj2.__proto__ = obj1;
// console.log(obj2.fName);

// PROTOTYPE
// function Person(name, age){
//     let person = Object.create(Person.prototype)
//     person.name = name;
//     person.age = age;
//     return person
// }

// Person.prototype.greet = function(){
//     console.log(`Hello ${this.name}`);
// }
// let user = Person("John", 10)
// user.greet()
// console.log(user);

// WE CAN DO THIS USING new KEYWORD AS WELL
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.greet = function(){
//     console.log(`Hello ${this.name}`);
// }
// let user = new Person("John", 10)
// user.greet()
// console.log(user);

// CLASS --> similar to a function only (part of OOPs)
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log(`Hello ${this.name}`);
//     }
// }
// let user = new Person("John", 10) // new helps us create a blank object
// user.greet()
// console.log(user);

// class User{
//     constructor(name){
//         this.name = name;
//     }
//     sayHi(){ //a method under the class
//         console.log("Hello " + this.name);
//     }
// }
// let user = new User("Kunal")
// console.log(user)
// user.sayHi()
// let user2 = new User("Lakshita")
// console.log(user)
// user2.sayHi()

// INHERITANCE
// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     speak(){
//         console.log(`${this.name} makes a noise.`);
//     }
// }
// class Dog extends Animal {
//     constructor(name){
//         super(name); //super points to parent class
//     }
// }

// let d = new Dog("Rufus");
// d.speak();

//Public & Private
// class BankAccount{
//     #balance = 0; //# makes balance private

//     deposit(amount){
//         this.#balance += amount;
//         console.log(`Deposited amount ${amount}, updated balance is ${this.#balance}`);
//     }
//     withdraw(amount){
//         if(amount > this.#balance){
//             console.log("Insufficient Balance");
//         }
//         else{
//             this.#balance -= amount;
//             console.log(`Withdrawal of ${amount} done, Updated Balance is ${this.#balance} `);
//         }
//     }
//     balance(){
//         console.log(this.#balance);
//     }
// }
// const account = new BankAccount();
// account.deposit(100);
// account.deposit(1000);
// account.withdraw(100);
// account.balance()

// fetchAPI (text or JSON)
// fetch('myfile.txt') // fetching a text file
// .then(response => {
//     if (!response.ok){
//         throw new Error("Network is not responding");
//     }
//     return response.text();
// })
// .then(data => console.log(data))
// .catch(error => console.log(error))

// fetch('https://jsonplaceholder.typicode.com/posts') // fetching a json file
// .then(response => {
//     if (!response.ok){
//         throw new Error("Network is not responding");
//     }
//     return response.json();
// })
// .then(data => console.log(data))
// .catch(error => console.log(error))