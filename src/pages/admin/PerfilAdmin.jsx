import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function PerfilAdmin() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();

    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/")
        }

        async function traerPerfil() {
            try {
                const respuesta = await fetch("https://api-funval-g6.onrender.com/auth/me", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    }
                });
                const data = await respuesta.json();
                console.log(data)
                setUser(data)

            } catch (error) {
                setError(error.message);
                console.log(error)
            }
        }
        traerPerfil();

    }, [navigate]);
    function cerrarSesion() {
        localStorage.clear();
        navigate("/")

    }
    return (
        <div className='h-full w-full flex items-start p-4 '>
            <aside className='h-200 w-72 flex flex-col gap-4 text-black bg-white border-r border-gray-200 p-8 overflow-y-auto py-4'>
                <div className="text-center mb-8">
                    <img
                        src="/images/profile.png"
                        alt="Foto de perfil"
                        className="w-32 h-32 rounded-full object-cover mx-auto mb-3"
                    />
                    <h2 className="font-semibold !text-[#1A237E]">¡Hola {user?.name}!</h2>
                </div>

                <Link to="" className="cursor-pointer block w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 font-medium">Perfil</Link>
                <Link to="usuarios" className="cursor-pointer block w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 font-medium">Usuarios</Link>
                <Link to="ordenes" className="cursor-pointer block w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 font-medium">Ordenes</Link>
                <Link to="productos" className="cursor-pointer block w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 font-medium">Productos</Link>
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
            <div className='flex items-center justify-center w-full '>
                <Outlet />
            </div>

        </div>
    )
}
