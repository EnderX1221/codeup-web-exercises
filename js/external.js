"use strict";
alert("Welcome to my Website");

let userInput = prompt('What is your favorite color?');
console.log('The user entered: ' + userInput);
alert("Great my favorite color is " + userInput + " too! ")
//Problem 3.1
let lilMer = prompt("For how many days have you had The Little Mermaid?");
console.log("The user entered: "  + lilMer);
let broBer = prompt("For how many days have you had Brother Bear?");
console.log("The user entered: "  + broBer);
let herCul = prompt("For how many days have you had Hercules?");
console.log("The user entered: "  + herCul);
let ppd = prompt("What is the price per day of having those movies out?");
console.log("The user entered: " + ppd);

let total =(Number(lilMer) + Number(broBer) + Number(herCul) * Number(ppd));
alert("You owe " + total + " for these rentals.");
//3.2
let google = prompt("How much does google pay an hour?");
console.log("The user entered: " + google);
let amazon = prompt("How much does amazon pay an hour?");
console.log("The user entered: " + amazon);
let facebook = prompt("How much does google pay an hour?");
console.log("The user entered: " +  facebook);
let gHours=6,
    aHours=4,
    fbHours=10;

let paycheck=(google*gHours)+ (amazon*aHours) + (facebook*fbHours);
alert("Your paycheck will be: " + paycheck + " for the weeK ");
//3.3
let roomSchedule = confirm("What availability do you have ");
console.log(roomSchedule)
let classRoom = !confirm("How many spots are left in class?");
console.log(classRoom);confirm("Can you take this course?");
console.log(roomSchedule);
alert("You can register if: " + (classRoom && roomSchedule));
alert("Congrats: " + (confirm("There is space at the cohort and availability")));
//3.4
let areMember = confirm("Are you a club member?");
let itemsCart = parseFloat(prompt("How many items in your cart?"));
let offerValid = confirm("Is the offer valid?");
alert("Customer has discount: " + (offerValid && areMember || itemsCart > 2 ));
