var life = 100;
var x = 1000;       //GLOBAL
    
{                     //BLOCK
    let x, y, z;
    x = 10;       
    y = 20;         
    z = x + y;       //mathematical
}
{
const food = {          //Object with properties
meat = "chicken",
broth:"vegetable",
starch:"rice",
fullTitle : function() {
    return this.meat + "and" + this.starch  
}
};
}
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

if (hour < 12){                       //CONDITIONAL STATEMENT
    greeting = "Top of the morning to you!";
} else if (hour < 18){
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
//5.4 Assignment
{                         
const foods = ["soup", "bread", "wraps", "salads", "pasta"];    //FOR LOOP

for (food of foods){          
    if (food ==='soup'){
    console.log("I really like soup");
    break;
}
}
}

let loading = 0;            //WHILE LOOP
while(loading <100){
    console.log('Website is still loading');
    loading ++;
}
{
const text = document.querySelector(".title");
const changeColor = document.querySelector('.changeColor') //CHANGE CSS

text.classList.add("change")

changeColor.addEventListener('click', function(){
    text.classList.add("change");
})

const userList = document.querySelector(".allies-list li");
const listInput = document.querySelector(".allies-input");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener('click', function(){
    const newLi = document.createElement('Li');
    const liContent= document.createTextNode(listInput.value);
    newLi.appendChild(liContent);
    userList.appendChild(newLi);
});
}
//functions
     function mDown(obj) {
    obj.style.backgroundColor = "black";
    obj.style.color ="white";
    obj.innerHTML = "BOO!";
  }
  function mUp(obj) {
    obj.style.backgroundColor="greenyellow";
    obj.innerHTML="You're Cool!";
  }
{
    const addListBtn = document.getElementById(".myBtn");
    addListBtn.addEventListener("mousedown", function mDown() {
  })
  addListBtn.addEventListener("mouseup", function mUp() {
  })
}

