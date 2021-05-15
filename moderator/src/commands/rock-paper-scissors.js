const rockPaperScissors = (x) => {
  let arr = ['rock', 'paper', 'scissors']
  if (x !== 'rock' && x !== 'paper' && x !== 'scissors')
    return 'Unexpected choose'
  let rnd = Math.floor(Math.random() * 3)
  switch (x) {
    case 'rock':
      if (arr[rnd] === 'rock') return 'ROCK: Draw'
      else if (arr[rnd] === 'paper') return 'PAPER: Computer win'
      else return 'SCISSORS: you win'
    case 'paper':
      if (arr[rnd] === 'paper') return 'PAPER: Draw'
      else if (arr[rnd] === 'scissors') return 'SCISSORS: Computer win'
      else return 'ROCK: you win'
    case 'scissors':
      if (arr[rnd] === 'scissors') return 'SCISSORS: Draw'
      else if (arr[rnd] === 'rock') return 'ROCK: Computer win'
      else return 'PAPER: you win'
  }
}
export { rockPaperScissors }
