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
        <nav
            className='flex justify-between px-10 shadow-2xl bg-green-700 text-white z-10 fixed w-full items-center
                        xs:py-2 2xl:py-5 opacity-95'
        >
            <Link href='/'
                className='font-bold xs:text-2xl 2xl:text-4xl duration-200
                        hover:text-green-900 '
            >
                <u>
                    Shop-Eco<i className="font-light ri-leaf-line swing-animation" />
                </u>
            </Link>

            <section>
                <ul className='flex gap-10 font-bold xs:text-md 2xl:text-xl [&>li]:duration-200
                            [&>li]:hover:text-green-900 [&>li]:hover:cursor-pointer'>
                    <li>
                        <Link href='/#about'>
                            About us
                        </Link>
                    </li>
                    <li className='relative group'>
                        <Link href='/products'>
                            Products
                        </Link>
                        <div
                            className='mt-2 bg-white text-zinc-700 absolute -left-10 opacity-0 w-max overflow-hidden shadow duration-200 px-2  text-center
                                        rounded-md group-hover:opacity-100 z-10'
                        >
                            <ul>
                                {
                                    categories.map((category, index) => (
                                        <li key={index} className='hover:text-green-800 capitalize xs:text-sm 2xl:text-lg py-1'>
                                            <Link href={`/products/category/${category}`}>
                                                {category}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                    <li className='relative group'>
                        Cart <i className="ri-shopping-cart-2-line" />
                        <div>
                            <ul>

                            </ul>
                        </div>
                    </li>
                    <li className='realtive group'>
                        Log-in <i className="ri-login-box-line" />
                        <div className='mt-2 bg-white text-zinc-700 absolute right-8 opacity-0 w-max overflow-hidden shadow duration-200 px-2    
                                        py-1 rounded-md group-hover:opacity-100 z-10 text-center'>
                            <ul className='xs:text-sm 2xl:text-lg'>
                                <li>
                                    <Link href='/' className='hover:text-green-800 capitalize xs:text-sm 2xl:text-lg'>
                                        Sign-in <i className="ri-door-open-line" />
                                    </Link>
                                </li>
                                <li className='hover:text-green-800 py-1 xs:text-sm 2xl:text-lg'>
                                    Log-out <i className="ri-logout-box-line" />
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </section>
        </nav>
    )
}
