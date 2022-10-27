// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.


// do {
//     let userInput = prompt("Please enter an odd number between 1 and 50");
//
//     if(userInput % 2 === 0){
//         alert("Your input was even please try again.");
//     } else if(userInput < 1){
//         alert("Your input is less than 1. Please try again");
//     } else if (userInput > 50){
//         alert("Your input is greater than 50. Please try again");
//     } else {
//         alert("Valid input, Thank you");
//         break;
//     }
// } while(true)

//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

let userInput = prompt("Please enter an odd number between 1 and 50");
console.log("The number to skip is " + userInput);

for(let i = 1; i <=50; i+=2){
    if(userInput == i){
    console.log("Skipping a number " + userInput);
continue;
}
console.log("Here is an odd number: " + i);

}