



/*
Let's play! You have to return which player won! In case of a draw return Draw!.
*/


//sol:
const rps = (player1, player2) => {
    if(player1 === 'rock')
    {
        if(player2 === 'rock')
        {
          return "draw!";
        }
       
    if(player2 === 'paper')
    {
      return "player 2 won";
    }
        if(player2 === 'scissors')
        {
      return "player 1 won";
       }
    }
    
   if(player1 === 'paper'){
        if(player2 === 'rock')
        {
          return "player 1 won";
        }  
     
    if(player2 === 'paper')
    {
      return "Draw!";
    }
     if(player2 === 'scissors')
     {
      return "player 2 won";
    }
 }    
  if(player1 === 'scissors'){
        if(player2 === 'rock')
        {
          return "player 2 won";
        }
   
      if(player2 === 'paper')
  {
      return "player 1 won";
    } 
     if(player2 === 'scissors')
        {
      return "Draw!";
    } 
    }
 };

 // Another sol:

 
const rpss = (p1, p2) => {
    if(p1 == p2){
      return "Draw!";
    }
  if (p1 == 'rock' && p2 == 'scissors')
    return 'player 1 won!'
    else if (p1 == 'scissors' && p2 == 'paper')
    return 'player 1 won!'
  else if (p1 == 'paper' && p2 == 'rock')
    return 'player 1 won!'
  else 
    return 'player 2 won';
};