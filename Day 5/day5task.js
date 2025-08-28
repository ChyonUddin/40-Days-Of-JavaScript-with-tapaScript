console.log("day 05 itaration and looping")
for(let r =1; r<=3; r++) {
    for(let c=1; c<=3; c++) {
        console.log("Row", r, "Col", c)
    }
}
let row = 5;
for(let R=1; R<=row;R++){
    let print="";
    for(let C=1; C<=R; C++){
         print += "*";
    }
    console.log(`%c${print}`,"color: red; font-weight: bold")
}
// %c babohar korsi console.log() er vitor css style add korar jono.
// `${}` eta k bole hoi templet litarel

// 2. Craete Multiplication Table (Using for loop)

let pataran =9987;
for(let j=1; j<=10; j++){
    console.log(`${pataran}*${j} = ${pataran *j}`);
}
// using template litarature and crate a multiplication table 


// 3. Find the summation of all odd numbers between 1 to 500 and print them on teh console log.

let sum = 0;
for(let i=1; i<=500; i+=2){
    sum+=i;
}
console.log(sum);

// 4. Skipping Multiples of 3
/* Write a program to print numbers from 1 to 20, but skip . */

let num=20;
//let mult= 3%
for(let i=1;i<=20; i++){
    if(i%3==0)
    continue;
    console.log(i)
}

//
let nub= 4583;
let reversed = 0;
while(nub>0){
    digit = nub%10;
    reversed = reversed*10+digit;
    nub = Math.floor(nub/10);
}
console.log(reversed);
console.log(Math.floor(541/10))

// Write your understanding on the difefrences between for, while, and do-while loop. Create their flow charts.

// for loop 
/*
# loop declaration er vitor initial value declar korte hoi 
# koto bar itaration hbe seta jana thkle for loop use kora jabe 
# age conditon check kore tarpor exicution kore  
# loop er vitor increment declaration deya thake

// while loop 
# loop er age initial value declar korte hoi 
# jkhn amra janbo na koto bar loop korte hbe tkhn e amra while loop use korbo
# age conditon check kore tarpor exicution kore  

// do while loop 

# loop er age initial value declar korte hoi
# age exicution kore pore conditon check kore 
# ek bar holew loop ghurai 

*/