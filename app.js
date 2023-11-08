let times=Number(prompt('How many times u want to play?'))
const computerSelection = ()=>{
    return Math.floor((Math.random()*10)/3);
}

let keyvalue={
    0:"rock",
    1:"paper",
    2:"scissors"
}




function playRound(playerSelection, decsion) {
    if (playerSelection=='rock' || playerSelection=='paper' || playerSelection=='scissors' ) {
        if (playerSelection==decsion) {
            console.log(`Your Selection ${playerSelection}`)
            console.log(`CPU Selection ${decsion}`)
            console.log("Draw")
        }
        else if ((playerSelection=='rock' && decsion =='paper') || (playerSelection=='paper' && decsion=='scissors') || (playerSelection=='scissors' && decsion=='rock') ) {
            console.log(`Your Selection ${playerSelection}`)
            console.log(`CPU Selection ${decsion}`)
            console.log("Computer won")
        }
        else{
            console.log(`Your Selection ${playerSelection}`)
            console.log(`CPU Selection ${decsion}`)
            console.log("You won")
        }
    }
    else{
        console.log('Wrong input')
        return alert('Wrong input')
    }
    
  }
  
for (let i = 0; i < times; i++) {
    let playerSelection = prompt("Enter From Rock , Paper and Scissors").toLowerCase();
    let decsion=keyvalue[computerSelection()];
    playRound(playerSelection, decsion);

}


// console.log(decsion.charAt(0).toUpperCase()+ decsion.slice(1))