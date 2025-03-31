'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import fakeApiServices from '@/services/FakeApi'

export const NavBar = () => {
    const [categories, setCategories] = useState<string[]>([])

    useEffect(() => {
        fakeApiServices
            .getCategories()
            .then(data => {
                setCategories(data)
            })
    }, [])

    return (
        <nav className='flex justify-between px-10 py-5 shadow mb-5 bg-green-700 text-white'>
            <section>
                <Link href='/'>
                    <h1 className='font-bold text-3xl duration-200
                            hover:text-green-900 hover:cursor-pointer'>
                        Shop-Eco
                    </h1>
                </Link>
            </section>

            <section>
                <ul className='flex gap-10 font-bold text-xl [&>li]:duration-200
                            [&>li]:hover:text-green-900 [&>li]:hover:cursor-pointer [&>li]:hover:scale-105'>
                    <li>
                        Productos
                    </li>
                    <li className='relative group'>
                        Categorias
                        <div
                            className='mt-3 bg-green-700 text-white absolute left-0 opacity-0 w-max overflow-hidden shadow duration-200 px-2  rounded-md
                                        group-hover:opacity-100 '
                        >
                            <ul>
                                {
                                    categories.map((category, index) => (
                                        <li key={index} className='hover:text-green-900 capitalize py-1 text-lg'>{category}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                    <li>
                        Carrito
                    </li>
                    <li className='realtive group'>
                        Iniciar sesión
                        <div className='opacity-0 absolute group-hover:opacity-100 bg-green-700 w-max right-0 px-4 mt-3 rounded-md text-white'>
                            <Link href='/' className='hover:text-green-900 capitalize py-1 text-lg'>
                                Registrarse
                            </Link>
                        </div>
                    </li>
                </ul>
            </section>
        </nav>
    )
}
