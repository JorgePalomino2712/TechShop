import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditarPerfil() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [role, setRole] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState("")
    const navigate = useNavigate();
    const { id } = useParams();


    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await fetch("https://api-funval-g6.onrender.com/auth/me", {
                headers: { Authorization: `Bearer ${token}` },
            });

            const data = await res.json();

            localStorage.setItem("user_id", data.id);
            localStorage.setItem("name", data.name);
            console.log(data.id)

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);


    async function enviarFormulario(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const token = localStorage.getItem("token");
            const respuesta = await fetch(`https://api-funval-g6.onrender.com/users/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        email,
                        password,
                        name,
                        role,
                    }),
                }
            );
            const data = await respuesta.json();
            console.log(data)

            if (!respuesta.ok) {
                throw new Error(data.message || "Error al actualizar usuario");
            }
            localStorage.setItem("token", data.access_token)
            localStorage.setItem("nombre", data.user_name)
            localStorage.setItem("role", data.user_role)


            navigate(`/login`);
        } catch (err) {
            setError(err.message);
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    return (

        <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-white p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
            <h2 className="text-2xl text-sky-900 font-bold mb-6">Actualiza tu Perfil</h2>
            {error && <p className="text-red-600 text-center">{error}</p>}
            {loading && <p className="text-blue-600 text-center">Actualizando...</p>}
            <form onSubmit={enviarFormulario}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600" htmlFor="name">
                        Nombre
                    </label>
                    <input value={name}
                        required
                        onChange={(e) => setName(e.target.value)} className="mt-1 p-2 w-full border rounded-md" type="text" />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium text-gray-600"
                        htmlFor="email"
                    >
                        Correo
                    </label>
                    <input
                        className="mt-1 p-2 w-full border rounded-md"
                        name="email"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600" htmlFor="bio">
                        Contraseña
                    </label>
                    <input
                        className="mt-1 p-2 w-full border rounded-md"
                        name="password"
                        id="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600" htmlFor="rol">
                        Rol
                    </label>
                    <select
                        className="mt-1 p-2 w-full border rounded-md bg-white cursor-pointer"
                        name="rol"
                        id="rol"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="">Seleccione un rol</option>
                        <option value="admin">admin</option>
                        <option value="cliente">cliente</option>

                    </select>
                </div>
                <div className="flex justify-end">
                    <button
                        disabled={loading}
                        className="[background:linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb)] text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                        type="submit"
                    >
                        {loading ? "Guardando..." : "Actualizar"}
                    </button>
                </div>
            </form>
        </div>



    )
}
