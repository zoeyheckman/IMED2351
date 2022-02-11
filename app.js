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

const name = "Zoey";        //CONCATENATED STRING VARIABLE
const age = 23;
const hobby1 = "baking";
const hobby2 = "watching cartoons";
console.log(`Hello, it's me, ${name}, and I am ${age} years old. I enjoy ${hobby1} and also ${hobby2}.`);

if (time < 12){                       //CONDITIONAL STATEMENT
    greeting = "Top of the morning to you!";
} else if (time < 18){
    greeting = "Top of the day to you!";
} else {
    greeting = "Top of the evening to you!";
}

switch (new Date().getDay()) {    //SWITCH STATEMENT
    case 0:
        day = "Monday";
        text = "How was you're weekend?";
        break;
    case 1:
        day = "Tuesday";
        text = "How was you're weekend?";
        break;
    case 2:
        day = "Wednesday";
        text = "Halfway to the weekend. Woohoo!";
        break;
    case 3:
        day = "Thursday";
        text = "Almost weekend time.";
        break;
    case 4:
        day = "Friday";
        text = "Getting ready for the weekend?";
        break;
    case 5:
        day = "Saturday";
        text = "Having a nice weekend?";
        break;
    case 6:
        day = "Sunday";
        text = "Running out of weekend time.";
        break;
}

{
let string ="abcdefghijklmnopqrstuvwxyz";   //STRING SLICE
document.getElementById("demo").innerHTML =string.slice(2,11);
}

{
let x=new Date("1998-05-20");           //NUMBER METHOD
document.getElementById("demo").innerHTML = Number(x);
}