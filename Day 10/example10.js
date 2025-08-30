/* what is scpoe ? 

scope means where the variable is accessable? whyther it is in function/block/global? 
where it is accessable it will call that scope.

## There is four types of scope 
1. global scope
2. function scope
3. block scope
4. module scope  // module scope we will rearn in module section in js advance topic 

##  what is scope chain? 

The Scope Chain is the hierarchy of scopes that JavaScript follows to resolve variables.
When you try to access a variable, JavaScript first looks in the current scope, and if it doesn't find it there, it moves outward step by step through parent scopes until it reaches the global scope.

## orthat amra ki bujhlam!! nijer scope a variable khuje na paile tar porer scope, tarporer scope a jaoya r variable khuje ber kora k bola hoi scope chain 

*/





/* 


console.log("Day 10");

// 4 Types of Scope in JavaScript
// 1. Global Scope
// 2. Function Scope
// 3. Block Scope
// 4. Module Scope

// Global Scope
// Variables declared outside of any function or block scope
// are in the global scope

let name = "Tapas";

function greeting() {
    console.log("Hello ", name);
}

greeting();

console.log(name);// "Tapas"

{
    console.log("Inside Block", name)
}

// Function Scope: Variables declared inside a function are only
// accessible within that function.

function toDo() {
    let task = "Learning 40 days of JS"
    console.log(task);
}

toDo();

// console.log(task);

// Block Scope: Variables declared using let and const inside {} cannot be accessed outside the block.

{
    let count = 10;
    console.log(count)
}

// console.log(count)

// Scope Chain

let globalVar = "I am a Global Variable";

function outer() {
    let outerVar = "I am an Outer Variable";

    function inner() {
        let innerVar = "I am an Inner Variable";

        console.log(innerVar); // "I am an Inner Variable"
        console.log(outerVar); // "I am an Outer Variable"
        console.log(globalVar); // "I am a Global Variable"
    }

    inner();
}

outer();

console.log(outerVar); // Reference Error



var count = 10;

function outer() {
    // var count = 20;

    function inner() {
        //var count = 30;
        console.log(count); // 10
    }
    inner();
    console.log(count); // 10
}

outer();
console.log(count); // 10


// Variable Shadowing

let message = "I am doing great"

function situation() {
    let message = "I am not doing great"
    console.log(message); // I am not doing great
}

situation();
console.log(message); // I am doing great 
// 

*/
