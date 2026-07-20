const board = document.getElementById('game-board')
const squares = document.getElementsByClassName('squares')
const players = ['X', 'O']
let currentPlayer = players[0]

const message = document.createElement('h2')
message.textContent = "X's turn"
message.style.fontSize = '2em'
message.style.textAlign = 'center'
board.after(message)

const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

for(let i = 0; i <squares.length; i++){
    squares[i].addEventListener('click', () => {
        if(squares[i].textContent !== '')  {
            
            return 
        }
        
        squares[i].textContent = currentPlayer 

        if(checkWin(currentPlayer)) {
            message.textContent = `Game over! ${currentPlayer} wins!`
            return 
        }
    
        if(checkTie()) {
            message.textContent = "It's a tie!"
            return
        }
    
    currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0] 

    if(currentPlayer === players[0]) {
        message.textContent = "X's turn"
    } else {
        message.textContent = "O's turn"
    }
    })
}

function checkWin(currentPlayer) {
    for(let i = 0; i < winCombinations.length; i++) {
        const [a, b, c] = winCombinations[i]
        if(squares[a].textContent === currentPlayer 
            && squares[b].textContent === currentPlayer
            && squares[c].textContent === currentPlayer) {
                return true
            }
    }
    return false
}

function checkTie() {
    for(let i = 0; i < squares.length; i++) {
        if (squares[i].textContent === '') {
            return false;
        }
    }
    return true
}

function restartGame() {
    for(let i = 0; i < squares.length; i++)
 {
    squares[i].textContent = ""
 }
    message.textContent= "X's turn"
    currentPlayer = players[0]
}