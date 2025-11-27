import React from 'react'
import { Outlet } from 'react-router-dom'
import CardsP from '../components/CardsP'


export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col">

            <main className="flex-1">
                <Outlet />
            </main>
            <CardsP></CardsP>

        </div>
    )
}
