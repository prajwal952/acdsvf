

console.log("connected");
let ranNum=parseInt(Math.random()*10+1);
console.log(`randomNumber created ${ranNum}`);

/* Taking all the values from HTML and values needed for operations*/

const userInput=document.querySelector('.ipt');
const submit=document.querySelector('.subbut');

let guessSlot=document.querySelector('.guesses');
let remainingGuess=document.querySelector('.lastResult');
const lowOrHig=document.querySelector('.lowOrHi');
const startOver =document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[];
let numberOfGuess=0;

let playGame=true;

if(playGame){
    console.log("entered playgame")
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value);
        console.log(guess)
        validititeGuess(guess)
    })
    console.log("end playgame")
}

function validititeGuess(guess){
    console.log("entered validititeGuess")
    if(isNaN(guess)){
        alert(`Plz enter a valid number ${guess}`)
    }else if(guess<1){
        alert("plz enter a number greated than 1")
    }else if(guess>100){
        alert("plz enter a number less than 100")
    }
    else{
        console.log('push number to prevGuess')
        prevGuess.push(guess)
        if(numberOfGuess===10){
            console.log('from inside if num of guess max to clenUpUI');
            clenUpUI(guess);
            console.log('from inside if num of guess max to displayMessage');
            displayMessage(`Game Over..! and the number is`);
            console.log('from inside if num of guess max to endgame');
            endGame();
        }else{
            console.log('from validate to cleanUI')
            clenUpUI(guess)
            console.log('from validate to checkguess')
            checkGuess(guess)
            
        }

        
    }
    console.log("end validititeGuess")
}

function checkGuess(guess){
    console.log("enter checkGuess")
    if(guess==ranNum){
        displayMessage(`you got it right its the correct guess`);
        endGame();
    }
    else if (guess>ranNum){
        displayMessage(`you are  number greater than the actual number`);
    }
    else if (guess<ranNum){
        displayMessage(`you are number lower than the actual number`);
    }
    console.log("end checkGuess")
}

function clenUpUI(guess){
    console.log("enter clenUpUI")
    userInput.value='';
    guessSlot.innerHTML=`${guess}`;
    numberOfGuess++;
    remainingGuess.innerHTML=`${10-numberOfGuess}`;
    console.log("end clenUpUI")
}

function displayMessage(message){
    console.log("enter displayMessage")
    lowOrHig.innerHTML=`<h2>${message}</h2>`;
    console.log("end displayMessage")
}

function endGame(){
    console.log("enter endGame")
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    console.log('in end game adding new game button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p);
    playGame=false;
    console.log("end endGame")
    newGame()
    
}

function newGame(){
    console.log("enter newGame")
    const newGameButton=document.querySelector('#newGame');
    console.log("inside newGame, newGameButton var alocation done ")
    newGameButton.addEventListener('click', function(e){
        console.log('inside the addlistner in newGame block')
        ranNum=parseInt(Math.random()*10+1);
        console.log('inside the addlistner in newGame block created a new ranNUmber')
        prevGuess = [];
        console.log('inside the addlistner in newGame block, prevGuess array set to empty')
        numberOfGuess = 0;
        console.log('inside the addlistner in newGame block, numberOfGuess changed to 1')
        guessSlot.innerHTML=''

        remainingGuess.innerHTML=`${10-numberOfGuess}`
        console.log('inside the addlistner in newGame block, remainingGuess changed to max - numberOfGuess')
       userInput.removeAttribute('disabled');
       console.log('remove attribute p done')
       startOver.removeChild(p);
       console.log('remove child p done')
       playGame=true;
       console.log('play game set to true')
    })
    
    console.log("end newGame")

}