import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { RegisterPage } from '../pages/Register';
import { DashBoard } from '../pages/DashBoard';
import { useEffect, useState } from 'react';
export function RouterMain(){
    
    
    //  useEffect(()=>{
     
    //  },[token])
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/dashboard' element={<DashBoard/>}/>
        </Routes>

    )

}