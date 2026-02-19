import React from 'react'
import { useUserContext } from '../../context/UserContext/UseUserContext'
import './Home.css'
import { LoginModal, HomeCard } from '../../components'
import { PawPrint, User } from 'lucide-react'
import { HomeDashboard } from '../../containers'

export const Home = () => {
  const { user, isUserUndefined } = useUserContext()

  return (
    <div >


      {isUserUndefined() && <LoginModal></LoginModal>}

      {!isUserUndefined() &&




        <div className='home'>
          <h2 className='home__welcome'>!Bienvenido, {user.name}!</h2>

          <HomeDashboard></HomeDashboard>
          

          <div className="home__quick-links">
           
            <HomeCard label='Mis Mascotas' Icon={PawPrint} path='/mypets'></HomeCard>
            <HomeCard label='Mi Perfil' Icon={User} path={'/profile'} ></HomeCard>


          </div>


        </div>



      }


    </div>
  )
}