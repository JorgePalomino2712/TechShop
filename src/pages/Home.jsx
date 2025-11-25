import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Home() {
    const navigate = useNavigate();
    const [user, setUser] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/")
        } else {
            const userName = localStorage.getItem("nombre");
            setUser(userName);
        }
    }, [navigate]);
    function cerrarSesion() {
        localStorage.clear();
        navigate("/")

    }
    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <h2>Bienvenido de nuevo {user}</h2>
            <p>Actualmente esta pagina esta en mantenimiento...</p>
            <button onClick={cerrarSesion} className='bg-green-600 px-3 py-2 rounded-2xl'>Cerrar Sesion</button>
        </div>
    )
}
