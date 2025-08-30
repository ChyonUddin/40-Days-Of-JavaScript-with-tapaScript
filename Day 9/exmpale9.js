/* 
// With var
{
    console.log('name is ', name);
    var name = "tom";
    name = 'tom';
    console.log('name is ', name);
    }
    
    // With let
    {
        //console.log('name is ', name);
        let name = "tom";
        name = 'tom';
        console.log('name is ', name);
    }
    
    // With const
    {
       // console.log('name is ', name);
        const name = "tom";
        //name = 'tom';
        console.log('name is ', name);
    }
    
    
    // Temporal Dead Zone(TDZ)
    
    // TDZ = an area where you can not access a variable until it is initialized
    
    // ReferenceError
    
    {
        // === name variable's TDZ started here
        //
        //console.log(name); // RerenceError
        //
       // console.log(address); // RerenceError
        let address = "bangalore";
        //
        let name = "tapaScript" // === name variable's TDZ ends here
        console.log(name);
        //
        //
    }


   // test(); test() is not a function

var test = function() {
  console.log('I am being tested');
}


// Invoke a function, chase()
chase();

// Declare a function, chase()
function chase() {
  console.log('Tom chases Jerry!');
  // Invoke a function, caught();
  caught();
}

// Declare a function, caught()
function caught() {
  console.log('Tom caught Jerry :(')
}


 */