////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var playerMove;
    if (move === true){
        playerMove = move;
    }
    else{
        playerMove = getInput();}
    return playerMove;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var computerMove;
    if (move === true){
        computerMove = move;
    }
    else{
        computerMove = randomPlay();
    return computerMove;}
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove){
            winner = 'tie';
            console.log("You and the Computer tied! Please choose again.")}
    else{
        if (playerMove === 'rock'){
            if (computerMove === 'scissors'){
                winner = 'player'}
            if (computerMove === 'paper'){
                winner = 'computer'}
        if (playerMove === 'paper'){
            if (computerMove === 'scissors'){
                winner = 'computer'}
            if (computerMove === 'rock'){
                winner = 'player'}
        if (playerMove === 'scissors'){
            if (computerMove === 'rock'){
                winner = 'computer'}
            if (computerMove === 'paper'){
                winner = 'player'}
            }
        return winner;
}

function playToFive(winner) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.

    if (winner === 'player'){
        playerWins++;}
    if (winner === 'computer'){
        computerWins++;}
        
    if (playerWins === 5);{
        console.log("You win! Game over.");}
    if (computerWins === 5);{
        console.log("The computer wins :( Game over.");}
    
    return [playerWins, computerWins];
}

