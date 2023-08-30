import React from 'react'
import '../css/Game.css'


const Header = (props) => {
    console.log(props)
  return (
    <div className='pannel header'>
        <div className='header-text'>player {props.player} Turn</div>
      
    </div>
  )
}

export default Header

