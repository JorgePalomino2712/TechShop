
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
            navigate("/home")
        } catch (err) {
            setError(err.message);
            console.log(error)
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className='h-screen flex items-center justify-center bg-gray-800'>

            <div className="container">
                <div className="login-box">
                    <h2>Login</h2>
                    <form
                        onSubmit={enviarFormulario}
                        action="#">
                        <div className="input-box">
                            <input onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                                defaultValue="" required="" type="email" />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <input
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                defaultValue="" required="" type="password" />
                            <label>Password</label>
                        </div>
                        <div className="forgot-pass">
                            <a href="">Forgot your password?</a>
                        </div>
                        <button className="btn" type="submit">
                            Login
                        </button>
                        <div className="signup-link">
                            <a href=""><button onClick={() => {
                                navigate("/crearCuenta")
                            }} className="cursor-pointer">Sign Up</button></a>
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
