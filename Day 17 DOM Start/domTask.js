
console.log(" Welcome to learn DOM ");

{let abc = document.getElementById("heading")
console.log(abc);
}

{
    let classElem = document.getElementsByClassName("info");
    console.log(classElem);
}
{
    let quaryElem = document.querySelector("p");
    console.log(quaryElem);
}
{
    let quratyAllElem = document.querySelectorAll("p.info")
    console.log(quratyAllElem);
}
{
    function highlightText(){
       let elems = document.querySelectorAll("p.info");
       elems.forEach(elm=>{
        elm.style.backgroundColor="red"
       })
    }
}
{
    function filterList(){

        let idElem = document.getElementById("searchInput");
        let input = idElem.value;

        let qElems = document.querySelectorAll("ul#itemList li");
        
        qElems.forEach((ele)=>{
            ele.style.display = ele.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none";
        });
    }
}

{
   //  Task:1 Find the Most Frequent Word in a Paragraph

   let divElems = document.getElementById("text").innerText.toLowerCase().replace(/[^\w\s]/g,  "");
   let [word, count ] = Object.entries(
    divElems.split(" ").reduce((acc,w) => {acc[w]=(acc[w]||0) + 1 ;
         return acc},{})).reduce((a,b)=>a[1]>b[1]?a:b);

   document.getElementById("output").innerText=`Most frequent word ${word} and that word count ${count} times`
  
}

    
{
    // Task:2- 2. Create a zebra pattern
   
    let nodeList = document.querySelectorAll("ul#cars li");
    nodeList.forEach((li,index)=>{
        if(index % 2 === 0){
            li.style.color="black";
            li.style.backgroundColor="white";
        }else{
            li.style.color= "white";
            li.style.backgroundColor= "black";
        }
    })
}
{
    // Task:3  3. Write different ways we can access DOM and what they returns
    {
         // document.getElementById("id"); // id name er element sathe innnertext o asbe.

         // getElementById("id") → returns single element


         //document.getElementsByClassName("class") //  ek class name a joto gulo element ache sob gulo selecte hbe sathe element er innertext o asbe // html collection

         // getElementsByClassName("class") → returns HTMLCollection (array-like)


         //document.getElementsByTagName("") // html collection 
         //getElementsByTagName("tag") → returns HTMLCollection


         //document.querySelector("") // first matching element  
         // querySelector("cssSelector") → returns first matching element


         //document.querySelectorAll("") // nodeList dibe ja ekta array
         // querySelectorAll("cssSelector") → returns NodeList (array-like)

    }
}

{
    // Task:4 4. Find and Replace Text Inside a Page
    // Write a script that finds all occurrences of a word inside a <p> tag and replaces them with another word dynamically.

    let pera = document.getElementById("para");
    pera.innerHTML = pera.innerHTML.replace(/JavaScript/g, "JS")
}
{
    // Task:5 5. Extract and Count Unique Links from a Page
    // Count all the unique hyperlinks (<a>) in a page and display their count.
    const links = document.querySelectorAll("a");
    const unique = new Set();

    links.forEach(link => unique.add(link.href));

    console.log("Unique links count:", unique.size);

}