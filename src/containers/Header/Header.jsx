import React from 'react'
import { Navbar } from '../../components/NavBar/Navbar'
import './Header.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <div>
        <header className='header'>
          
          <h1 className='header__title'>CARPEDIEM VET</h1>
          <Link to= '/home' ><img src={logo} alt="App Logo" className='header__logo'/></Link>

          
          <Navbar></Navbar>

        </header>


    </div>
  )
}