

//  Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.
{
    console.log(" tdz is start for name, age and school variable");
    function how(){
        console.log("i will not exicute bcz i am not invocked");
    }
    //console.log(name); //  ## it will show error and say you can not access the variable before initialaition? 

    let name="bishal"; // tdz is end here for name variable.
    function what(){
        console.log("here you can access the name variable", name);
    }
    //
    //
    // codes
    //
    console.log("same as name variable you can not access age variable here");
    let age = 25; // tdz is end here for age variable. 

    // codes\
    console.log(age);
    // codes

    let school = "abc"; // tdz is end here for school variable.
    console.log("from here you can access any where school variable")
}


//  Explain Variable and Function Hoisting with Example. Post the code as your answer.

// ## variable hoisting function

sayHello(); // ❌ Error: sayHello is not a function

var sayHello = function () {
  console.log("Hi");
};


// function hoisting 

greet(); // Works even though it's called before definition

function greet() {
  console.log("Hello");
}
