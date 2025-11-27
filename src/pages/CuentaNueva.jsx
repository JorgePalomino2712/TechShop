import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function CuentaNueva() {
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    async function enviarFormulario(e) {
        e.preventDefault
        console.log(nombre)
        console.log(password)
        console.log(nombre)


        try {
            const respuesta = await fetch(
                "https://api-funval-g6.onrender.com/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: correo,
                        password: password,
                        name: nombre,
                    }),
                }
            );
            const data = await respuesta.json();
            console.log(data);
            if (!respuesta.ok) {
                throw new Error(data.message || "Faltan datos");
            }
            alert("usuario registrado con exito");
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    }
    return (
        <div className='flex flex-col gap-8 items-center justify-center h-screen bg-gray-800'>
            {error && <p className="text-red-400 text-sm text-center mt-2">{error}</p>}

            <div className="w-80 rounded-2xl bg-slate-900">
                <div className="flex flex-col gap-2 p-8">
                    <p className="text-center text-3xl text-gray-300 mb-4">Registrate</p>

                    <input
                        onChange={(e) => {
                            setCorreo(e.target.value)
                        }}
                        className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                        placeholder="Correo"
                    />
                    <input
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                        placeholder="Contraseña"
                        type="password"
                    />
                    <input
                        onChange={(e) => {
                            setNombre(e.target.value)
                        }}
                        className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                        placeholder="Nombre"
                        type="text"
                    />
                    <button type='button' onClick={enviarFormulario} className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white hover:bg-gray-800 active:scale-95">
                        Registrarse
                    </button>
                    <button type='button' onClick={() => {
                        navigate("/login")
                    }} className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white hover:bg-gray-800 active:scale-95">
                        Iniciar Sesion
                    </button>
                </div>
            </div>
        </div>

    )
}
