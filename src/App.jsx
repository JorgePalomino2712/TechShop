import React from 'react'
import Login from "./pages/Login"
import Home from "./pages/Home"
import { Routes, Route, Navigate } from 'react-router-dom'
import CuentaNueva from './pages/CuentaNueva'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login></Login>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/crearCuenta' element={<CuentaNueva></CuentaNueva>} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}
