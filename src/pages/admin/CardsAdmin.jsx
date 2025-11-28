import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CardsP() {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [product, setProducts] = useState([])
    const navigate = useNavigate();


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
                const filtrados = data.filter(item => (item.category === "audio" || item.category === "celulares" || item.category === "computadoras" || item.category === "videojuegos"));
                setProducts(filtrados);


            } catch (err) {
                setError(err.message);
            }
        }

        traerCards()
    }, []);
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 p-5 items-center justify-center'>
            {error && <p className="text-red-400 text-sm text-center mt-2">{error}</p>}
            {product.map((p) => (
                <div key={p.id} className="w-60 h-100 bg-gray-100 p-3 flex flex-col gap-1 rounded-2xl ">
                    <img src={p.image_url} className='h-48 bg-gray-700 rounded-xl' alt="" />
                    <div className="flex flex-col gap-4 h-full">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col">
                                <span className="text-md font-bold">{p.name}</span>
                                <p className="text-xs text-gray-700">Stock: {p.stock}</p>
                            </div>
                            <span className="font-bold  text-red-600">${p.price}</span>
                        </div>
                        <button className=" mt-auto hover:bg-sky-700 text-gray-50 bg-gradient-to-r from-blue-600 to-purple-600 py-2 rounded-md">
                            Editar Producto
                        </button>
                    </div>
                </div>


            ))}


        </div>
    )
}
