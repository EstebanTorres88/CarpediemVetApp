import React from 'react'
import instagramLogo from '../../assets/insta.png'
import XLogo from '../../assets/twitter.png'
import facebookLogo from '../../assets/facebook.png'
import './SocialsList.css'


const SOCIALS_LIST = [
    { id: 'instagram', logo: instagramLogo , href : 'https://www.instagram.com/carpediem_veterinaria?igsh=MXQybWlveXk3dG5wag==' },
    { id: 'facebook', logo: facebookLogo, href: 'https://www.facebook.com/share/17vo7mdT3T/?mibextid=wwXIfr'},
    { id: 'x', logo:  XLogo , href: 'https://x.com/Carpediemv16504'  },
]

export const SocialsList = () => {



    return (
        <div>
            <ul className='socials-list'>
                {SOCIALS_LIST.map((social) => (
                    <li key={social.id}> <a  href={social.href} target='_blank'> <img className='social-list__logo' src={social.logo} alt="social" /> </a></li>
                ))}


            </ul>


        </div>
    )
}