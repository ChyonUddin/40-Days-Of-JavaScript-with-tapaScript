
function query(endpoint, callback, options) {
    fetch(`http://localhost:3000/${endpoint}`, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            setTimeout(() => {
                callback(json)
            }, 2000);
        });
}
function getPromise(URL) {
    return fetch(URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }
            return response.json();
        });
}

/* function orderpizza (type, name) {
    
    query(`api/pizzahub/`, function(result,error) {
        if(!error){
            let shopId = result[0];
            console.log(shopId);
        }
    })
}
orderpizza("veg") */


function orderpizza (type, name) {
    
    query(`api/pizzahub/`, function(result,error) {
        if(!error){
            let shopId = result[0];
            console.log(shopId);
        
        
             query(`api/pizzahub/pizzas/${shopId}`, function (result, error){
                 if(!error){
                     let pizzas = result;
                     console.log({pizzas});

                     let myPizza = pizzas.find((pizza)=>{
                     //console.log(pizza.name);
                     return pizza.type === type && pizza.name === name 
                 })
                     console.log({myPizza});

               // Check for the free beverages

                    query(`api/pizzahub/beverages/${myPizza.id}`, function (result, error){
                     if(!error){
                   let beverages = result[0];
                   console.log({beverages})
               }

                // Prepare an order
                query(``)

                       })
                 }
            })
         
        }

    })


}
// orderpizza("veg","Margherita" )



/*
 function query(endpoint, options) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(`http://localhost:3000/${endpoint}`, options)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error ${response.status}`);
                    }
                    return response.json();
                })
                .then(resolve)
                .catch(reject);
        }, 2000);
    });
}
 */
/* 
    function query(endpoint,options){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
           fetch(`http://localhost:3000/${endpoint}`,options)
           .then((response)=>{
                if(!response.ok){
                    throw new Error(`HTTP Error ${response.status}`);
                }
                    return response.json();
            })
                    .then(resolve)
                    .catch(reject);
            },2000);
        });
    }

*/