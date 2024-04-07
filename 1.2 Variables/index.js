// Variable = A container that stores a value.
//              Behaves as if it were the value it contains

//  1. declaration      let x; 
//  2. assignment           x = 100;

// There are 3 types of VAR :
                // String
                // Number
                // Bolean

let x = 1982;
let age = 25;
let price = 10.99;
let gpa = 4.1;

console.log('Your random number is '+ x);
console.log('You are ' + age + ' old');
console.log('The last price is $' + price);
console.log('Your GPA is: ' + gpa);

//---SHOW THE TYPE OF VARIABLE---

console.log(typeof gpa)



let firstName = "Seif";

console.log(typeof firstName);
console.log("Your First name is " + firstName)


let favoriteFood = "MAKARONA WITH BASHAMEL";
console.log(typeof favoriteFood)

console.log("My Favorite Food is " + favoriteFood)


let email = "seif121@gmail.com";

console.log("My Email is " + email)


let online = false;
let forSale = false;
let isStudent = true;

console.log("Is student enrolled in Classes? " + isStudent)

console.log("Is this car for Sale " + forSale)

console.log("Is Seif online? " + online)


let fullName = "Seif Youssef";
let student = false;



document.getElementById("p1").textContent = "My Name is "+ fullName;

document.getElementById("p2").textContent = "I'm " + age + " Years old";

document.getElementById("p3").textContent = "Are you a student: " + student;