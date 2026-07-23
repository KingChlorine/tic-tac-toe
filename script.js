const board = document.getElementById('game-board')
const squares = document.getElementsByClassName('squares')
const players = ['X', 'O']
let currentPlayer = players[0]
let gameOver = false;
const line246 = document.getElementById('line246')
const line048 = document.getElementById('line048')
const line258 = document.getElementById('line258')
const line147 = document.getElementById('line147')
const line036 = document.getElementById('line036')
const line678 = document.getElementById('line678')
const line345 = document.getElementById('line345')
const line012 = document.getElementById('line012')
const test0 = document.getElementById('test0')
const test1 = document.getElementById('test1')
const test2 = document.getElementById('test2')
const test3 = document.getElementById('test3')
const test4 = document.getElementById('test4')
const test5 = document.getElementById('test5')
const test6 = document.getElementById('test6')
const test7 = document.getElementById('test7')
const test8 = document.getElementById('test8')
const preview = document.getElementsByClassName('preview')

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


    squares[i].addEventListener('mouseover', () => {
        
        if(i === 0 && squares[0].textContent === "" && gameOver == false){
        test0.textContent = currentPlayer }
        if(i === 1 && squares[1].textContent === "" && gameOver == false){
        test1.textContent = currentPlayer }
        if(i === 2 && squares[2].textContent === "" && gameOver == false){
        test2.textContent = currentPlayer }
        if(i === 3 && squares[3].textContent === "" && gameOver == false){
        test3.textContent = currentPlayer }
        if(i === 4 && squares[4].textContent === "" && gameOver == false){
        test4.textContent = currentPlayer }
        if(i === 5 && squares[5].textContent === "" && gameOver == false){
        test5.textContent = currentPlayer }
        if(i === 6 && squares[6].textContent === "" && gameOver == false){
        test6.textContent = currentPlayer }
        if(i === 7 && squares[7].textContent === "" && gameOver == false){
        test7.textContent = currentPlayer }
        if(i === 8 && squares[8].textContent === "" && gameOver == false){
        test8.textContent = currentPlayer }
    
    
    })
    

    squares[i].addEventListener('mouseout', () => {
        if(i === 0){
        test0.textContent = "" }
        if(i === 1){
        test1.textContent = "" }
        if(i === 2){
        test2.textContent = "" }
        if(i === 3){
        test3.textContent = "" }
        if(i === 4){
        test4.textContent = "" }
        if(i === 5){
        test5.textContent = "" }
        if(i === 6){
        test6.textContent = "" }
        if(i === 7){
        test7.textContent = "" }
        if(i === 8){
        test8.textContent = "" }
    })

    squares[i].addEventListener('click', () => {
        if(gameOver) return;
       
        if(squares[i].textContent !== '')  {
           
            return 
        }
        
        squares[i].textContent = currentPlayer 

        if(checkWin(currentPlayer)) {
            message.textContent = `Game over! ${currentPlayer} wins!`
            gameOver = true
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
                if (i === 7)
                winLine246()
                if (i === 6)
                winLine048()
                if (i === 5)
                winLine258()
                if (i === 4)
                winLine147()
                if (i === 3)
                winLine036()
                if (i === 2)
                winLine678()
                if (i === 1)
                winLine345()
                if (i === 0)
                winLine012()
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
    gameOver = false
    for(let i = 0; i < squares.length; i++)
 {
    squares[i].textContent = ""
 }
    line246.style.visibility = "hidden"
    line048.style.visibility = "hidden"
    line258.style.visibility = "hidden"
    line147.style.visibility = "hidden"
    line036.style.visibility = "hidden"
    line678.style.visibility = "hidden"
    line345.style.visibility = "hidden"
    line012.style.visibility = "hidden"
    
    message.textContent= "X's turn"
    currentPlayer = players[0]
}



function winLine246() {
    line246.style.visibility= "visible"
}

function winLine048() {
    line048.style.visibility= "visible"
}

function winLine258() {
    line258.style.visibility= "visible"
}

function winLine147() {
    line147.style.visibility= "visible"
}

function winLine036() {
    line036.style.visibility= "visible"
}

function winLine678() {
    line678.style.visibility= "visible"
}

function winLine345() {
    line345.style.visibility= "visible"
}

function winLine012() {
    line012.style.visibility= "visible"
}

function hover() {
    squares[i].addEventListener('mouseover', () => {
       
        if(currentPlayer === players[0])  {
        squares[i].textContent ="no"
        }
        return
    })}