import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from "./pages/Login"
import CuentaNueva from './pages/CuentaNueva'
import MainLayout from './layouts/MainLayout'
import Landing from './pages/public/Landing'
import CardsP from './pages/public/CardsP'
import CradsFilter from './pages/public/CradsFilter'
import AdminLayout from './layouts/AdminLayout'
import HomeAdmin from './pages/admin/HomeAdmin'
import PerfilAdmin from './pages/admin/PerfilAdmin'
import ProtecterRoute from './components/ProtecterRoute'
import EditarPerfil from './pages/admin/EditarPerfil'
import Usuarios from "./pages/admin/Usuarios"
import OrdenesAdmin from "./pages/admin/OrdenesAdmin"
import Productos from "./pages/admin/Productos"


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path='/productos' element={<CardsP />} />
          <Route path='/category/:categoryName' element={<CradsFilter />} />
        </Route>
        <Route element={<ProtecterRoute RolUser={"admin"} />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<HomeAdmin />} />
            <Route path="perfil/:id" element={<PerfilAdmin />}>
              <Route index element={<EditarPerfil />} />
              <Route path="usuarios" element={<Usuarios />} />

              <Route path="ordenes" element={<OrdenesAdmin />} />
              <Route path="productos" element={<Productos />} />
            </Route>
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/crearCuenta" element={<CuentaNueva />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}