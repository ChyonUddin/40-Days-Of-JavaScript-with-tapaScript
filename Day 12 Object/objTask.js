

// Task:-1. What will be the output and why?

const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");  

// eta optional chain hole,  undefined. bcz you want to access a undefined value which give you undefined.


/* 
Correct ans is, 
Explanation:

?? is the nullish coalescing operator in JavaScript.

It only checks for null or undefined.

If the left-hand side is null or undefined, it returns the right-hand side.

Otherwise, it returns the left-hand side value. */



//Task:-2. What will happen if we try to modify a frozen object?

const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a); 
// output will be a:1 bcz it use freeze operatior, which is extrictly freeze his operator, and dont modify them. 



// Task:-3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring
const person = {
    name: "Tapas",
    company: {
      name: "tapaScript",
      location: {
        city: "Bangalore",
        zip: "94107"
      }
    }
  };

 const {name,company,company:{location:{city}}}=person;
 console.log(name); 
 console.log(company); 
 console.log(city); 



 // Task:-4. Build a Student Management System

/* Store student details in an object (name1, age, grades).
Implement a method to calculate the average grade. */

const stud ={
    name1: "bishal",
    age:24,
    grades:[87,90,95,78],
    calculateAvarege(){
        let sum = 0;
        for( let i=0;i<this.grades.length;i++){
            sum+=this.grades[i];
        }
        return sum/this.grades.length;
    }
}

console.log(stud.calculateAvarege());


//Task:-10. Loop and print values using Object destructuiring

const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

for(let{name,address,age} of users){
    console.log(name,address,age);
}


// Task:-8. What will be the output and why?

const person1 = { name: "John" };
const newPerson = person1;
newPerson.name = "Doe";
console.log(person1.name);

/*
 Explanation:
const person1 = { name: "John" };
person1 একটা object reference ধরে রাখছে।
const newPerson = person1;
newPerson আর person1 দুটো ভিন্ন variable হলেও, দুটোই একই object কে reference করছে।
অর্থাৎ memory তে একই জায়গার দিকে তারা point করছে।
newPerson.name = "Doe";
যেহেতু দুজনই একই object কে ধরছে, newPerson দিয়ে update করলে person1 এও reflect হবে।
console.log(person1.name);
এখানে output হবে "Doe", কারণ object এর ভিতরের মান update হয়ে গেছে।
 */



// Task:-7. How do you check if an object has a certain property?

Object.hasOwn(user,"bishal") // eta use kora hoi. in {for in loop} use kora hoi key gulo ber kore niye asar jonno. 




// Task:-6. What is the difference between Object.keys(), Object.values() and Object.entries()? Explain with examples 



/* 
Object.keys()
কাজ: object এর সব own enumerable properties এর key return করে।
Return value → Array of keys
👉 Example:
const user = { name: "Alex", age: 25, country: "Bangladesh" };
console.log(Object.keys(user));
🟢 Output:
["name", "age", "country"]
🔹 Object.entries()
কাজ: object এর সব own enumerable properties এর key-value pair return করে।
Return value → Array of arrays → প্রতিটি item হলো [key, value]
👉 Example:
const user = { name: "Alex", age: 25, country: "Bangladesh" };
console.log(Object.entries(user));
🟢 Output:
[
  ["name", "Alex"],
  ["age", 25],
  ["country", "Bangladesh"]
]
✅ পার্থক্য এক নজরে:
Method	Returns	Example Output	ব্যবহার
Object.keys(obj)	Array of keys	["name", "age", "country"]	শুধু key দরকার হলে
Object.entries(obj)	Array of [key, value]	[["name","Alex"],["age",25],["country","BD"]]	key+value দুটো একসাথে দরকার হলে
 */


/*

## object.entres/object.keys/object.fromEntres/object.values/object.hasOwn()
object.entres() eta object k array te rupantor kore. 
object.keys() eta object er sob key gulo ber kore ane dei.
object.fromEntres() eta array k object a rupantor kore.
object.values() eta object er sob value k ber kore ane dei. 
## {for.. in ..} loop eta object er sathe jai.
object.hasOwn() eta diye check kora hoi object er vitor oi property ache ki na. 

*/

// Task:-5. Book Store Inventory System

const inventorySystem = {
    books: [],
  
    // Add a book
    addBook(book) {
      this.books.push(book);
    },
  
    // Show all books
    listBooks() {
      for (const book of this.books) {
        console.log(`${book.title} by ${book.author} - Price: ${book.price}, Stock: ${book.stock}`);
      }
    },
  
    // Search book by title
    findBook(title) {
      for (const book of this.books) {
        if (book.title === title) {
          return book;
        }
      }
      return null;
    },
  
    // Update stock
    updateStock(title, newStock) {
      const book = this.findBook(title);
      if (book) {
        book.stock = newStock;
        console.log(`Stock updated for ${title}`);
      } else {
        console.log("Book not found!");
      }
    }
  };
  
  // Example usage
  inventorySystem.addBook({ title: "JavaScript Basics", author: "John Doe", price: 350, stock: 10 });
  inventorySystem.addBook({ title: "Learn Python", author: "Jane Smith", price: 500, stock: 5 });
  
  inventorySystem.listBooks();
  
  console.log("Find:", inventorySystem.findBook("Learn Python"));
  
  inventorySystem.updateStock("Learn Python", 12);
  inventorySystem.listBooks();
  