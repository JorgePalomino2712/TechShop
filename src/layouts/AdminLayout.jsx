import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../components/headers/AdminHeader'
import Footer from '../components/footers/Footer'


export default function AdminLayout() {
    useEffect(() => {
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

        fetchProfile();
    }, []);
    return (
        <div className="min-h-screen flex flex-col">
            <AdminHeader />
            <main className="">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
