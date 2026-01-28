
{
    // What will we learn today?

// - Creating Elements
// - Inserting Elements
// - Modifying Content
// - Removing/replacing Elements
// - Read, Write, and Remove Attributes
// - Travarsing/Navigating DOM
// - Mnaipulating Styles
// - Manipulating Classes
// - Controlling Visibilities
// - Build Project(s)
// - Tasks

}

{
    // Creating a Element 
    const pElem = document.createElement("P");
    pElem.innerText = "I love to Programing, i can do it untill i die."
    document.body.appendChild(pElem);
    console.log(pElem);
}

{
    // Insert Elements 
    const spanElem = document.createElement("span");
    spanElem.innerText = "I am applying two things at a time.Like first i create the span element and Insert it in the HTML."
    //document.body.appendChild(spanElem);
    const pElem = document.querySelector("p");
    document.body.insertBefore(spanElem,pElem.nextElementSibling);

}

{
    // Modifying Content 
    const pElem = document.querySelector("p");
    pElem.innerHTML = "<u>Hello How</u> are You doing?"

    const divElem = document.createElement("div");
    divElem.innerText = "i love you.";
    document.body.appendChild(divElem);

    const upDateDiv = document.querySelector("div");
    upDateDiv.innerText = "i hate you civil engineering";
    console.log(divElem);
}

{
    // Removing/Replacing Elements 
    let list = document.getElementById("myList");
    const itemToRemove = list.children[0];
    list.removeChild(itemToRemove);
    console.log(list.childern);

    // Replacing 
    const pElem = document.querySelector("p");
    list.replaceChildren(pElem);

    // Removing 
    document.getElementById("myList").remove();

}

{
    // Read, Write and Remove Attributes 
}