let randomNum=parseInt(Math.random()*100+1)

const submitBtn=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
//console.log(guessField);
const guessSlot=document.querySelector('.guesses')
const ramaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')
//console.log(lastResut);

const p=document.createElement('p')
// console.log(p);



let prevGuess=[]
let remainNumGuess=1
let playGame=true
// first check user available to play game
if(playGame){
    submitBtn.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
          //console.log(guess);
          validateGuess(guess)
    })
}

function validateGuess(guess){
 if(isNaN(guess)){
alert(`pls enter a valid number`)
 }else if (guess<1) {
    alert(`pls enter a number greater than 0`)
 } else if(guess>100){
    alert(`pls enter a number greater than 100`)
 }else{
    prevGuess.push(guess)  // to push numb into array 
    if(remainNumGuess===11){
      displayGuess(guess)
      displayMessage(`Game Over .random no was ${randomNum}`)
   endGame()
   }else{  //abi numb eleven k equal nahi hy t
      displayGuess(guess)  
      checkGuess(guess) //guess sahi hy k nhi
   }
 }

}
function checkGuess(guess){
   // if random num === to your guess then game over
 if(guess===randomNum){
   displayMessage(`you guesses it right `)
   endGame()
   }else if(guess < randomNum){
      displayMessage(`Number is too low`)
   }else if(guess > randomNum){
      displayMessage(`Number is too High`)
   }}

function displayGuess(guess){
     userInput.value=''    //to empty input
    
      guessSlot.innerHTML+= `${guess}, `
      remainNumGuess++
      ramaining.innerHTML =`${11-remainNumGuess}`
}

function displayMessage(message){
   lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endGame(){
userInput.value=''
userInput.setAttribute('disabled', '')
//now below we add classList with button due to above variable of alredy paragraph p
p.classList.add('button')  
p.innerHTML=`<h2 id='newGame'>start new Game</h2>`
startOver.appendChild(p)
playGame=false
newGame()
}
function newGame(){
const newGamebtn=document.querySelector('#newGame')
newGamebtn.addEventListener('click', function(e){
   randomNum=parseInt(Math.random()*100+1)
   prevGuess=[]
   remainNumGuess=1
   guessSlot.innerHTML=''
   ramaining.innerHTML =`${11-remainNumGuess}`
   userInput.removeAttribute('disabled')
   startOver.removeChild(p)
   playGame=true

})
}