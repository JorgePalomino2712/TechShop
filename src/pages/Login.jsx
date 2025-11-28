
import styles from "./Login.module.css"
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
        <div className="h-screen flex flex-col gap-5 items-center justify-center bg-gray-800">
            <div className={styles.container}>

                <div className={styles["login-box"]}>
                    <h2 className={styles.h2}>Iniciar Sesión</h2>

                    <form className={styles.form} onSubmit={enviarFormulario}>
                        <div className={styles["input-box"]}>
                            <input
                                type="email"
                                className={styles.input}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                value={email}
                            />
                            <label className={styles.label}>Correo</label>
                        </div>

                        <div className={styles["input-box"]}>
                            <input
                                type="password"
                                className={styles.input}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                value={password}
                            />
                            <label className={styles.label}>Contraseña</label>
                        </div>

                        <div
                            className={`${styles["forgot-pass"]} flex justify-center items-center cursor-pointer`}
                            onClick={() => navigate("/")}
                        >
                            <p className="text-blue-400">Regresar</p>
                        </div>

                        <button className={styles.btn} type="submit">Ingresar</button>

                        <div className={styles["signup-link"]}>
                            <button type="button" onClick={() => navigate("/crearCuenta")}>Registrarse</button>
                        </div>
                    </form>
                </div>

                {[...Array(50)].map((_, i) => (
                    <span style={{ "--i": i }} key={i}></span>
                ))}

            </div>
        </div>

    )
}
