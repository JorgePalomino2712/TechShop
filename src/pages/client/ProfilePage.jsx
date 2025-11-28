import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
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
        console.log(data);
        setUser(data);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    traerPerfil();
  }, [navigate]);

  if (loading) {
    return (
      <div className="max-w-md mx-auto flex justify-center items-center py-20">
        <div className="w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto text-center p-6">
        <p className="text-red-600 mb-3">Error al cargar</p>
      </div>
    );
  }


  return (
    <div className="max-w-md mx-auto">
  <div className="text-center mb-8">
    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
      {user.name.charAt(0).toUpperCase()}
    </div>
    <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
    <p className="text-gray-600">{user?.email}</p>
  </div>

  <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
    <div>
      <label className="text-sm text-gray-500">Tipo de cuenta</label>
      <p className="font-medium text-green-600 capitalize">{user?.role}</p>
    </div>
    
    <button 
      onClick={() => navigate('/client/profile/editar')}
      className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
    >
      Editar Perfil
    </button>
  </div>
</div>
  );
}