"use strict";

/* ########################################################################## */

/**
 * TODO: 1
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(parameter) {
    if ("blue" == parameter) {
        return "blue is the color fo the sky";
    } else if ("red" == parameter) {
        return "Strawberries are red";
    } else {return "I don't anything about " + parameter};

}
console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor("cyan"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(parameter){

    switch (parameter){
        case "blue";
        return "blue is the color of the sky";
        case "red";
        return "Strawberries are red";
        dafault;
        return "I dont know anything about" + parameter;

    }
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let userInput = prompt("Please enter a color");

alert(analyzeColor(userInput));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, total) {
    let discountPrice;
    if (luckyNumber === 0) {
        discountPrice = total;
    }else if(luckyNumber ==== 1) {
        discountPrice = total - (total * .1);
    }else if(luckyNumber === 2){
        discountPrice = total - (total * .25);
    }else if(luckyNumber === 3){
        discountPrice = total - (total * .35);
    }else if(luckyNumber === 4){
        discountPrice = total - (total * .5);
    }else if(luckyNumber === 5){
        discountPrice = 0;
    }
    return discountPrice;
}
console.log(calculateTotal(0,100));
/**
 * TODO: 6
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
 let luckyNumber = Math.floor(Math.random() * 6);
let userInput = prompt("What is your total bill?");

calculateTotal(luckyNumber, userInput);

alert("Your lucky number is " + luckyNumber + "Your price before discount is " + userInput + "Price with discount is " + calculateTotal(luckyNumber, userInput) + ".");


/**
 * TODO: 7
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

if(confirm("Would you like to enter a number?")){
    let userInput2 = parseInt(prompt("Please enter a number");

    if(userInput2 % 2 === 0){
        alert(userInput2 + "is even");
    }else {
        alert(userInput2 + "is odd");
    }
    alert("Your number + 100 = " + userInput2 + 100);

    if(userInput2 >= 0){
        alert("Your number is positive");
    }else {
        alert("Your number is negative");
    }
}