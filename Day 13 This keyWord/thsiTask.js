console.log("welcome to this keyword");
"use strict";
// Task:-2. What is the problem here? Fix it to log the correct name and explain the fix

const user = {
  name: "tapaScript",
   greet: () => {
    console.log(`Hello, ${this.name}!`);
  }, 

  greet() {
    console.log(`Hello, ${this.name}!`);  // for 1
  },

  
  /* greet () {
        const inner = () => {
        console.log(`Hello, ${this.name}!`);  // for 2
      }
      inner();
  }  */
};

user.greet();

// the problem is, this keyword dosn't have any this keyword. It always refer to the parent scope. And here the parent scope is global scope that is window. thats why it is undefined. 

// 1 to fixed you can use the normal function .

// 2 to fixed the problem you have to use the arrow function one level down to access the object as a parent of the arrow function.


// Task:-3. Can you explain what is the problem here and fix the issue to log the correct name?

const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;  // i can use, obj.greet();
                            // i can use, const greetFn=greet.bind(obj); greetFn();
                            // i can use, const greetFn=()=>{obj.greet()}; greetFn();
greetFn();

// a stand alone function need an object as a argument to give you the correct ans. but here you dont give any argument. thats why it this apply to the undefined argumnet and thats why it give you undefined. 


// Task:-4. What is the problem with the following code? Why isn't it logging the name correctly?
const user1 = {
  name: "Alex",
  greet: function () {
    const  inner =() =>{
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

user1.greet();

// we give the object to the greet function. thats why it looks it is correct. bt a stand alone function always refer to the window or where it is called. bt here in greet function stand alone function use twice thats why it can not access the user1 object. because it cant access the parent object. for accessing the parent you can use arrow function. 


//  Task:-5. Create a Sports constructor function that takes name and number of players as arguments and assigns them using this keyword. Then, create two sports instances and log their details

const Sports = function(name, numberOfPlayers){
    this.name= name;
    this.numberOfPlayers=numberOfPlayers;
    this.getDetalies=function(){
        console.log(`${name} + ${numberOfPlayers}`);
    };
}
const palyer1 = new Sports("bishal", 10);
palyer1.getDetalies();
//console.log(palyer1);
const palyer2 = new Sports("chyon", 2);
palyer2.getDetalies();
//console.log(palyer2);


//  Task:-6. Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of

const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

const a = car1.describe;
const b = car1.describe.bind(car2);
a.call(car2);
a.apply(car2);
b();
car2.describe = car1.describe;
car2.describe();


// Task7:-What will be the output of the following code and why?
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();

// ans is b (charlie and undefined) arrow function doesnot access the parent object.
/* 2. person.sayHelloArrow();
এটা একটি arrow function।
Arrow function নিজের this তৈরি করে না, বরং তার surrounding lexical scope থেকে this নেয়।
এখানে surrounding scope হলো global scope (or module scope), object না।
Global scope এ কোনো name property নেই (Node.js এ → undefined, browser এ strict mode ছাড়া হলে window.name)। */