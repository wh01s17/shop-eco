'use client'
import { useAuth } from '@/context/AuthContext'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import { ReactNode } from 'react'
import { Loading } from './ui/Loading'

interface ProtectedRouteProps {
    children: ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { currentUser } = useAuth()

    useEffect(() => {
        if (currentUser === null) {
            redirect('/login')
        }
    }, [currentUser])

    // Mientras verifica el estado, podría mostrar un loader o nada
    if (currentUser === null) {
        return <Loading />
    }

    return <>{children}</>
}