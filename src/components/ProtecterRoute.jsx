import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtecterRoute({ RolUser }) {
    const token = localStorage.getItem("token")
    const rol = localStorage.getItem("role")
    if (!token || !rol) {
        return <Navigate to="/login" replace />
    }
    if (RolUser !== rol) {
        return <Navigate to="/login" replace />
    }
    return (
        <Outlet />
    )
}
