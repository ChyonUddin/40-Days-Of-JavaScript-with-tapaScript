
// Task:- T-001: Create an array of 5 elements using the Array Constructor.
// the answer is:-
const arrayConstructor= new Array("bishal","chyon","uddn","md","name");

// Task:- T-002: Create an array of 3 empty slots.
// the answer is:- 
const emptyArray= [, , ,];
const emptyArray1= new Array(3);
console.log(emptyArray.length);
console.log(emptyArray1.length);

// Task:-3 T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.

const array=["poteto","tometo","garlic","chilli","apple","orange"];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[array.length-3]);


// Task:-4 T-004: Use the for loop on the above array to print elements in the odd index.

for(let i=0; i<=array.length-1; i++){
    console.log(`Element at the index ${i} is ${array[i]}`);
}

// Task:-5 T-005: Add one element at the front and the end of an array.

array.unshift("first");
console.log(array);

// Task:-6  T-006: Remove an element from the front and the end of an array.

array.shift()
console.log(array);

// Task:-7 T-007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.

const array2 = [10,20,30,40,50,60,70,80,90,11]

// array destructuring korar jonno age index number diye ota k akta new variable a store kore nite hoi tarpor seta niye kaj korte hoi. 
// array te default value deya jai 
// nested array er jonno same just index value te ki ache r destructuring rules dekhe apply kore jaba. 
// 

const sixElemnet=array2[5];
console.log(sixElemnet);

// Task:-8 T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
const [one,two,...rest]=[10,20,30,40,50,60,70,80,90,11];
console.log(rest);

// Task:-9  T-009: Clone an Array(Shallow cloning)  // slice()

const array3=[10,5,8,7,9,6]
const arrayClone=array3.slice();
console.log(arrayClone);

// Task:-10   T-010: Empty an array using its length property

let array4=[10,5,8,7,9,6];
array4.length=0;
console.log(array4);

// Task:-11   T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. 

let arr=[1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<arr.length-1;i++){
    if(arr[i]==5){
        arr.length=6;   
    }
}
console.log(arr);

// Task:-12  T-012: Create an Array of 10 elements. Use the splice() method to empty the array.
arr.splice(0,6);
console.log(arr);

// splice original array modify kore dei 

// Task:-14   T-014: What happens when you concatenate two empty arrays?

const arrr=[];
const arrr1=[].concat(arrr);  // it will return a empty array.
console.log(arrr1);

// Task:-15  T-015: How can you check if a value is partially matching with any of the elements of an Array?

// One way- some+includes

let arr5 = ["apple", "banana", "mango", "orange"];
let value = "man";

let isMatch = arr5.some(item => item.includes(value));

console.log(isMatch); // true (কারণ "mango" তে "man" আছে)

// way two-   filter+includes

let arr6 = ["apple", "banana", "mango", "orange"];
let value1 = "an";

let matches = arr6.filter(item => item.includes(value1));

console.log(matches); // ["banana", "mango", "orange"]

let ar7=["bishal","chyon","hall",];
val="h";
let isMa=ar7.filter(item=> item.includes(val));
console.log(isMa);

// Task:-16   T-016: What is the difference between the slice() and splice() methods?

/*
## .slice mane ki? kichu ongso, tar mane element er kichu ongso copy kore ber kore ante use kora hoi.
## .slice() method use kora hoi sadharonoto copy korar jonno eta shallo copy kore.
## .splice(start,num of elem to delete, add elem1, add elem2) method use kora hoi element add and delete korar jonno. 
*/



// Task:-17  T-017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.

const arrayString=["bishal","chyon","abul","kuddus"];
const ascendingArray=arrayString.sort();
console.log("eta ascending akare sort hoyeche",ascendingArray);

const descendring=arrayString.sort((a,b)=>{ return a===b? 0: a>b? -1:  1});
console.log("descendring kore sort korlam",descendring);



