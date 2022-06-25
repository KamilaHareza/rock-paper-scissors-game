//Get the user’s choice
const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput
  } else {
    console.log('Error!');
  }
};

//Get the computer’s choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
};
//Compare the two choices and determine a winner 
const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'The game is a tie!'
  };
  
  if(userChoice === 'bomb'){
    return 'User won by cheating!'
  }
  
  if(userChoice === 'paper'){
    if(computerChoice === 'rock'){
      return 'You won!'
    } else {
      return 'The computer won!'
    };
  };

  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'The computer won!'
    } else {
      return 'You won!'
    };
  };

  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'The computer won!'
    } else {
      return 'You won!'
    };
  };
};

//Start the program and display the results
const playGame = () =>{
//Place for user's choice:
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice(); 
  console.log(`You threw: ${userChoice}.`);
  console.log(`The computer threw: ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();