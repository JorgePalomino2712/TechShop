import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function CradsFilterClient() {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [product, setProducts] = useState([])
    const navigate = useNavigate();
    const { categoryName } = useParams();

    const categoryNames = {
        celulares: "Celulares",
        computadoras: "Computadoras", 
        videojuegos: "Videojuegos",
        audio: "Audio"
    };

    useEffect(() => {
        async function traerCards() {
            try {
                const respuesta = await fetch(
                    "https://api-funval-g6.onrender.com/products/?skip=0&limit=100",
                    {
                        method: "GET",
                        headers: {
                            "accept": "application/json",
                        },
                    }
                );
                const data = await respuesta.json();
                console.log(data);
                const filtrados = data.filter(item => item.category === categoryName.toLowerCase());
                setProducts(filtrados);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        }
        traerCards()
    }, [categoryName]);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-6">
            {/* Título de la categoría */}
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {categoryNames[categoryName] || categoryName}
                </h1>
            </div>

            {error && <p className="text-red-400 text-sm text-center mb-4">{error}</p>}
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center'>
                {product.map((p) => (
                    <div key={p.id} className="w-60 h-100 bg-gray-100 p-3 flex flex-col gap-1 rounded-2xl relative">
                        <button className="absolute top-3 left-3 z-10 p-1 bg-white/80 rounded-full hover:bg-white transition-colors cursor-pointer">
                            <svg className="w-5 h-5 text-gray-500 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                        <img src={p.image_url} className='h-48 bg-gray-700 rounded-xl w-full object-cover' alt={p.name} />
                        <div className="flex flex-col gap-4 h-full">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col">
                                    <span className="text-md font-bold">{p.name}</span>
                                    <p className="text-xs text-gray-700">Stock: {p.stock}</p>
                                </div>
                                <span className="font-bold text-red-600">${p.price}</span>
                            </div>
                            <button onClick={() => {
                                navigate("/login")
                            }} className="mt-auto hover:bg-sky-700 text-gray-50 bg-gradient-to-r from-blue-600 to-purple-600 py-2 rounded-md">
                                Añadir al carrito
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}