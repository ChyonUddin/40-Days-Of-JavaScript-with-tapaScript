/**
 * Let us play a number guessing game.
 * You will ask user for a number between 1 to 10. Once user will enter a number, you will tell user if the entered number is lower or higher. With this information, user will change the number and finally guess the right number. You also need to show the number of attempts made by users to rach to this right guess.
 */

// max number
// min number

// secret number is a random number between the min and max

// get the prommpt from the user as a guess

// Create a variable to store the number of attempts

// Write the logic to check if the guess and the secret number are same. If not continue a loop to ask again.

// Inside loop check if the guess is less than the secret or greater than, accordingly tell if the guess it low or high




// Give the option to play again

/* const MIN_NUMBER = 1;
const MAX_NUMBER = 10;

function startSecretNumberGame() {
    const secretNumber = Math.floor(Math.random() * MAX_NUMBER) + 1;
    let attempts = 0;
    let guess = null;

    console.log("Welcome to the Number Guessing Game!");
    console.log("Try to guess a number between 1 and 10.");

    while (guess !== secretNumber) {
        const guessPrompt = prompt("Enter your guess: ");
        guess = parseInt(guessPrompt);

        if (isNaN(guess) || guess < MIN_NUMBER || guess > MAX_NUMBER) {
            console.log(`Invalid input! Please enter a number between ${MIN_NUMBER} and ${MAX_NUMBER}.`);
            continue;
        }

        attempts++;

        if (guess < secretNumber) {
            console.log("Too Low! Try again.");
        } else if (guess > secretNumber) {
            console.log("Too High! Try again.");
        } else {
            console.log(`🎉 Congrats! You guessed the number in ${attempts} attempts.`);
            break;
        }
    }

    const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
    console.log(playAgainPrompt);
    const playAgain = playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() : "no";
    if (playAgain === "yes") {
        startSecretNumberGame();
    } else {
        console.log("Thanks for playing! See you next time.");
    }
}

// Start the game
startSecretNumberGame(); */





//* The Rock 🪨, Paper 🧻, or Scissors ✂️ Game


/**
 
 * This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors and in the next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 */

// Assumptions:
// 1. We have to prompt the user to get their inputs.
// 2. The Computer's selection will be random.
// 3. We have to compare user and computer's choice
// 4. We need to announce the winner.
// 5. After the Winner announcement, we may want to ask the user to play again or quit from the game.

/* function rockPaperScissorsGame() {
    console.log("Getting Started With the Rock 🪨, Paper 🧻, or Scissors ✂️ Game");
    const userChoicePrompt = prompt("Enter Rock 🪨, Paper 🧻, or Scissors ✂️");
    const userChoice = userChoicePrompt.toLowerCase();

    let computerChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    console.log("User selected", userChoice);
    console.log("Computer selected", computerChoice);

    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You the User WIN, yay!!!!");
    } else if ( userChoice === computerChoice) {
        console.log("The Game is a Tie");
    } else if(
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "rock")
    ) {
        console.log("Oh Ho... Computer Wins!!!!");
    } else {
        console.log("Please check the input, We didn't understand it.")
    }

    const playAgainPrompt = prompt("Do You Want to Play Again? (yes/no)")
    const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

    if (playAgain === "yes") {
        rockPaperScissorsGame();
    } else {
        console.log("Thanks for Playing! See you Next Time")
    }
}

// Start This Game
rockPaperScissorsGame(); */