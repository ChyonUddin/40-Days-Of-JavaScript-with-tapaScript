console.log("lets learn the scope and scope chain like a cup cake");

// What will be the output of the following code and why?

let user = "Alice";

function outer() {
    function inner() {
        console.log(user); // bob;
    }
    let user = "Bob";
    inner();
}

outer();

// ans will be bob bcz user is called once inside the inner function. and it found the bob value first in the function. And global variable isnt declaired. 


// What is the mistake in the code below?

let total = 0; // Global, bad practice

function add(num) {
    // declaired the variable inside the function
    total += num;  // use return key word
}

add(5);
add(10);
console.log(total);

//  ## ans there is no mistake in this code, but there is some issuee like variable declaired in global scope thats why anyone cane access the variable and they can change, and thats why it will hamper our code desire.  For that we will declaire the variable inside the function. 

// ## inside the function we have to use return key word to get the value. and the output will be 15. but why it is 15 you have to think. think in deep. 



// Create a function with a nested function and log a variable from the parent function.

function parent(){
    let num=6;
     function inner(a){
        return num+=a;
    }
    return inner(6);
}
const b= parent();
console.log(b)


// Use a loop inside a function and declare a variable inside the loop. Can you access it outside?



function loop1(){
    for(let i=1;i<=3;i++){
        let insideLoop=5;
        console.log(insideLoop); // work
    }
    // console.log(insideLoop); //  Uncaught ReferenceError.
}
 loop1();



 //  Write a function that tries to access a variable declared inside another function.

 function loop(){
    let canAccess= 7;
    // console.log("inside function can access", canAccess);
}
// console.log("outside function you cant access the variable", canAccess);  // reference error.


//   What will be the output and why?

console.log(a);
//let a = 10; // error!  Cannot access 'a' before initialization




// Where is the age variable accessible?

function showAge() {
    let age = 25;
    console.log(age);  // only inside the showAge function 
}
//  console.log(age);   i cant access here the age variable outside the showAge function. 



//  What will be the output and explain the output?

let message = "Hello";

function outer() {
    let message = "Hi";

    function inner() {
        console.log(message);   // output will be hi bcz of the scope chain.
                                  //  it will catch the nearest variable .
    }
    inner();
}

outer();


// What will be the output and why?

let x = "Global"; // it is placed in global scope 

function outer() {
    let x = "Outer";  // it is placed in function scope chain 

    function inner() {
        let x = "Inner";  // this x is placed in function scope.
        console.log(x);   // this will give us which x variable value which catch it first. 
                          // it will catch its scope variable first, if there is no variable   found after that it will go for scope chain variables.  

                          //  So output is Inner;
    }

    inner();
}

outer();


// What will be the output and why?

function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce();
reduce();

// bcz of the closer output will be -1,-2. 