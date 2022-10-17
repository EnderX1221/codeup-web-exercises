"use strict"
//#2
function showMultiplicationTable(number){
for (let i = 1; i <= 10; i++){
    console.log(number + " X " + i + " = " + (i * number));
}
}
showMultiplicationTable(9)
//#3
function isOddEven(maxNum, minNum){
for (let i = 1; i <= 10; i++) {
let randNum = Math.floor(Math.random() * (181 - 10) + 20);
if (randNum % 2 === 0){
console.log(randNum + " is Even. ");
}else {
    console.log(randNum + " is Odd. ");
}
}
}
isOddEven(200,20);

function pyramid(n) {



    for(let i=1; i<= n; i++){

        let str = ' '.repeat(n-i);

        let str2 = '*'. repeat(i*2 -1)



        console.log(str + str2 + str);

    }

}

pyramid(5);


