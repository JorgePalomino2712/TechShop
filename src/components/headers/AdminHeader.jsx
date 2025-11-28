import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function AdminHeader() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [categoriesDropdown, setCategoriesDropdown] = useState(false);


    const [userId, setUserId] = useState(localStorage.getItem("user_id"));

    useEffect(() => {
        const interval = setInterval(() => {
            const id = localStorage.getItem("user_id");
            if (id !== userId) setUserId(id);
        }, 200);

        return () => clearInterval(interval);
    }, [userId]);

    console.log(`esta llegando: ${userId}`);

    return (
        <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 font-inter">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <img
                        src="/images/logo.png"
                        alt="TechShop Logo"
                        className="h-12 cursor-pointer"
                        onClick={() => navigate('/')}
                    />

                    {/* Desktop */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <button onClick={() => navigate('/')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                            Inicio
                        </button>

                        {/* Dropdown */}
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

                                    {/* Categorías */}
                                    <button type='button'
                                        onClick={() => {
                                            navigate('/category/celulares');
                                            setCategoriesDropdown(false);
                                        }}
                                        className="w-full text-left px-5 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium cursor-pointer"
                                    >
                                        Celulares
                                    </button>

                                    <div className="mx-5 border-t border-gray-100"></div>

                                    <button
                                        onClick={() => {
                                            navigate('/category/computadoras');
                                            setCategoriesDropdown(false);
                                        }}
                                        className="w-full text-left px-5 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium cursor-pointer"
                                    >
                                        Computadoras
                                    </button>

                                    <div className="mx-5 border-t border-gray-100"></div>

                                    <button
                                        onClick={() => {
                                            navigate('/category/videojuegos');
                                            setCategoriesDropdown(false);
                                        }}
                                        className="w-full text-left px-5 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium cursor-pointer"
                                    >
                                        Videojuegos
                                    </button>

                                    <div className="mx-5 border-t border-gray-100"></div>

                                    <button
                                        onClick={() => {
                                            navigate('/category/audio');
                                            setCategoriesDropdown(false);
                                        }}
                                        className="w-full text-left px-5 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium cursor-pointer"
                                    >
                                        Audio
                                    </button>

                                </div>
                            )}
                        </div>

                        <Link to="/productos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                            Productos
                        </Link>
                        <button onClick={() => navigate('/about')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                            Nosotros
                        </button>
                    </nav>

                    {/* Botones de Login y registro */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={() => navigate(`/admin/perfil/${userId}`)}
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                        >
                            Mi Perfil
                        </button>
                        <button
                            onClick={() => navigate('/crearCuenta')}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl cursor-pointer"
                        >
                            Registrarse
                        </button>
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
                            <button
                                onClick={() => { navigate('/'); setMenuOpen(false); }}
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
                                            navigate('/category/celulares');
                                            setMenuOpen(false);
                                        }}
                                        className="w-full text-left text-gray-700 hover:text-blue-600 py-2 cursor-pointer"
                                    >
                                        Celulares
                                    </button>
                                    <button
                                        onClick={() => {
                                            navigate('/category/computadoras');
                                            setMenuOpen(false);
                                        }}
                                        className="w-full text-left text-gray-700 hover:text-blue-600 py-2 cursor-pointer"
                                    >
                                        Computadoras
                                    </button>
                                    <button
                                        onClick={() => {
                                            navigate('/category/videojuegos');
                                            setMenuOpen(false);
                                        }}
                                        className="w-full text-left text-gray-700 hover:text-blue-600 py-2 cursor-pointer"
                                    >
                                        Videojuegos
                                    </button>
                                    <button
                                        onClick={() => {
                                            navigate('/category/audio');
                                            setMenuOpen(false);
                                        }}
                                        className="w-full text-left text-gray-700 hover:text-blue-600 py-2 cursor-pointer"
                                    >
                                        Audio
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={() => { navigate('/products'); setMenuOpen(false); }}
                                className="text-gray-700 hover:text-blue-600 font-medium text-left py-2 cursor-pointer"
                            >
                                Productos
                            </button>
                            <button
                                onClick={() => { navigate('/about'); setMenuOpen(false); }}
                                className="text-gray-700 hover:text-blue-600 font-medium text-left py-2 cursor-pointer"
                            >
                                Nosotros
                            </button>
                            <div className="border-t border-gray-200 pt-4">
                                <button
                                    onClick={() => { navigate('/login'); setMenuOpen(false); }}
                                    className="text-gray-700 hover:text-blue-600 font-medium text-left py-2 w-full cursor-pointer"
                                >
                                    Perfil
                                </button>
                                <button
                                    onClick={() => { navigate('/crearCuenta'); setMenuOpen(false); }}
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all w-full mt-2 cursor-pointer"
                                >
                                    Registrarse
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}