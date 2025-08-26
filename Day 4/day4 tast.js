// 1. What will be the output of this code snippet and why?
let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}
// the output will be default value bcz it is case sensative

// 2. Build an ATM Cash Withdrawal System
/* Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”. */

let amount=500;
if(amount%100!==0){
    console.log("Invalid amount");
}else{
    console.log("Withdrawal successful");
}

// 3. Build a Calculator with switch-case
/* Write a simple calculator that takes an operator (+, -, *, /, %) as input, and performs the operation on two numbers. Print the output on the console. */

let operator= "+";
switch(operator){
    case("+"):
    let a = 5+5;
    console.log(a);
    break;
    case("-"):
    let b = 5-5;
    console.log(b);
    break;
    case("*"):
    let c = 5*5;
    console.log(c);
    break;
    case("/"):
    let d = 5/5;
    console.log(d);
    break;
}

// 4. Pay for your movie ticket
/* Imagine, the INOX charges ticket prices based on age:

Children (<18 years): $3
Adults (18 - 60 years): $10
Seniors (60+ years): $8 */

let persionAge=17;
if(persionAge<18){
    console.log("You are a children, ticket price $3");
}else if(persionAge>18 && persionAge<=60){
    console.log("You are adult, ticket price $10");
}else {
    console.log("You are a senior citizen,ticket price $8");
}

// 5. Horoscope Sign Checker
/* Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else. */

let birtMonth="august";
switch(birtMonth){
    case 'march':
    case 'april':
    console.log("You borns in Aries");
    break;
    case 'may':
    case 'june':
    console.log("You borns in Taurus");
    break;
    case 'july':
    case 'august':
    console.log("You borns in Gemini");
    break;
}

// 6. Which Triangle?

/* A triangle has 3 sides. A Triangle type is determined by its sides:

All sides equal is called, Equilateral Triangle.
Two sides equal is called, Isosceles Triangle.
All sides different is called, Scalene Triangle.
Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly. */

let input1=3;
let input2=6;
let input3=5;
if(input1==input2 && input3==input1){
    console.log("Equilateral Triangle") 
}else if (input1 == input2 || input2 == input3 || input1 == input3){
    console.log("Isosceles Triangle");
}else{
    console.log("Scalene Triangle") 
}