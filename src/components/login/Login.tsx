'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { auth } from '@/firebase/config'
import { toast } from 'sonner'

interface Creds {
    email: string;
    password: string;
}

export const Login = () => {
    const [creds, setCreds] = useState<Creds>({
        email: '',
        password: ''
    })
    const router = useRouter()

    useEffect(() => {
        document.title = "Login"
    }, [])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()

        if (!creds.email || !creds.password) {
            toast.error('All fields are required')
            return
        }

        try {
            await signInWithEmailAndPassword(auth, creds.email, creds.password)
            toast.success('Welcome 😬')
            router.push('/')
        } catch (error) {
            toast.error('User and/or password incorrect')
            console.log(error)
        }
    }

    const handleCreds = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div
            className='flex flex-col justify-center items-center py-25 h-full text-green-900'
        >
            <h1 className='text-5xl pb-20 font-bold'>Login</h1>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col space-y-0'
            >
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                    className="border border-gray-300 rounded-sm p-2 w-100"
                    value={creds.email}
                    onChange={handleCreds}
                />

                <label htmlFor="password" className='pt-10'>Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*********"
                    className="border border-gray-300 rounded-sm p-2"
                    value={creds.password}
                    onChange={handleCreds}
                />
                <Button type="submit">
                    Login
                </Button>
            </form>
        </div>
    )
}
