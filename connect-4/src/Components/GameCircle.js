import React from 'react'
import '../css/Game.css'


//const GameCircle = (props) => use destructing
const GameCircle = ({id,children,onCircleClick,className}) => {
    
    // const onClick=(id)=>{
    //     onCircleClick(id);
    // }
  
//    children any thing from begging of tag and
// state = reprersention of the component in certain time
// hook = function available in react allows us to tap

  return (
    //<div className="gameCircle" style={style} onClick={()=>onClick(id)}>
    //style={id % 2===0 ?{backgroundColor:'red'}:{backgroundColor:'blue'}}
    //<div className={`gameCircle p_0 ${id % 2 === 0 ? "odd" : "even"}`}  onClick={()=>onCircleClick(id)}>
    <div className={`gameCircle ${className} `}  onClick={()=>onCircleClick(id)}>
        
      {/* GameCircle-id:{id} */}
      
      {children}
    </div>
  )
}

export default GameCircle
