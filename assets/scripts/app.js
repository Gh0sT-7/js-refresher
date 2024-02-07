// import { apiKey } from "./utils.js";

// import apiKey from "./utils.js"
// import { apiKey, abc } from "./utils.js";

// import { apiKey, abc as content } from "./utils.js";
// console.log(content);

// import * as utils from "./utils.js"
// console.log(utils.apiKey);
// console.log(utils.abc);

//// Variables

// let userMessage = "Hello World!";
// console.log(userMessage);

// function greet() {
//     console.log("Hello!");
// }
// greet();

// function greetUser(userName, message) {
// function greetUser(userName, message="Hello!") {
//     // console.log(userName);
//     // console.log(message);
// }
// greetUser("James");
// greetUser("Manuel", "Hello, what's up?");


//// Operators

// function createGreeting(userName, message = "Hello!") {
//     return "Hi, I am " + userName + ". " + message;
// }
// const greeting1 = createGreeting("James");
// console.log(greeting1)

// const greeting2 = createGreeting("Manuel", "Hellow, what's up?");
// console.log(greeting2);

//// Functions

// export default (userName, message) => {
//     console.log("Hello");
//     return userName + message;
// }

//// Objects

// const user = {
//     name: "James",
//     age: 31,
//     greet() {
//         console.log("Hello!");
//         console.log(this.age);
//     }
// };

// console.log(user.name);
// user.greet();

// class User {
// constructor(name, age) {
//     this.name = name;
//     this.age = age;
//  }
//     greet() {
//         console.log("Hi!")
//     }
// }

// const user1 = new User("Manuel", 35);
// console.log(user1);
// user1.greet();


//// Arrays

// const hobbies  = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);

// hobbies.push("Working");
// console.log(hobbies)

// const index = hobbies.findIndex((item) => {
//     return item === 'Sports';
// })

// console.log(index)

// // const editedHobbies = hobbies.map((item) => item + "!");
// const editedHobbies = hobbies.map((item) => ({text: item}));

// console.log(editedHobbies);


// function transformToObjects(numberArray) {
//     // Todo: Add your logic
//     // should return an array of objects

//     const transformedArray = numberArray.map((number) => ({ val: number }));

//     return transformedArray;
// }

// const inputArray = [1, 2, 3];

// const result = transformToObjects(inputArray);
// console.log(result);

//// Arrays | Spread
// const hobbies = ["Sports", "Cooking"];
// const user = {
//     name: "James",
//     age: "31"
// }
// const newHobbies = ["Reading"];

// const mergedHobbies = [...hobbies, ...newHobbies];

// console.log(mergedHobbies)

// const extendedUser = {
//     isAdmin: true,
//     ...user
// }
// console.log(extendedUser);


/// Destructuring

// Could do it like this.
// const userNameData = ["James", "Mills"];
// const firstName = userNameData[0];
// const lastName = userNameData[1];

// Or even better...
// const [firstName, lastName] = ["James", "Mills"];
// console.log(firstName);
// console.log(lastName);

// Could do this
// const user = {
//     name: "James",
//     age: 31
// };
// const name = user.name;
// const.age = user.age;

// Or better yet...
// const {name: userName, age} = {
//     name: "James",
//     age: 31
// };
// console.log(userName);
// console.log(age);


//// Control Structures
// const password = prompt('Your password');

// if (password === 'Hello') {
//     console.log("Hello works");
// } else if (password === 'hello') {
//     console.log("hello works");
// } else {
//     console.log("Access not granted.");
// }

// const hobbies = ["Sports", "Cooking"];

// for (const hobby of hobbies) {
//     console.log(hobby);
// }


//// Functions as Values
// function handleTimeout() {
//     console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//     console.log("Timed out.... again!");
// }

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 4000);

// setTimeout(() => {
//    console.log("More timing out...");
// }, 6000);


// function greeter(greetFn) {
//     greetFn();
// }
// greeter(() => console.log('Hi!'));


//// Functions inside Functions
// function init() {
//     function greet() {
//         console.log("Hi!");
//     }

//     greet();
// }

// init();


//// Reference vs Primitive Values
// let userMessage = 'Hello!';
// userMessage = userMessage.concat('!!!'); // Creates a new userMessage, does not add the the old one.

const hobbies = ["Sports", "Cooking"]; // Storing the address of these values.
hobbies.push("Working"); // Looking up and editing the value behind the address of hobbies.
console.log(hobbies);

