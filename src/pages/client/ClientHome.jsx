import React from 'react';
import { Link } from 'react-router-dom';
import CardsC from '../client/CardsC';

export default function ClientHome() {
  const userNombre = localStorage.getItem("nombre");

  return (
    <div className="min-h-screen font-inter">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Bienvenido, <span className="text-[#7CB342]">{userNombre}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                La mejor tecnología en un único lugar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/client/products"
                className="bg-[#7CB342] text-blue-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#8BC34A] transition-colors cursor-pointer text-center"
              >
                Continuar Comprando
              </Link>
              <Link 
                to="/client/profile/pedidos"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-blue-900 transition-colors cursor-pointer text-center"
              >
                Ver Mis Pedidos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Tus beneficios <span className="text-blue-600">exclusivos</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Envío Express</h3>
              <p className="text-gray-600">
                Recibe tus productos en 24-48 horas. Entregas rápidas y seguras.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Garantía Extendida</h3>
              <p className="text-gray-600">
                2 años de garantía en todos tus productos. Soporte técnico incluido.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Ofertas Exclusivas</h3>
              <p className="text-gray-600">
                Descuentos especiales solo para miembros registrados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Explora Nuestras <span className="text-blue-600">Categorías</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Celulares */}
            <Link 
              to="/client/category/celulares"
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer group block"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Celulares
              </h3>
              <p className="text-gray-600 text-sm">
                Los últimos modelos
              </p>
            </Link>
            
            {/* Computadoras */}
            <Link 
              to="/client/category/computadoras"
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer group block"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Computadoras
              </h3>
              <p className="text-gray-600 text-sm">
                Laptops y PCs
              </p>
            </Link>
            
            {/* Videojuegos */}
            <Link 
              to="/client/category/videojuegos"
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer group block"
            >
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <img 
                  src="https://www.svgrepo.com/show/480458/game-controller.svg" 
                  alt="Videojuegos" 
                  className="w-8 h-8 invert" 
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Videojuegos
              </h3>
              <p className="text-gray-600 text-sm">
                Consolas y juegos
              </p>
            </Link>
            
            {/* Audio */}
            <Link 
              to="/client/category/audio"
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer group block"
            >
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Audio
              </h3>
              <p className="text-gray-600 text-sm">
                Audífonos y bocinas
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Productos Destacados  */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Recomendados <span className="text-blue-600">para ti</span>
          </h2>
          <CardsC />
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Acciones <span className="text-blue-600">Rápidas</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/client/profile/favoritos"
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer group border-2 border-transparent hover:border-blue-500 block"
            >
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Mis Favoritos
              </h3>
              <p className="text-gray-600 text-sm">
                Revisa tus productos guardados
              </p>
            </Link>

            <Link 
              to="/client/profile/pedidos"
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer group border-2 border-transparent hover:border-green-500 block"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Mis Pedidos
              </h3>
              <p className="text-gray-600 text-sm">
                Consulta tu historial
              </p>
            </Link>

            <Link 
              to="/client/profile"
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer group border-2 border-transparent hover:border-purple-500 block"
            >
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Mi Perfil
              </h3>
              <p className="text-gray-600 text-sm">
                Gestiona tu cuenta
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}