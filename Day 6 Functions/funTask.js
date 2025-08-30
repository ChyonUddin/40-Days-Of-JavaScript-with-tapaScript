console.log("Welcome to day 06 and learn function");

// 1. Write a Function to Convert Celsius to Fahrenheit

function celsiusToFahrenheit(celsius){
    const Fahrenheit=(celsius*9/5)+32;
    return Fahrenheit; 
}
console.log(celsiusToFahrenheit(38));

// 2. Create a Function to Find the Maximum of Two Numbers

function findMax(a,b){
    if(a>b){
        return a;
    } else return b;
}
console.log(findMax(-5,-8));

// 3. Function to Check if a String is a Palindrome

function isPalindrome(string){
    const reversedString = string.split(""). reverse().join("")
    return string=== reversedString ;
}
console.log(isPalindrome("mam"));
// array method use kora holo because coder onk lazy hoi. 

// 4. Write a Function to Find Factorial of a Number

function factorial(a){
    let b = 1;
    for(let i=2; i<=a; i++){
        b*=i;
    }
     return b;
}
console.log(factorial(4));

// Invalid command detection er jonno ey vabe likhte hbe 

function ffactorial(a){
    if(a<0){
        return "invalid command";
    }else if ( a===0 || a===1){
        return 1;
    } else {
        let sum = 1;
        for(let i=2; i<=a; i++ ){
            sum*=i;
        }
        return sum;
    }
}
console.log(ffactorial(0));

// 5. Write a function to Count Vowels in a String

function countVowels(string){
    string = string.toLowerCase();
    let count = 0;
    for(i=0;i<string.length; i++){
        let a = string[i];
        if(a==="a" || a === "e" || a=== "i" || a === "o" || a === "u"){
            count++;
        }
    }
    return count ;
}
let a = countVowels("bishaleeee");
console.log(a);

// another style 

function abc(string){
    string=string.toLowerCase();
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let index of string){
        if( vowels.includes(index)){
            count++
        }
    } return count;
}
console.log(abc("chyon"));

// 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence

function firstWord(word){
    let upper="";
    for(let i=0; i<word.length;i++){
        if(i===0 || word[i-1]=== " "){
            upper+=word[i].toUpperCase();
        }else{
            upper += word[i];
        }
    }
    return upper;
}
console.log(firstWord("bishal and chyon"));

// 7. Use an IIFE to Print “Hello, JavaScript!

const IIFE = (function(){
    return "Hello JavaScript";
})
console.log(IIFE());

// ota IIFE hoi ni, bcz syntax error 

// the right version of IIFE is 
(function(a){
    console.log(a);
})("Right Syntax Of IIFE Hello JavaScript");

// 8. Create a Simple Callback Function
function callBack(a){
    return a;
}
const argu = function(){
    console.log("i am a call back function");
}
callBack(argu());

// 9. Create Call Stack Execution Diagram for this flow

function f1() { console.log("i will print first") }
function f2() {
    f1();
    console.log("i will be second")
}
f2();

/*
# f1 age exicution korbe bcz of the call stack rules of first in last out  (FILO) 
# creation phase er kotha vabo age create hbe tarpor call stack a in invock part asbe tarpor code call stack a jabe.
# f2() first invock hoise r f2 function er vitor f1 invock hoyeche tai ki holo f1 last a invock holo tahole amra ki jani first in last out (FILO)
 */

// 10. Create Call Stack Execution Diagram for this flow
 
function f4() { console.log("i am second and forth")}
function f5() { console.log("i am first")}
function f6() {
    f4();
    console.log("i am third ")
}
f5();
f6();
f4(); 