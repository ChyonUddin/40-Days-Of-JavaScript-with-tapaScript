

// Task:-1. What will be the output of the following code?
/* try {
    let r = p + 50;        // p is not defined thats why it will be referenceError
    console.log(r);
} catch (error) {
    console.log("An error occurred:", error.name);
}
 */
// p is not defined thats why it will be ReferenseError
// syntax a kno kichu miss gele seta syntax error.
// kno property read korte na parle/property er value ulta palta dile seta typeError.
// Array er length ulta palta dile seta hbe rangeError
// argument er vitor thik url na dile seta hbe urlError
// R ekta ache evaError jta bad practice tai ami ota sikhi nai janio na 


// Task:-2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors

function processPayment(amount){
    let balance=200;
    try{
        if(amount<=0){
            throw new Error(`${amount} must be a possitive number`);
        }
    } catch (error){
        console.error(error.message);
        return;
    }
        return {
        withdraw: (amount)=>{
            try{
                if(amount>balance){
                    throw new Error(`${amount} : that much balanace not abvailabel`);
                }
            }catch(error){
                console.error(error.message);
            }
            balance = balance- amount;
            console.log(`you have withdraw ${amount} taka and your balance is ${balance}`);
        }
       };
     
}

processPayment(10)

// same jinis ta r o sohoj vabe kora jai 

function processPayment1(amount){
    let balance=200;
    try{
        if(amount<=0){
            throw new Error(`amount must be a possitive number`);
        }
        if(amount>balance){
            throw new Error(`you have extended you limit`);
        }
        balance-=amount;
        console.log(`you have withdraw ${amount} tk now your balance is ${balance} tk`)
    }catch(error){
        console.error(error.message);
    }
}

processPayment1(1);

// Task:-4  Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch

function fetchData(url) {
    try {
        if (!url.startsWith("https")) {
            throw new Error("Invalid URL");
        }
        
        // ✅ এখানে আমরা শুধু simulate করছি (real API call নয়)
        console.log(`Fetching data from ${url} ...`);
        
        // fake response
        return { status: 200, data: { message: "Success" } };
        
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// ✅ Example calls
//fetchData("http://example.com");   // Error: Invalid URL
fetchData("https://example.com");  // Success simulation




//Task:-5. Implement a custom error type ValidationError using constructor functions to handle form validation errors


Example:
function validateUser(data){
    try{
        if(data.username==""){
            throw new Error(`username cant be empty stirng`);
        }
        if(!data.username=="string"){
            throw new Error(`username must be a string`);
        }
        if(data.age<=0){
            throw new Error(`age must be a positive number`);
        }
    } catch(error){
        console.error(error.message);
}
}
const userInput = { username: "bishal", age: 2 };
validateUser(userInput);

// Output:
// ValidationError: Username cannot be empty
// ValidationError: Age must be a positive number






// Task:- 8. What is the purpose of throw in JavaScript?


/* It catches an error
It stops the execution of a program
It creates a new error manually         // right answer
It prints an error message
 */


// Task:- 9. What does the finally block do in a try...catch statement?


/* 
Runs only if an error occurs
Runs only if no error occurs
Runs regardless of whether an error occurs or not   // right answer
Stops the execution of the script
 */




// Task:- 10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object


/* 
| Keyword / Concept | Usage / Purpose                                                                                                            --------------------------------------------------------------------------------------------------- |
| **try**           | Defines a block of code to test for errors.           | `js try { let x = y;} `                                                                            


| **catch**         | Defines a block of code to handle errors that occur in `try`.   | `js try { let x = y; } catch(e) { console.log(e.message); } `                                       


| **throw**         | Used to manually create an error.        | `js throw new Error("Invalid input"); `                                                             

| **rethrow**       | Used inside a `catch` block to throw the error again after partial handling. Useful if you can’t fully handle it locally. | `js try { ... } catch(e) { console.log("Logging error"); throw e; } `                               


| **Error object**  | Built-in object that provides details about an error (`name`, `message`, `stack`).                                        | `js try { throw new Error("Something went wrong"); } catch(e) { console.log(e.name, e.message); } ` |
 */

