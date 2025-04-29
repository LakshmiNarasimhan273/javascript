// Control statements
// 1) Conditional statement
// 2) Looping statement

// If-Else 
let a = 15;
let b = 15;

// Basic syntax
if(a > b){
    console.log("A is greater than B");
}

else if(a === b){
    console.log("A and B are equal");
}

else{
   console.log("B is greater than A") ;
}

// Vote eligibility program
let age = 17;

if(age >= 18){
    console.log("You are eligible for vote");
}
else{
    console.log("Not eligible for vote");
}

// Nested if condition
let marks = 105;
if(marks >= 60 && marks <= 100){
    if(marks >= 90){
        console.log("A Grade");
    }
    else if(marks >= 80){
        console.log("B Grade");
    }
    else if(marks >= 70){
        console.log("C Grade");
    }
    else{
        console.log("D Grade");
    }
}
else{
    console.log("Grade not eligible");
}

// Switch case

let day = 2;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Weekend");
}

// Looping statement
// for loop
for(let i = 0; i <= 50; i++){
    // 1 - initial value
    // 2 - condition place
    // 3 - iteration place
    console.log(i);
}

// while loop
let j = 0;
while(j <= 10){
    console.log("while loop",j);
    j++;
}

// do while loop

let k = 0;
do{
    console.log(k);
    k++;
}while(k <= 20);

// Loops interview program
// pattern programs
// *
// * *
// * * *
// * * * *
// Right angle triangle
// Left angle triangle
// Diamond pattern

// zoho interview
// a
// a b
// a b c

// 1
// 1 2
// 1 2 3

// right angle triangle
let row = 6;
for(let i = 1; i <= row; i++){
    let star = "";
    for(let j = 1; j <= i; j++){
        star += "* ";
    }
    console.log(star);
}