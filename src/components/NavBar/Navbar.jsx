import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { List, X } from 'lucide-react'
const navLinks = [
  { id: 'home', label: 'HOME', path: '/home' },
  { id: 'pets', label: 'MY PETS', path: '/mypets' },
  { id: 'profile', label: 'MY PROFILE', path: '/profile' },
]


export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () =>{
    setIsOpen(!isOpen)


  }
  return (
    <div>
      <List width={30} height={30} className='icon icon-menu' onClick={toggleMenu} />

      <nav className= {`nav ${isOpen ? 'visible' : 'hidden'}`}>
        <X width={30} height={30} className='icon icon-close' onClick={toggleMenu}  />
        <ul className='nav_list'>
          {navLinks.map((link) => (
            <li key={link.id} className='nav_item'> <NavLink to={link.path} className='nav-link'> {link.label}</NavLink></li>
          ))}
        </ul>

      </nav>


    </div>
  )
}