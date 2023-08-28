import React,{useState} from "react"
import GameCircle from "./GameCircle"
import '../css/Game.css'

const NO_PLAYER=0;
const PLAYER_1=1;
const PLAYER_2=2;

const GameBoard=()=>{

    const [gameBoard,setGameBoard]=useState(Array(16).fill(NO_PLAYER))
    const [currentPlayer,setCurrentPlayer]=useState(PLAYER_1)
    // console.log(gameBoard)
    const circleClick=(id)=>{
    gameBoard[id]=currentPlayer
    setGameBoard(gameBoard)
    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1)
    // console.log(gameBoard)
   
}
const renderCircle=id=>{
    console.log(`p_${gameBoard[id]}`)
   return <GameCircle id={id} className={`p_${gameBoard[id]}`} onCircleClick={circleClick}></GameCircle>
}
    
    return (
    
    <div className="gameBoard">
       {renderCircle(0)}
       {renderCircle(1)}
       {renderCircle(2)}
       {renderCircle(3)}
       {renderCircle(4)}
       {renderCircle(5)}
       {renderCircle(6)}
       {renderCircle(7)}
       {renderCircle(8)}
       {renderCircle(9)}
       {renderCircle(10)}
       {renderCircle(11)}
       {renderCircle(12)}
       {renderCircle(13)}
       {renderCircle(14)}
       {renderCircle(15)}
        
    </div>

    ) 
}

export default GameBoard


//<div className="gameBoard" style={style}>
//{/* <GameCircle id={0} className="p_1" onCircleClick={circleClick}> */}
       
    //    </GameCircle>
    //    <GameCircle id={1} className="p_2" onCircleClick={circleClick}>
       
    //    </GameCircle>
    //    <GameCircle id={2} onCircleClick={circleClick}>
       
    //    </GameCircle>
    //    <GameCircle id={3} onCircleClick={circleClick}>
       
    //    </GameCircle>
    //    <GameCircle id={4} onCircleClick={circleClick}>
       
    //    </GameCircle>
    //    <GameCircle id={5} onCircleClick={circleClick}> 
      
    //    </GameCircle>
    //    <GameCircle id={6} onCircleClick={circleClick}>
       
    //    </GameCircle>
    //    <GameCircle id={7} onCircleClick={circleClick}>
       
    //    </GameCircle>
    //    <GameCircle id={8} onCircleClick={circleClick}>
      
    //    </GameCircle>
    //    <GameCircle id={9} conCircleClick={circleClick}>
       
    //    </GameCircle>
    //    <GameCircle id={10} onCircleClick={circleClick}>
       
    //    </GameCircle>
    //    <GameCircle id={11} onCircleClick={circleClick}>
       
    //    </GameCircle>
    //    <GameCircle id={12} onCircleClick={circleClick}>
      
    //    </GameCircle>
    //    <GameCircle id={13} onCircleClick={circleClick}>
       
    //    </GameCircle>
    //    <GameCircle id={14} onCircleClick={circleClick}>
       
    //    </GameCircle>
    //    <GameCircle id={15} onCircleClick={circleClick}>
       
    //    </GameCircle>