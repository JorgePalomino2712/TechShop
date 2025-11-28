import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function EditarPerfilCliente() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState("")
    const navigate = useNavigate();

    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await fetch("https://api-funval-g6.onrender.com/auth/me", {
                headers: { Authorization: `Bearer ${token}` },
            });

            const data = await res.json();

            // Prellenar los campos con los datos actuales del usuario
            setName(data.name || "");
            setEmail(data.email || "");
            
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
            const userId = localStorage.getItem("user_id");
            
            const respuesta = await fetch(`https://api-funval-g6.onrender.com/users/${userId}`,
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

            navigate(`/login`);
        } catch (err) {
            setError(err.message);
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h1 className="text-xl font-semibold text-gray-900">Editar Perfil</h1>
                </div>
                
                <div className="p-6">
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-red-700 text-sm">{error}</p>
                        </div>
                    )}
                    
                    {loading && (
                        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
                            <p className="text-blue-700 text-sm">Actualizando...</p>
                        </div>
                    )}

                    <form onSubmit={enviarFormulario} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                                    Nombre
                                </label>
                                <input 
                                    value={name}
                                    required
                                    onChange={(e) => setName(e.target.value)} 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    type="text" 
                                    placeholder="Tu nombre completo"
                                />
                            </div>
                            
                            <div>
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    htmlFor="email"
                                >
                                    Correo electrónico
                                </label>
                                <input
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    name="email"
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="tu@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
                                Contraseña
                            </label>
                            <input
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                name="password"
                                id="password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Nueva contraseña"
                            />
                        </div>

                        <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
                            <button
                                type="button"
                                onClick={() => navigate('/client/profile')}
                                className="px-6 py-3 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                            >
                                Cancelar
                            </button>
                            
                            <button
                                disabled={loading}
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                                type="submit"
                            >
                                {loading ? "Guardando..." : "Actualizar Perfil"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}