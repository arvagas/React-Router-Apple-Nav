import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'
import { navItems } from '../../data/NavData'

const NavWrapper = () => {
  return (
    <div className='nav-wrapper'>
      {navItems.map(item => (
        <NavLink><Nav key={item.name} navName={item.name} activeClassName='active-tab'/></NavLink>
      ))}
    </div>
  )
}

export default NavWrapper