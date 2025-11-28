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
            <aside className='h-200 w-72 flex flex-col gap-4 text-black border-r-2 overflow-y-auto py-4'>
                <div className='font-bold'>¡Hola {user?.name}!</div>
                <Link to="" className="cursor-pointer">Perfil</Link>
                <Link to="usuarios" className="cursor-pointer">Usuarios</Link>
                <Link to="ordenes" className="cursor-pointer">Ordenes</Link>
                <Link to="productos" className="cursor-pointer">Productos</Link>
                <button onClick={cerrarSesion} className='text-zinc-500 cursor-pointer'>Cerrar Sesion</button>
            </aside>
            <div className='flex items-center justify-center w-full '>
                <Outlet />
            </div>

        </div>
    )
}
