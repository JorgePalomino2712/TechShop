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
import ClientLayout from './layouts/ClientLayout'
import ClientHome from './pages/client/ClientHome'
import UserProfileLayout from './layouts/UserProfileLayout'
import ProfilePage from './pages/client/ProfilePage' 
import PedidosPage from './pages/client/PedidosPage' 
import FavoritosPage from './pages/client/FavoritosPage' 
import CardsC from './pages/client/CardsC'

export default function App() {
  return (
    <>
      {/* Rutas publicas */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path='/productos' element={<CardsP />} />
          <Route path='/category/:categoryName' element={<CradsFilter />} />
        </Route>

        {/* Rutas CLIENTE */}
        <Route element={<ProtecterRoute RolUser={"cliente"} />}>
          <Route path='/client' element={<ClientLayout />}>
            <Route path='home' element={<ClientHome />} />
            <Route path='products' element={<CardsC />} />
            <Route path='category/:categoryName' element={<CradsFilter />} />
            {/* <Route path='cart' element={<Cart />} /> */}
          </Route>

          <Route path='/client/profile' element={<UserProfileLayout />}>
            <Route index element={<ProfilePage />} />
            <Route path='pedidos' element={<PedidosPage />} />
            <Route path='favoritos' element={<FavoritosPage />} />
          </Route>
        </Route>


        {/* Rutas ADMIN */}
        <Route element={<ProtecterRoute RolUser={"admin"} />}>
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<HomeAdmin />} />
            <Route path='perfil' element={<PerfilAdmin />} />
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