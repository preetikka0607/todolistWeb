import './NavComp.css';
import todolistimg from '../../assets/todolistimg.png'
import React from 'react'

export const NavComp = () => {
  return (
    <div className='NavCompAlign'>
    <div className='NavComp'>
      <div className='navimg-wrapper'>
      <img src={todolistimg} alt='todolistimg'/>
      </div>
       <h3>To Do List...</h3>
    </div>
    </div>
  )
}
