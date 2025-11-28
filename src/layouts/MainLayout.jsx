import React from 'react'
import { Outlet } from 'react-router-dom'
import PublicHeader from '../components/headers/PublicHeader'
import Footer from '../components/footers/Footer'

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <PublicHeader />
            <main className="flex-1 items-center justify-center ">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
