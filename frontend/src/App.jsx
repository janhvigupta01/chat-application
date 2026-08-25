import React from 'react'
import {Navigate,
Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import getCurrentUser from './customHooks/getCurrentUser'
import {useSelector} from 'react-redux'
import Home from './pages/Home'
const App = () => {
  getCurrentUser()
  let {userData}=useSelector(state=>state.user)
  return (
   <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/' element={userData?<Home/>:<Navigate to="/login"/>}/>
      <Route path='/profile' element={<SignUp/>}/>
   </Routes>
  )
}

export default App
