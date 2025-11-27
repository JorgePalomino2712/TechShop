import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from "./pages/Login"
import CuentaNueva from './pages/CuentaNueva'
import MainLayout from './layouts/MainLayout'
import Landing from './pages/public/Landing'
import CardsP from './pages/public/CardsP'
import CradsFilter from './pages/public/CradsFilter'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path='/productos' element={<CardsP />} />
          <Route path='/category/:categoryName' element={<CradsFilter />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/crearCuenta" element={<CuentaNueva />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}