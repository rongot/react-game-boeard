export const isWinner=(gameBoard,currentMove,currentPlayer)=>{
    let board=[...gameBoard]
    board[currentMove]=currentPlayer
const winLines=[
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15],
    [0,4,8,12],
    [1,5,9,13],
    [2,6,10,14],
    [3,7,11,15],
    [0,5,10,15],
    [3,6,9,12]
    
];
for(let i=0;i<winLines.length;i++){
    const[c1,c2,c3,c4]=winLines[i]
    if(board[c1] >0 &&
        board[c1] ===  board[c2] &&
        board[c2] ===  board[c3] &&
        board[c3] ===  board[c4]
        ){
            return true
        }
    }
        return false
 }
 export const isDraw=(gameBoard,currentMove,currentPlayer)=>{
    let board=[...gameBoard]
    board[currentMove]=currentPlayer
    let count=board.reduce((n,x) => n +(x ===0),0 )
    console.log(`count = ${count}`)
    return count === 0;

 }

 const getRandomComputerMove=(gameBoard)=>{
    let valideMoves=[];
    for (let index = 0; index < gameBoard.length; index++) {
        if(gameBoard[index] === 0){
            valideMoves.push(index)
        }
    }
    let randMove=Math.floor(Math.random() * valideMoves.length)
    console.log("randMove = "+randMove)
    return valideMoves[randMove]
 }

 const getPosition=(gameBoard,movechecks)=>{
    for (let check = 0; check < movechecks.length; check++) {
        for (let index = 0; index < movechecks[check].max; index+=movechecks[check].step) {
            let series=gameBoard[index + movechecks[check].indexes[0].toString()] +
                       gameBoard[index + movechecks[check].indexes[1].toString()] +
                       gameBoard[index + movechecks[check].indexes[2].toString()] +
                       gameBoard[index + movechecks[check].indexes[3].toString()]

            switch(series){
                case "1110":
                case "2220":
                    return index+movechecks[check].indexes[3]
                case "1101":
                case "2202":
                    return index+movechecks[check].indexes[2]
                case "1011":
                case "2022":
                    return index+movechecks[check].indexes[1]
                case "0111":
                case "0222":
                     return index+movechecks[check].indexes[0]
                default:
            }
        
        
    }
    
}
return -1
 }

 export const getComputerMove=(gameBoard)=>{
 let movechecks=[{
    // vertical
    indexes:[0,4,8,12],
    max:4,
    step:1

 },
 {
    // horizontal
    indexes:[1,2,3,4],
    max:16,
    step:4

 },
 //diagonal
 {
    // horizontal
    indexes:[0,5,10,16],
    max:16,
    step:16

 },
 {
    // horizontal
    indexes:[3,6,9,12],
    max:16,
    step:16

 }

]
let position=getPosition(gameBoard,movechecks)
if(position > -1)return position
return getRandomComputerMove(gameBoard)
 } 