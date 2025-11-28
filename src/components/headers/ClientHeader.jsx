import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ClientHeader() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesDropdown, setCategoriesDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const userNombre = localStorage.getItem("nombre");

  function cerrarSesion() {
    localStorage.clear();  
    navigate('/');
  };

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 font-inter">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <img
            src="/images/logo.png"
            alt="TechShop Logo"
            className="h-12 cursor-pointer"
            onClick={() => navigate('/client/home')}
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigate('/client/home')} 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
            >
              Inicio
            </button>

            {/* Dropdown Categorías */}
            <div className="relative">
              <button
                onClick={() => setCategoriesDropdown(!categoriesDropdown)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center cursor-pointer"
              >
                Categorías
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {categoriesDropdown && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-2xl py-3">
                  <button
                    onClick={() => {
                      navigate('/client/category/celulares');
                      setCategoriesDropdown(false);
                    }}
                    className="w-full text-left px-5 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium cursor-pointer"
                  >
                    Celulares
                  </button>

                  <div className="mx-5 border-t border-gray-100"></div>

                  <button
                    onClick={() => {
                      navigate('/client/category/computadoras');
                      setCategoriesDropdown(false);
                    }}
                    className="w-full text-left px-5 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium cursor-pointer"
                  >
                    Computadoras
                  </button>

                  <div className="mx-5 border-t border-gray-100"></div>

                  <button
                    onClick={() => {
                      navigate('/client/category/videojuegos');
                      setCategoriesDropdown(false);
                    }}
                    className="w-full text-left px-5 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium cursor-pointer"
                  >
                    Videojuegos
                  </button>

                  <div className="mx-5 border-t border-gray-100"></div>

                  <button
                    onClick={() => {
                      navigate('/client/category/audio');
                      setCategoriesDropdown(false);
                    }}
                    className="w-full text-left px-5 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium cursor-pointer"
                  >
                    Audio
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={() => navigate('/client/products')} 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
            >
              Productos
            </button>
          </nav>

          {/* User */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Favoritos */}
            <button 
              onClick={() => navigate('/client/favoritos')}
              className="relative p-2 text-gray-700 hover:text-red-500 transition-colors cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            {/* Carrito */}
            <button 
              onClick={() => navigate('/client/cart')}
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Perfil Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setProfileDropdown(!profileDropdown)}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium">Hola, {userNombre}</span>
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {profileDropdown && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl py-3">
                  <button
                    onClick={() => {
                      navigate('/client/profile');
                      setProfileDropdown(false);
                    }}
                    className="w-full text-left px-5 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium cursor-pointer"
                  >
                    Ver Perfil
                  </button>

                  <div className="mx-5 border-t border-gray-100"></div>

                  <button
                    onClick={cerrarSesion}
                    className="w-full text-left px-5 py-3 text-red-600 hover:bg-red-50 transition-all font-medium cursor-pointer"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3 px-4 py-2 rounded-lg">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-900">Hola, {userNombre}</p>
                  <p className="text-sm text-gray-500">Cliente</p>
                </div>
              </div>

              <button
                onClick={() => { navigate('/client/home'); setMenuOpen(false); }}
                className="text-gray-700 hover:text-blue-600 font-medium text-left py-2 cursor-pointer"
              >
                Inicio
              </button>

              {/* Categorías en Mobile */}
              <div className="py-2">
                <p className="text-gray-500 text-sm font-semibold mb-3">CATEGORÍAS</p>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      navigate('/client/category/celulares');
                      setMenuOpen(false);
                    }}
                    className="w-full text-left text-gray-700 hover:text-blue-600 py-2 cursor-pointer"
                  >
                    Celulares
                  </button>
                  <button
                    onClick={() => {
                      navigate('/client/category/computadoras');
                      setMenuOpen(false);
                    }}
                    className="w-full text-left text-gray-700 hover:text-blue-600 py-2 cursor-pointer"
                  >
                    Computadoras
                  </button>
                  <button
                    onClick={() => {
                      navigate('/client/category/videojuegos');
                      setMenuOpen(false);
                    }}
                    className="w-full text-left text-gray-700 hover:text-blue-600 py-2 cursor-pointer"
                  >
                    Videojuegos
                  </button>
                  <button
                    onClick={() => {
                      navigate('/client/category/audio');
                      setMenuOpen(false);
                    }}
                    className="w-full text-left text-gray-700 hover:text-blue-600 py-2 cursor-pointer"
                  >
                    Audio
                  </button>
                </div>
              </div>

              <button
                onClick={() => { navigate('/client/products'); setMenuOpen(false); }}
                className="text-gray-700 hover:text-blue-600 font-medium text-left py-2 cursor-pointer"
              >
                Productos
              </button>

              <div className="border-t border-gray-200 pt-4">
                <button
                  onClick={() => { navigate('/client/favoritos'); setMenuOpen(false); }}
                  className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 font-medium text-left py-2 w-full cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>Favoritos</span>
                </button>
                <button
                  onClick={() => { navigate('/client/cart'); setMenuOpen(false); }}
                  className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 font-medium text-left py-2 w-full cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Carrito</span>
                </button>
                
                <div className="border-t border-gray-200 my-2"></div>
                
                <button
                  onClick={() => { navigate('/client/profile'); setMenuOpen(false); }}
                  className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 font-medium text-left py-2 w-full cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Ver Perfil</span>
                </button>
                <button
                  onClick={cerrarSesion}
                  className="flex items-center space-x-3 text-red-600 hover:text-red-700 font-medium text-left py-2 w-full cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span>Cerrar Sesión</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}