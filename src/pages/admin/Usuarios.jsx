import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Usuarios() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("cliente");
    const [password, setPassword] = useState("")

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState("edit");
    const [selectedUserId, setSelectedUserId] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (modalMode === "create") {
            // lógica POST para crear usuario
        } else {
            const token = localStorage.getItem("token");

            const respuesta = await fetch(`https://api-funval-g6.onrender.com/users/${selectedUserId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    name,
                    email,
                    role,
                    password,
                })
            });

            const data = respuesta.json();

            if (!respuesta.ok) {
                return alert(data.message || "Error al actualizar usuario");
            }


            setUsers((prev) =>
                prev.map((u) => (u.id === selectedUserId ? { ...u, name, email, role } : u))
            );

            console.log("Usuario Actualizado")
        }
        setIsModalOpen(false);
    };


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await fetch("https://api-funval-g6.onrender.com/users", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await res.json();
                setUsers(data);
            } catch (err) {
                setError("Error al cargar usuarios", err);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);
    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Usuarios</h1>

                <button
                    className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg"
                    onClick={() => {
                        setModalMode("create");
                        setIsModalOpen(true);
                    }}
                >
                    Agregar Usuario
                </button>
            </div>


            {loading && <p>Cargando...</p>}
            {error && <p className="text-red-500">{error}</p>}


            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="p-3">ID</th>
                        <th className="p-3">Nombre</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Rol</th>
                        <th className="p-3 text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="border-b hover:bg-gray-100">
                            <td className="p-3">{user.id}</td>
                            <td className="p-3">{user.name}</td>
                            <td className="p-3">{user.email}</td>
                            <td className="p-3 capitalize">{user.role}</td>
                            <td className="p-3 text-center space-x-2">
                                <button
                                    className="px-3 py-1 bg-blue-600 text-white rounded-lg"
                                    onClick={() => {
                                        setSelectedUserId(user.id);
                                        setModalMode("edit");
                                        setIsModalOpen(true);
                                        setName(user.name);
                                        setEmail(user.email);
                                        setRole(user.role);
                                    }}
                                >
                                    Editar
                                </button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/40  flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg animate-fadeIn">
                        <h2 className="text-xl font-bold mb-4">{modalMode === "create" ? "Agregar Usuario" : "Editar Usuario"}</h2>


                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Nombre"
                                className="w-full px-3 py-2 border rounded-lg"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-3 py-2 border rounded-lg"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-3 py-2 border rounded-lg"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg"
                            >
                                <option value="cliente">cliente</option>
                                <option value="admin">admin</option>
                            </select>


                            <div className="flex justify-end gap-3 pt-2">
                                <button
                                    type="button"
                                    className="px-4 py-2 rounded-lg border"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded-lg bg-blue-600 text-white"
                                >
                                    {modalMode === "create" ? "Guardar" : "Actualizar"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
