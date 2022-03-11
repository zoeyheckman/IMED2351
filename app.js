// 7 Assignment
const game =()=>{
    let pScore = 0;
    let cScore =0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('match');

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    const playMatch = () => {
        const options = document.querySelectAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand'); 
        const hands = document.querySelectorAll('.hands img');
        hands.forEach(hand => {
            hand.sddEventListener ('animationend', function(){
                this.style.animation = "";
            });
        });
        const computerOptions =['rock', 'paper', 'scissors'];
        options.forEach (option => {
            option.addEventListener('click', function(){
                const computerNumber = Math.floor(Math.random) * 3;
                const computerChoice = computerOptions[computerNumber];
                
               setTimeout(() => { 
                   compareHands(this.textContent, computerChoice);

                playerHand.src =`./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
               }, 2000);

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };
    const updateScore = ()=>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
    const compareHands = (playerChoice, computerChoice) =>{
        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie!';
        }
        if(playerChoice ==='rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice ==='paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice ==='scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
    }
    
    
};

//game();
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

//6.4 Assignment

const dessert = { //OBJECT
    firstName:"Lemon Meringue",
    lastName:"Pie",
    id:014,
    fullName:function() {
        return this.firstName +" "+this.lastName;
    }
};

console.log( dessert.fullName +"is my favorite" +dessert.lastName)

  dessert.name = dessert.fullName;          //OBJECT METHOD
  dessert.name  =function(){
      return(this.firstName + " "+ this.lastName).toUpperCase();  }
                               
const meals = ["For One", "For Two", "For Family", "For Potluck"]; //ARRAY
document.getElementById("demo").innerHTML = meals.join("*");      //ARRAY METHOD




