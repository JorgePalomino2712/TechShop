import React from 'react';
import { Outlet } from 'react-router-dom';
import ClientHeader from '../components/headers/ClientHeader';
import Footer from '../components/footers/Footer';

export default function ClientLayout() {
  return (
        <div className="min-h-screen flex flex-col">
            <ClientHeader />
            <main className="flex-1 items-center justify-center ">
                <Outlet />
            </main>
            <Footer />
        </div>
  );
}