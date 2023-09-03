import React from 'react'
import '../css/Game.css'
import { GAME_STATE_PLAYING,GAME_STATE_WINNER } from '../Helper/constant'


const Header = ({gameState,currentPlayer,winPlayer}) => {
   const renderLabel=()=>{
    switch(gameState){
        case GAME_STATE_PLAYING:
            return <div>player{currentPlayer} turn</div>;
         
        case GAME_STATE_WINNER:
           return <div>player{winPlayer} wins</div>
           
        default:
            // return <div>player{player} wins</div>
        }
       
            
    }


  return (
    <div className='pannel header'>
        <div className='header-text'>{renderLabel()}</div>
      
    </div>
  )
}

export default Header

