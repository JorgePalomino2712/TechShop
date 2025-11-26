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
                throw new Error(data.message || "credenciales incorrectas");
            }
            alert("usuario registrado con exito");
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    }
    return (
        <div className='flex items-center justify-center h-screen bg-gray-800'>
            {error && <p className="text-red-400 text-sm text-center mt-2">{error}</p>}

            <div className="w-80 rounded-2xl bg-slate-900">
                <div className="flex flex-col gap-2 p-8">
                    <p className="text-center text-3xl text-gray-300 mb-4">Register</p>

                    <input
                        onChange={(e) => {
                            setCorreo(e.target.value)
                        }}
                        className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                        placeholder="Email"
                    />
                    <input
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                        placeholder="Password"
                        type="password"
                    />
                    <input
                        onChange={(e) => {
                            setNombre(e.target.value)
                        }}
                        className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                        placeholder="Name"
                        type="text"
                    />
                    <button type='button' onClick={enviarFormulario} className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white hover:bg-gray-800 active:scale-95">
                        Register
                    </button>
                    <button type='button' onClick={() => {
                        navigate("/")
                    }} className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white hover:bg-gray-800 active:scale-95">
                        Login
                    </button>
                </div>
            </div>
        </div>

    )
}
