'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { SmallCart } from './cart/SmallCart'
import { useAuth } from '@/context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/config'
import { toast } from 'sonner'
import fakeApiServices from '@/services/FakeApi'


export const NavBar = () => {
    const { currentUser } = useAuth()
    const [categories, setCategories] = useState<string[]>([])

    const signOutHandler = async () => {
        await signOut(auth)
        toast.info('Session ended, see you soon ✌')
    }

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
                <ul className='flex gap-15 font-bold xs:text-md 2xl:text-xl [&>li]:duration-200
                            [&>li]:hover:text-green-900 [&>li]:hover:cursor-pointer'>
                    <li>
                        <Link href='/#about'>
                            About us
                        </Link>
                    </li>
                    <li className='relative'>
                        <div className='group inline-block'>
                            <Link href='/products' className=''>
                                Products
                            </Link>

                            <div
                                className='mt-0 bg-white text-zinc-700 absolute -left-10 opacity-0 w-max overflow-hidden shadow duration-200 px-2 text-center 
                                            rounded-md group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-10'
                            >
                                <ul>
                                    {categories.map((category, index) => (
                                        <li
                                            key={index}
                                            className='hover:text-green-800 capitalize xs:text-sm 2xl:text-lg py-1'
                                        >
                                            <Link href={`/products/category/${category}`}>
                                                {category}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='relative group'>
                        <SmallCart />
                    </li>
                    <li className='relative'>
                        <div className='group inline-block'>
                            {
                                currentUser
                                    ? <button
                                        onClick={signOutHandler}
                                        className='cursor-pointer'
                                    >
                                        Log-out <i className="ri-logout-box-line" />
                                    </button>
                                    : <Link href='/login'>
                                        Log-in <i className="ri-login-box-line" />
                                    </Link>
                            }

                            {
                                !currentUser &&
                                <div
                                    className='mt-0 bg-white text-zinc-700 absolute -right-2 opacity-0 w-max overflow-hidden shadow duration-200 px-2 
                                            py-1 rounded-md group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none z-10 text-center'
                                >
                                    <ul className='xs:text-sm 2xl:text-lg'>
                                        <li>
                                            <Link
                                                href='/signin'
                                                className='hover:text-green-800 capitalize xs:text-sm 2xl:text-lg'
                                            >
                                                Sign-in <i className="ri-door-open-line" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </li>
                </ul>
            </section>
        </nav>
    )
}
