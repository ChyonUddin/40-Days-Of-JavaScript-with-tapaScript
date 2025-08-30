
// What is Closure in JavaScript?

/* Closure in JavaScript

A closure is a feature where an inner function has access to variables from its outer (enclosing) function's scope, even after the outer function has finished executing.

Key Points

A closure is created when a function is defined inside another function and the inner function remembers the outer function's variables.

It allows data to be stored privately and persist between function calls.

Variables inside a closure are not accessible from outside directly, providing data encapsulation. */


//  Task 01:-  What will be the output of the following code and why?

function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter(); // 1  It is a closure bcz it returns a function 
counter(); // 2  ami inner function k koto bar call korchi setai amr output hbe. 

// Task 02:- What will be the output and why?

function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());  // ami testClosure k kno variable a save kori nai tar jonno 2 ta parenthesis use korsi. first ta testClosure function k exicution korse r second ta return annonymous functon k return korse.  ## return er vitor ami x k reassign kori nai tar jonno x er value bar bar chage hbe na. eta fixed e thkbe 


// Task 03:- Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

function countButton(){
    let count=0;
    return function(){
        count ++;
        console.log(count,`Times you have pressed the button.`);
    }
}
const countNumber= countButton();
countNumber();
countNumber();
countNumber();
countNumber(); //4 
countNumber(); //5


// Task 04:- Write a function createMultiplier(multiplier) that returns another function to multiply numbers

function createMultiplier(multiplier){
    let result= multiplier;
    return function(){
        console.log(result*2);  // variable reassigne kori nai dekhe bar bar j input decci tar multiplier asche. 
    }
}

const checkNumber= createMultiplier(52);
checkNumber(); // 104
checkNumber(); // 104
checkNumber(); // 104

// Task 05:- What happens if a closure references an object?

/* # The object is garbage collected immediately
   # The object remains in memory as long as the closure exists // ** it wil be the answer. 
   # The object is automatically cloned
   # None of the Above. 
   
   */



// Task 06:-  Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.   


/* 
 ## What is function factory? 

Function Factory (JavaScript)

A function factory is a function that creates and returns other functions, often with customized behavior. It leverages closures to preserve data across multiple function calls.

Key Points

A function factory returns one or more functions instead of a value.

It can create multiple functions that share the same outer scope but maintain their own private data.

It is commonly used to avoid repetitive code by dynamically generating functions with similar structures but different parameters or initial states. */


function counter3(){
    let count =0;
    return {
        "increment": (possitive)=>{
             count+=possitive;
             //count++;
             console.log(count);
        },
        "decrement": (decrement)=>{
            count-=decrement;
            //count--;
            console.log(count);
        },
        "reset": (reset) =>{
            count=0;
            console.log(count);
        }
    }
}
const controlButton = counter3();
console.log(controlButton.increment())
console.log(controlButton.increment())
console.log(controlButton.increment())
console.log(controlButton.decrement())
console.log(controlButton.decrement())
console.log(controlButton.decrement())
console.log(controlButton.reset());

console.log(controlButton.decrement(3))
console.log(controlButton.increment(9))
console.log(controlButton.reset());