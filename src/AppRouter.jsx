import React from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Header, Footer } from './containers' 
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
                        <Route path='/home' element={''}></Route> {/* HOME*/}
                        <Route element={<PrivateGuard></PrivateGuard>}>


                            <Route path='/mypets' element={''}></Route> {/* MYPETS*/}
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