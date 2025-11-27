import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../components/headers/AdminHeader'
import Footer from '../components/footers/Footer'

export default function AdminLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <AdminHeader />
            <main className="flex-1 flex p-2  items-center justify-center ">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
