import React from 'react'
import { SocialsList } from '../../components/Socials/SocialsList'
import './Footer.css'

export const Footer = () => {
  return (
    <div>

        <footer className='footer'>

            <p className='footer_copy'>&copy; © 2026 Carpediem. Todos los derechos reservados. </p>

            <SocialsList></SocialsList>

        </footer>

        


    </div>
  )
}