// Task:-18  T-018: Can you give examples of sparse and dense arrays?

/* {
    Dense arrays

    A dense array is an array where most (or all) of the elements are actually filled (non-empty values).
    let denseArr = [1, 2, 3, 4, 5];
    console.log(denseArr); // [1, 2, 3, 4, 5]
    console.log(denseArr.length); // 5

    Sparse Array

    A sparse array has "holes" — some indices don’t have values (they’re empty or undefined by design)
    let sparseArr = [1, , 3, , 5];
    console.log(sparseArr);        // [1, empty, 3, empty, 5]
    console.log(sparseArr.length); // 5

  } */

    // Task:19  T-019: Give a practical usages of the .fill() method

    const arrayFill=[1,2,3,4,,5];
    const useFill=arrayFill.fill("bishal");
    console.log(useFill);

    // Task:-20 T-020: How to convert an array to a string? //toString()
    let  abd=[1,2,3,4,5];
    let gds=abd.toString();
    console.log(gds);
    console.log(typeof gds);



    const employees = [
        { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
        { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
        { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
        { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
        { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
        { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
        { id: 7, name: "George", departmentId: 3, salary: 5200 },
        { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
        { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
        { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
      ];

      const departments = [
        { id: 1, name: "HR" },
        { id: 2, name: "Engineering" },
        { id: 3, name: "Marketing" },
        { id: 4, name: "Sales" },
      ];


    // Task:-21 T-021: Can you filter employees who work in the "Engineering" department?

    {
        const dep=employees.filter((employee)=>{
            return employee.departmentId==2;
       })
       console.log(dep);
    }
   


    {
        const engineersDepartment=departments.find((emp)=>{
            return emp.name=="Engineering";
        })
        console.log(engineersDepartment);

        const empDepartment=employees.filter((emp)=>{
            return emp.departmentId==engineersDepartment.id;
        })
        console.log(empDepartment);
    }
    

    // Task:-22 T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)".

    {
        const findDeg=departments.find(emp=>{return emp.name=="HR"});
        console.log(findDeg);

        const addDeg=employees.map((emp)=>{
            let title="";
            if( emp.departmentId==findDeg.id){
                title=findDeg.name
            }
            return `${emp.name} ${title}`
        })
        console.log(addDeg);

        // ki bhul hoise nije nije bujho,, ey khane bhul kom output er plb ache.. code run korse but tmr desire output full fill hoi nai. 
    }
    


    {
        const employeeWithDept = employees.map(emp => {
            // find department for each employee
            const dept = departments.find(d => d.id === emp.departmentId);
            
            return `${emp.name} (${dept.name})`;
          });
          
          console.log(employeeWithDept);
          
    }


    // Task:-23 T-023: Find the highest salary among employees.

    {
        const highSalary=employees.reduce((max,emp)=>{
           return emp.salary>max? emp.salary : max ;
        },0)
        console.log(highSalary);
    }

    // Task:- 24  T-024: Check if there is at least one employee in the "Sales" department.

    {
        
        /* const findSales = employees.map((emp)=>{
            const salesDep= departments.find(d=>d.name=="sales");
           return `${emp.departmentId} ${d.id}`
        })
        console.log(findSales); */
    }

    {
        const salesDep= departments.find(dep=>dep.name==="Sales");
        console.log(salesDep);
        const hasSalseEmployee= employees.some(emp=>emp.id==salesDep.id)
        console.log("Has sales department", hasSalseEmployee);  
    }


    // Task:-25   T-025: Write a function to filter employees earning more than 6000.

    {
        function filterHighEarners(employees) {
            return employees.filter(emp => emp.salary > 6000);
          }
          
          const highEarners = filterHighEarners(employees);
          
          console.log(highEarners);
          
    }
    {
        function HighEarning(emp){
            return emp.filter((emp)=>{return emp.salary>6000})
        }
        const moreEarnigs = HighEarning(employees);
        console.log(moreEarnigs);
    }

    // Task:- T-026: Create an array of employee names only.

    {
        function findEmployeeName(emp){
            return emp.map((emp)=>{return emp.name});
        };

        const nameList=findEmployeeName(employees);
        console.log(nameList);
    }

    // Task:- 27  T-027: Calculate the total salary of all employees using

    {
        function findSalary(emp){
           return  emp.map((emp)=>{return emp.salary})
        };
        const salaryList=findSalary(employees);
        console.log(salaryList);
        function calculateSalary(emp){
            let sum = 0;
            for(let i=0;i<=emp.length-1;i++){
                sum+=emp[i];
            }
            return sum;
        }
        const totalSalary=calculateSalary(salaryList);
        console.log(totalSalary); // eta ami nije vebe vebe step by step korsi 
    }

    {
        const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
        console.log("Total Salary:", totalSalary); // 58300 eta shortcut with ai help. 
    }

    // Task:-28   T-028: Is there any employee earning less than 5000?
    {
        const lessThan= employees.some((emp)=>{
            return emp.salary < 5000; 
        })
        console.log(`${lessThan}, Employees are work here less then 5000 tk`);
    }
    {
        const hasLowEarner = employees.some(emp => emp.salary < 5000);

        console.log("Any employee earning less than 5000?", hasLowEarner);

    }

    // Task:-29  T-029: Find the first employee who earns exactly 5100.

    {
        const fixedSalary=employees.find(emp=>emp.salary===5100);
        console.log(fixedSalary);
    }

    // Task:-30  T-030: Find the last employee in the "HR" department.
     
    {
       // const findHR=departments.find(dep=>{return dep.name==="HR"}).employees.map(emp=> {return emp.departmentId===departments.id});
       // console.log(findHR);
       // const lastHR=findHR.findLastIndex(emp=>emp.department.id)
    } 

    {
        {
            // 1. Find HR department id
            const hrDept = departments.find(dep => dep.name === "HR");
        
            // 2. Get all employees in HR
            const hrEmployees = employees.filter(emp => emp.departmentId === hrDept.id);
        
            // 3. Find the last employee in HR
            const lastHREmployee = hrEmployees[hrEmployees.length - 1];
        
            console.log("Last HR Employee:", lastHREmployee);
        }
        
    }

    // Task:- 31   T-031: Find the first employee in the "Marketing" department.

    {
        const marketingDepartment=departments.find(dep=>dep.name==="Marketing");
        const marketinEployee=employees.filter(emp=>emp.departmentId===marketingDepartment.id);
        const firstEmployee= marketinEployee[0];
        console.log(firstEmployee);
    }

    {
        // 1. Find Marketing department id
        const marketingDept = departments.find(dep => dep.name === "Marketing");

        // 2. Find index of first employee in Marketing
        const index = employees.findIndex(emp => emp.departmentId === marketingDept.id);

        // 3. Get the employee at that index
        const firstMarketingEmployee = employees[index];

        console.log("First Marketing Employee:", firstMarketingEmployee);
    }

    // Task:-32  T-032: Check if all employees earn more than 4000.

    {
        const isLessThan=employees.some(emp=>emp.salary<400);
        console.log("Is there is anyone work less than 4000 tk", isLessThan);
    }

    // Task:-33   T-033: Find the first employee in the "Sales" and "HR" department.

    {
        const findDeps=departments.map(dep=> dep.name==="Sales" && dep.name==="Marketing");
        console.log(findDeps);
    }
    {
        function findDeps(dep){
            let deps=[];
            if(dep.name==="HR"){
                deps.push(dep.name);
            }

        }
    }
    {
        // Find HR dept id
        const hrDept = departments.find(dep => dep.name === "HR");

        // Find Sales dept id
        const salesDept = departments.find(dep => dep.name === "Sales");

        // First HR employee
        const firstHREmployee = employees.find(emp => emp.departmentId === hrDept.id);

        // First Sales employee
        const firstSalesEmployee = employees.find(emp => emp.departmentId === salesDept.id);

        console.log("First HR Employee:", firstHREmployee);
        console.log("First Sales Employee:", firstSalesEmployee);

    }

    // Task:-34 T-034: Verify if all employees belong to a department listed in the departments array.
    

    {
        // Get all valid department ids
        const departmentIds = departments.map(dep => dep.id);

        // Check if every employee has a departmentId inside departments
        const allValid = employees.every(emp => departmentIds.includes(emp.departmentId));

        console.log("All employees belong to a valid department?", allValid);

    }
     {
        const depart=departments.map(dep=>dep.id)
        const allValided=employees.every(emp=>depart.includes(emp.departmentId))
        console.log(allValided);
     }

     // Task:-35  T-035: Log each employee's name and department name to the console.

     {
        
        const depName=departments.map(dep=>dep.name);
        console.log(depName);
     }
     {
        employees.forEach(emp => {
            const dept = departments.find(d => d.id === emp.departmentId);
            console.log(`${emp.name} works in ${dept.name}`);
          });          
     }
     {
        employees.forEach(emp=>{
            const dept=departments.find(d=>d.id===emp.departmentId);
            console.log(`${emp.name} works in ${dept.name}`);
        })
     }


     // Task:-36  T-036: Extract all employee names into a single array.
     {
        const empName=employees.map(emp=>emp.name);
        console.log(empName);
     }

     // Task:-37  T-037: Increment each employee's salary by 10%

     {
       employees.forEach(emp=>
        emp.salary=emp.salary*1.1
       );
        console.log(employees);
     }
     // Task:-38  T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...]
    {

    }
    // Task:-39  T-039: Find the total salary of all employees working in the "Engineering" department.
    {
        const engineersId=departments.find(dep=>dep.name==="Engineering");
        const engineersSalary= employees.filter(emp=>emp.departmentId===engineersId.id).reduce((sum,emp)=>{
           return emp.salary+sum
        },0)
        console.log(engineersSalary);
    }

    // Task:40  T-040: Check if there is any department where all employees earn more than 5000.
    {
      const findDepartment= departments.some(dep=>{
        const deptEmployees=employees.filter(emp=>emp.departmentId===dep.id);
        return deptEmployees.every(emp=>emp.salary>5000);
      });
      console.log("is there any department where all employees earn>5000?", findDepartment)
    }    

    {
        const departmentWithHighSalaries = departments.some(dep => {
            // প্রতিটি department এর employees filter করা
            const deptEmployees = employees.filter(emp => emp.departmentId === dep.id);
          
            // check if all earn more than 5000
            return deptEmployees.every(emp => emp.salary > 5000);
          });
          
          console.log("Is there any department where all employees earn > 5000?", departmentWithHighSalaries);
          
    }
    const employeesWithProjects = [
        { id: 1, name: "Alice", projects: ["Project A", "Project B"] },
        { id: 2, name: "Bob", projects: ["Project B", "Project C"] },
        { id: 3, name: "Charlie", projects: ["Project D"] },
        { id: 4, name: "Diana", projects: ["Project A", "Project E"] },
        { id: 5, name: "Edward", projects: ["Project C", "Project F"] },
      ];


{
    // T-041: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }). Find the total number of unique projects being handled across all employees.
    const findProjects=employeesWithProjects.flatMap(emp=>emp.projects); // nested array thakar karone faltMap use kore projects gulo new ekta just projects array banalam 
    console.log(findProjects);
    const uniqueProjects=findProjects.filter((element,index,array)=> {
    return array.indexOf(element)===index}) // amra ki jani array er sob gulo method er vitor (element,index,array) ey 3 ta value argument akare amra use korte pari. 
    console.log(uniqueProjects);
}
{
// T-042: For each employee, find their department name and return an array of employee names with their department names.
const abc=employees.map((emp)=>{
    const dep=departments.find(dep=>dep.id===emp.departmentId);
    return `${emp.name} (${dep.name})`
})
console.log(abc)
}
{
    // T-043: Get a list of names of employees earning more than 6000.
    const getList=employees.filter(emp=>emp.salary<6000).map(emp=>emp.name);
    console.log(getList);
}
{
    const highEarners = employees
  .filter(emp => emp.salary > 6000)   // salary > 6000 filter
  .map(emp => emp.name);              // শুধু name নেওয়া

    console.log(highEarners);
}
{
    // T-044: Write a for-of loop to print the names of all employees from the employees array.
    for (let emp of employees){
        console.log(emp.name);
        
    }
    {
        for (let emp of employees){
             console.log(emp.salary);
    }
        for (let emp of employees){
             console.log(emp.id);
    }
    }
}
{
    // T-045: Using a for-of loop, print the names of employees earning less than 5000.
    for(const emp of employees){
        if(emp.salary<5000){
            console.log(emp.name);
        }
    }
}     
{
    // T-046: Modify the for-of loop to destructure each employee object and log their name and salary.
    for(const emp of employees){
        //console.log(`${emp.name} ${emp.salary}`);
    }
    {
        for(const {name,salary} of employees){
            console.log(`${name} earns ${salary}`);
        }
    }
}   
{
 // T-047: Write a for-of loop to match employees with their departments and print the results.
    for(const emp of employees){
        for(const dep of departments){
            if(emp.departmentId===dep.id){
                console.log(`${emp.name} works in ${dep.name}`); // eta thik kaj korbe tbe eta onk slow kaj korbe tai amra eta kom use korbo 
            }
        }
    }
}
{
    for (const { name, departmentId } of employees) {
        const department = departments.find(dep => dep.id === departmentId);
        console.log(`${name} works in ${department.name}`);
      }
      
}
{
    for(const emp of employees){
        const department=departments.find(dep=>dep.id===emp.departmentId);
        console.log(`${emp.name} works in ${department.name}`);
    }
}
{
    // T-048: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.
    for (const [index, emp] of employees.entries()) {
        console.log(`${index}: ${emp.name}`);
      }
      
}
{
    // T-049: Given the array-like object below, access the second element and log it:

    const arrayLike = { 0: "First", 1: "Second", length: 2 };
    const abc=arrayLike[1];
    console.log(abc);

}
{
    // T-050: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.
    function arryLike (){
        console.log(arguments);
        // option-1
        const argArr = [...arguments]; // array like k sprade operator diye amra array te convert kore nite pari 
        console.log("Converetd Arary Args", argArr);
        // option 2
        const argsArray = Array.from(arguments);
        return argsArray;

    }
    arryLike("bishal","chyon","uddin");
    //console.log(toArray(1, 2, 3, 4)); // [1, 2, 3, 4]
    //console.log(toArray("apple", "banana", "mango")); // ["apple", "banana", "mango"]
}

{
    // T-052: Merge these two arrays into a single array:

    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const arr3=arr1.concat(arr2);
    console.log(arr3);
}
{
    // T-053: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]
  
    /* 
    const newArray=("A","A","A","A","A");
    const newArray1=Array.from(newArray);
    console.log(newArray1); 
    
    */
}
{
    const n = 5;
    const result = Array.from({ length: n }, () => "A");
    console.log(result);
}
{
    // T-051: Write a snippet to select all div elements on a webpage (using document.querySelectorAll) and convert the resulting NodeList into an array.
    const divs = document.querySelectorAll("div");
    const divArray = Array.from(divs); //sprade oparetor r Array.from diye amra array mak
    console.log(divArray);
}
{
    // T-054: Use Array.from to convert a string like "Hello" into an array of characters.
    const str = "Hello";
    const charArray = Array.from(str);
    console.log(charArray); // ["H", "e", "l", "l", "o"]

}
{
    //  T-055: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using group().

    const fruits = ['apple', 'banana', 'apricot', 'mango', 'blueberry'];

// JS এর নতুন stage-3 feature `object.group()` বা `object.groupBy()` এখন Chrome + Node এ support করে
    const grouped = Object.groupBy(fruits,fruit => fruit[0]);
    console.log(grouped);
}
{
    //  T-057: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.
    const numbers = [3, 7, 3, 2, 3, 8, 7, 7];
    const frequency = {};

    numbers.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
    });

    const mostRepeated = Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b);
    console.log(mostRepeated); // 3 or 7 depending on frequency comparison

}
{
    //   T-058: Find the median of [5, 2, 9, 1, 3, 6, 8].

    const arr = [5, 2, 9, 1, 3, 6, 8];
    arr.sort((a, b) => a - b); // sort ascending
    const mid = Math.floor(arr.length / 2);
    const median = arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
    console.log(median); // 5

}
{
    // T-059: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).

    const pairs = [['a', 1], ['b', 2], ['c', 3]];
    const obj = Object.fromEntries(pairs);
    console.log(obj); // { a: 1, b: 2, c: 3 }

}
{
    // T-060: Flatten and convert all letters to uppercase in one step using flatMap(). Here is input array: [['a', 'b'], ['c', 'd']].

    const a = [['a', 'b'], ['c', 'd']]
    const b=a.flatMap(input=>input.map(letter=>letter.toUpperCase())) // call back function na dile error asbe . 
    console.log(b);
}
{
    // T-061: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']
    
    const fruits=  ['apple', 'banana', 'apple', 'mango', 'banana', 'banana'];
    const countFruits=fruits.reduce((acc,fruit)=>{
        acc[fruit]=(acc[fruit] || 0) + 1;
        return acc;
    },{})
    console.log(countFruits);

    /* 
    const fruits = ['apple', 'banana', 'apple', 'mango', 'banana', 'banana'];

    const countFruits = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
    }, {});

    console.log(countFruits);
    // { apple: 2, banana: 3, mango: 1 }
    */
}

{
    //  T-062: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']
    const array = ['a', 'b', 'c', 'd', 'e']
    const extractArray= array.slice(1,4);
    console.log(extractArray);
}
{
    // T-063: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()
    const array= [9, 3, 1, 6, 8];
    const ascArray= array.toSorted((a,b)=> {return a-b});
    console.log(ascArray);
}
{
    // T-064: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()
    const array= [1, 2, 3, 4, 5] ;
    const revArray=array.toReversed((a,b)=> b-a);
    console.log(revArray);
    console.log(array);
    const array2=array.reverse((a,b)=> a>b?a:b);
    console.log(array2); 
    console.log(array);

    // reverse() method mutable toReversed() method immutable 
    // reverse() method toReversed() method er call back function er argument er parthokko ache 
}
{
    // T-065: Group the follwing array elements based on age(Adult vs Non-Adult):

    const users = [
        { name: 'Alice', age: 55 },
        { name: 'Bob', age: 3 },
        { name: 'Charlie', age: 25 },
        ];

        const isAdult= Object.groupBy(users,({age}) => 
           {return  age>18? "Adult" : "Non-adult";}
        )
        console.log(isAdult);
}
{
    // T-066: Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".

    const a = "40 Days of JavaScript by tapaScript is a powerful initiative";
    const big = a.split(" ");
    console.log(big);
    const bigWord=big.reduce((b,small)=>{
       return b.length>small.length?b.length:small.length;
    }," ")
    console.log(bigWord);
}
{
    // T-067: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]
    const a = [1, 2, 3, 4];
    const b = [3, 4, 5, 6];
    const c = a.filter(aElm=>b.includes(aElm))
    console.log(c);
}