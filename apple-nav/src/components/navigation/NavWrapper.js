import React from 'react'

import Nav from './Nav'
import SubNav from './SubNav'
import { navItems, subNavItems } from '../../data/NavData'

const NavWrapper = () => {
  return (
    <div>
      {navItems.map(item => (
        <Nav navName={item}/>
      ))}
      <SubNav />
    </div>
  )
}

export default NavWrapper