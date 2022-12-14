// Write a function that when passed an object will return the value of the object’s price property.
//     Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
//getPrice(obj); // returns “$7.89”

function getPrice(obj) {
    return obj.price;
}
let potatoes = {
    name: "Potatoes",
    quantity: 2,
    price: "7.89"
};

console.log(getPrice(potatoes));

// Write a function that when passed an array will return the longest string from the array.
//     Ex. const arr = [“Green”, “Blue”, “Periwinkle”];
//getLongestString(arr) // Returns “Periwinkle”
// function getLongestString(arr) {
//     let longestStr = "";
//     for (let str of arr) {
//         if(str.length > longestStr.length){
//             longestStr = str;
//         }
//     }
//     return longestStr;
//}
const colors = ["Green", "Blue", "Periwinkle"];
console.log(getPrice(colors));
const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

//getTallestHamster(hamsters); // should return {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"};

function getTallestHamster(arr){
    let tallest= {heightInMM: 0};
    arr.forEach(function(el){
       if (el.heightInMM > tallest.heightInMM){
           tallest = el;
       }
    });
    return tallest;
}
console.log(getTallestHamster(hamsters));

