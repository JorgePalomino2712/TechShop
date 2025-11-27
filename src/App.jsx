import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from "./pages/Login"
import CuentaNueva from './pages/CuentaNueva'
import MainLayout from './layouts/MainLayout'
import Landing from './pages/public/Landing'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Landing />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/crearCuenta" element={<CuentaNueva />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}