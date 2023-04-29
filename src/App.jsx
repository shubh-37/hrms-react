import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import CreateEmp from './pages/CreateEmp';
import CreateOrg from './pages/CreateOrg';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';

function App() {


  return (
   <React.Fragment>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/createEmp' element={<CreateEmp />} />
        <Route path='/createOrg' element={<CreateOrg />} />
        <Route path='/signUp' element ={<SignUp />} />
      </Routes>
   </React.Fragment>
  )
}

export default App
