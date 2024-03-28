import React from 'react';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import{ BrowserRouter,Routes,Route } from 'react-router-dom';

function LoginSignUpRoutes() {
  return (
    <div className='h-screen min-h-full flex items-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage />} />
            </Routes>
            </BrowserRouter>
        </div>
      
    </div>
  )
}

export default LoginSignUpRoutes
