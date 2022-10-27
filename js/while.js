let i = 1;
let j = 0;

while(j < 16){
    i *= 2;
    j++
    console.log(i);
}
let x = 1;
while(x < 65536){
    console.log(x *= 2);
}

// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

let allCones = Math.floor(Math.random()* 50) + 50;

do{

    let conesToBuy = Math.floor(Math.random() * 5) + 1;

    if((allCones - conesToBuy) < 0){
        console.log("Cannot sell you " + conesToBuy + " cones I only have " + allCones + " ...");
    }else{
        console.log("# of cones before purchase: " + allCones);
        allCones -= conesToBuy;
        console.log(conesToBuy + " cones sold...");
    }
}while(allCones > 0);
console.log("We sold all the cones!")