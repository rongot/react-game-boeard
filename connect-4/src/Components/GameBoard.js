import React,{useState} from "react"
import GameCircle from "./GameCircle"
import '../css/Game.css'
import Header from "./Header";
import Footer from "./Footer";
import { isWinner } from "../Helper/helper";

const NUMBER_OF_CIRCLE=16;
const NO_PLAYER=0;
const PLAYER_1=1;
const PLAYER_2=2;

const GameBoard=()=>{

    const [gameBoard,setGameBoard]=useState([Array(16).fill(NO_PLAYER)])
    const [currentPlayer,setCurrentPlayer]=useState(PLAYER_1)
    // console.log(gameBoard)

    // const initBoard=()=>{
        
    //     setCurrentPlayer(PLAYER_1)
    //     setGameBoard(Array(16).fill(NO_PLAYER))
    //     initCircle()
        
        
    // }

    const initCircle=()=>{
        const circle=[]
        for(let i=0;i<NUMBER_OF_CIRCLE;i++){
            circle.push(renderCircle(i))
        }
        return circle
    }

    const circleClick=(id)=>{
    gameBoard[id]=currentPlayer
    // const board=[...GameBoard]
    // board[id]=currentPlayer;
    // setGameBoard(board)
    // setGameBoard(gameBoard)
    console.log("gameBoard "+gameBoard)
    console.log("id "+id)
    console.log("currentPlayer "+currentPlayer)
    if (isWinner(gameBoard,id,currentPlayer)){
        alert("winner")
    }
    setGameBoard(prev => {
        // debugger;
        return prev.map((circle,pos)=>{
            if(pos === id) return currentPlayer
            return circle

            
        })
    })
    if (isWinner(gameBoard)){
        alert("winner")
    }
    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1)
    // console.log("currentPlayer "+currentPlayer)
   
}
const renderCircle=id=>{
    return <GameCircle key={id} id={id} className={`p_${gameBoard[id]}`} onCircleClick={circleClick}></GameCircle>
}
    
    return (
    <>
        <Header player={currentPlayer}/>,
        <div className="gameBoard">
        {initCircle()}
        </div>
       <Footer/>
    </>

    ) 
}

export default GameBoard


//<div className="gameBoard" style={style}>
//{/* <GameCircle id={0} className="p_1" onCircleClick={circleClick}> */}

// {renderCircle(0)}
//        {renderCircle(1)}
//        {renderCircle(2)}
//        {renderCircle(3)}
//        {renderCircle(4)}
//        {renderCircle(5)}
//        {renderCircle(6)}
//        {renderCircle(7)}
//        {renderCircle(8)}
//        {renderCircle(9)}
//        {renderCircle(10)}
//        {renderCircle(11)}
//        {renderCircle(12)}
//        {renderCircle(13)}
//        {renderCircle(14)}
//        {renderCircle(15)}
       
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