/* // Give the option to play again
const minNumber=2;
const maxNumber=10;
function startSecretNumberGame(){
    const secrectNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

    let attempts = 0;
    let guess=null;
    console.log("Welcome to the number Guessing Game!");
    console.log("Try to guess a number between 2 to 10");

    while(guess!== secrectNumber){
        const guessPrompt= prompt("Enter your guess: ");
        guess= parseInt(guessPrompt);

        if(isNaN(guess) || guess<minNumber || guess>maxNumber){
            console.log(`Invalid Input Number! Please enter a number between${minNumber} to ${maxNumber}`);
            continue;
        }
        attempts++;

        if( secrectNumber<guess){
            console.log(" too high! Try again") ;
        } else if( secrectNumber>guess){
            console.log("too low! Try again");
        }else {
            console.log(`Congratulation you guess the right number in ${attempts} attempts`);
            break;
        }
    }
    const playAgainPrompt= prompt("Do you want to play the game again? (yes/no)");
    console.log(playAgainPrompt);
    const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

    if(playAgain=== "yes"){
        startSecretNumberGame();
    }else{
        console.log("Thanks for playin! see you next time.");
    }
}
startSecretNumberGame();

 */
const miniNumber=1;
const maxNumber=10;
function startSecretNumberGame(){
    const secrectNumber=Math.floor(Math.random()*maxNumber)+1;
    let attempts=0;
    let guess=null;
    console.log("welcome to number gussing game");
    console.log("guess the number between 1 to 10");
    while(guess!==secrectNumber){
        const guessPrompt=prompt("Enter your guess: ");
        guess= parseInt(guessPrompt);

        if(isNaN(guess)|| guess<miniNumber || guess>maxNumber){
            console.log(`Invalid number, you have guess a number between ${miniNumber} to ${maxNumber}`);
            continue;
        }

        attempts++;

        if(guess>secrectNumber){
            console.log("you are too high.");
        } else if( guess<secrectNumber){
            console.log("you are too slow");
        } else {
            console.log(`Congratulation you guess the right number ${guess} on ${attempts} time attempts`);
        }
    }

    const playAgainPrompt= prompt("Do you want to play the gaime again (yes/no)?");
    const playAgain= playAgainPrompt? playAgainPrompt.toLowerCase(): "no";
    if(playAgain==="yes"){
        startSecretNumberGame();
    } else {
        console.log("Thank you for playing game, see you letter.");
    }
}

startSecretNumberGame();