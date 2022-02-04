var life = 100;
var x = 1000;       //GLOBAL
    
{                     //BLOCK
    let x, y, z;
    x = 10;       
    y = 20;         
    z = x + y;       //mathematical
}

const food = {          //Object with properties
meat = "chicken",
broth:"vegetable",
starch:"rice",
fullTitle : function() {
    return this.meat + "and" + this.starch  
}
};
const name = "Dev Zoey;"

console.log("name");

function toLower(text){                  //function 1
   const lowerCased = text.toLowerCase();
    console.log(lowerCased);
}
toLower(name);


function adder(number1, number2){        //function 2
    console.log(number1+number2)
}

adder(23,65);

{
let string ="abcdefghijklmnopqrstuvwxyz";   //STRING SLICE
document.getElementById("demo").innerHTML =string.slice(2,11);
}