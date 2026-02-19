import React from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Header, Footer, Home, MyPets } from './containers' 
 {/*AQUI SE IMPORTAN LOS CONTAINERS*/}
import { PrivateGuard} from './guard/PrivatGuard'


export const AppRouter = () => {
    return (
        <BrowserRouter>

            <div className="app-container">
                {<Header></Header>}

                <div className="main-container">
                    <Routes>
                        <Route path='/' element={<Navigate to='/home' />}></Route>
                        <Route element={<PrivateGuard></PrivateGuard>}>

                            <Route path='/home' element={<Home></Home>}></Route>
                            <Route path='/mypets' element={<MyPets></MyPets>}></Route> 
                            <Route path='/profile' element={''}></Route> {/* CLIENT PROFILE*/}
                            <Route path='/mypets/:petName' element={''}></Route> {/* PET PROFILE*/}
                            <Route path='/*' element={<Navigate to='/'></Navigate>}></Route>


                        </Route>


                    </Routes>
                  

                </div>



              {<Footer></Footer>}

            </div>




        </BrowserRouter>
    )
}