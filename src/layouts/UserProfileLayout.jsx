import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import ClientHeader from "../components/headers/ClientHeader";
import Footer from "../components/footers/Footer";

export default function UserProfileLayout() {
  const navigate = useNavigate();
  const userNombre = localStorage.getItem("nombre");

  function cerrarSesion() {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col font-inter">
      <ClientHeader />
      <div className="flex flex-1 bg-gray-50">
        {/* Aside */}
        <aside className="w-64 bg-white border-r border-gray-200 p-8">
          {/* Info usuario */}
          <div className="text-center mb-8">
            <img 
              src="/images/profile.png" 
              alt="Foto de perfil"
              className="w-42 h-42 rounded-full object-cover mx-auto mb-3"
            />
            <h2 className="font-semibold !text-[#1A237E]">{userNombre}</h2>
          </div>

          {/* Navegación */}
          <nav className="space-y-2">
            <Link 
              to="/client/profile" 
              className="block w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 font-medium"
            >
              Mi Perfil
            </Link>
            <Link 
              to="/client/profile/pedidos" 
              className="block w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 font-medium"
            >
              Mis Pedidos
            </Link>
            <Link 
              to="/client/profile/favoritos" 
              className="block w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 font-medium"
            >
              Favoritos
            </Link>
          </nav>

          {/* Cerrar sesión */}
          <button
            onClick={cerrarSesion}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 font-medium mt-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Cerrar Sesión</span>
          </button>
        </aside>

        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}