
import "../styles.css"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState("")
    const navigate = useNavigate();

    async function enviarFormulario(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);
        console.log("Hola Jorge")
        console.log(email)
        console.log(password)
        try {
            const respuesta = await fetch("https://api-funval-g6.onrender.com/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );
            const data = await respuesta.json();
            console.log(data)
            if (!respuesta.ok) {
                throw new Error(data.message || "credenciales incorrectas");
            }
            localStorage.setItem("token", data.access_token)
            localStorage.setItem("nombre", data.user_name)
            localStorage.setItem("role", data.user_role)
            navigate("/admin")
        } catch (err) {
            setError(err.message);
            console.log(error)
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className='h-screen flex flex-col gap-5 items-center justify-center bg-gray-800'>
            {error && <div className="text-red-600 text-2xl">¡{error}!</div>}

            <div className="container">
                <div className="login-box">
                    <h2>Iniciar Sesión</h2>
                    <form
                        onSubmit={enviarFormulario}
                        action="#">
                        <div className="input-box">
                            <input onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                                defaultValue="" required="" type="email" />
                            <label>Correo</label>
                        </div>
                        <div className="input-box">
                            <input
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                defaultValue="" required="" type="password" />
                            <label>Contraseña</label>
                        </div>
                        <div
                            onClick={() => {
                                navigate("/")
                            }}
                            className="forgot-pass flex items-center justify-center gap-1 cursor-pointer ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-4 stroke-blue-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>

                            <p className="text-blue-400">Regresar</p>
                        </div>
                        <button className="btn" type="submit">
                            Ingresar
                        </button>
                        <div className="signup-link">
                            <a href=""><button onClick={() => {
                                navigate("/crearCuenta")
                            }} className="cursor-pointer">Registrarse</button></a>
                        </div>
                    </form>
                </div>
                <span style={{ "--i": 0 }}></span>
                <span style={{ "--i": 1 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 3 }}></span>
                <span style={{ "--i": 4 }}></span>
                <span style={{ "--i": 5 }}></span>
                <span style={{ "--i": 6 }}></span>
                <span style={{ "--i": 7 }}></span>
                <span style={{ "--i": 8 }}></span>
                <span style={{ "--i": 9 }}></span>
                <span style={{ "--i": 10 }}></span>
                <span style={{ "--i": 11 }}></span>
                <span style={{ "--i": 12 }}></span>
                <span style={{ "--i": 13 }}></span>
                <span style={{ "--i": 14 }}></span>
                <span style={{ "--i": 15 }}></span>
                <span style={{ "--i": 16 }}></span>
                <span style={{ "--i": 17 }}></span>
                <span style={{ "--i": 18 }}></span>
                <span style={{ "--i": 19 }}></span>
                <span style={{ "--i": 20 }}></span>
                <span style={{ "--i": 21 }}></span>
                <span style={{ "--i": 22 }}></span>
                <span style={{ "--i": 23 }}></span>
                <span style={{ "--i": 24 }}></span>
                <span style={{ "--i": 25 }}></span>
                <span style={{ "--i": 26 }}></span>
                <span style={{ "--i": 27 }}></span>
                <span style={{ "--i": 28 }}></span>
                <span style={{ "--i": 29 }}></span>
                <span style={{ "--i": 30 }}></span>
                <span style={{ "--i": 31 }}></span>
                <span style={{ "--i": 32 }}></span>
                <span style={{ "--i": 33 }}></span>
                <span style={{ "--i": 34 }}></span>
                <span style={{ "--i": 35 }}></span>
                <span style={{ "--i": 36 }}></span>
                <span style={{ "--i": 37 }}></span>
                <span style={{ "--i": 38 }}></span>
                <span style={{ "--i": 39 }}></span>
                <span style={{ "--i": 40 }}></span>
                <span style={{ "--i": 41 }}></span>
                <span style={{ "--i": 42 }}></span>
                <span style={{ "--i": 43 }}></span>
                <span style={{ "--i": 44 }}></span>
                <span style={{ "--i": 45 }}></span>
                <span style={{ "--i": 46 }}></span>
                <span style={{ "--i": 47 }}></span>
                <span style={{ "--i": 48 }}></span>
                <span style={{ "--i": 49 }}></span>
            </div>
        </div>

    )
}
