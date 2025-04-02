'use client'
import React, { useEffect, useState } from 'react'
import fakeApiServices from '@/services/FakeApi'
import Link from 'next/link'

export const Footer = () => {
    const [categories, setCategories] = useState<string[]>([])
    const fecha = new Date()
    const year = fecha.getFullYear()

    useEffect(() => {
        fakeApiServices
            .getCategories()
            .then(data => {
                setCategories(data)
            })
    }, [])
    return (
        <footer className='bg-green-200'>
            <div className='h-fit flex px-40 py-20 gap-20 justify-evenly'>
                <h1 className='text-5xl text-green-900'>
                    <b className="hover:text-green-700 transition-colors duration-300">Shop-Eco</b>
                    <i className="font-light ri-leaf-line ml-1 swing-animation" />
                </h1>
                <div>
                    <h1 className='text-3xl mb-5'>Categories</h1>
                    <ul>
                        {
                            categories.map((category, index) => {
                                return <li
                                    key={index}
                                    className='capitalize text-xl duration-100 hover:scale-105 hover:text-green-800'
                                >
                                    <Link
                                        href={`/products/${category}`}
                                        className='text-md'
                                    >
                                        {category}
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>

                <div>
                    <h1 className='text-3xl mb-5'>Follow us</h1>
                    <ul className='text-xl [&>li]:duration-100 [&>li]:hover:scale-105 [&>li]:hover:text-green-800 [&>li]:hover:cursor-pointer'>
                        <li>
                            <i className="ri-instagram-line" /> Instagram
                        </li>
                        <li>
                            <i className="ri-facebook-line" /> Facebook
                        </li>
                        <li>
                            <i className="ri-youtube-line" /> Youtube
                        </li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-3xl mb-5'>Contact Us</h1>
                    <ul className='text-xl [&>li]:duration-100 [&>li]:hover:scale-105 [&>li]:hover:text-green-800 [&>li]:hover:cursor-pointer'>
                        <li>
                            <i className="ri-map-pin-line" /> 123 Green Street, Eco City, Earth
                        </li>
                        <li>
                            <i className="ri-mail-line" /> contact@storename.com
                        </li>
                        <li>
                            <i className="ri-phone-line" /> +1 234 567 8900
                        </li>
                        <li>
                            <i className="ri-time-line" /> Mon - Fri: 9 AM - 6 PM (PST)
                        </li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-3xl mb-5'>Shipping & Returns</h1>
                    <ul className='text-xl [&>li]:duration-100 [&>li]:hover:scale-105 [&>li]:hover:text-green-800 [&>li]:hover:cursor-pointer'>
                        <li>
                            <i className="ri-truck-line" /> Worldwide shipping available
                        </li>
                        <li>
                            <i className="ri-timer-line" /> Estimated delivery: 5-15 business days
                        </li>
                        <li>
                            <i className="ri-refund-2-line" /> 30-day return policy
                        </li>
                        <li>
                            <i className="ri-file-list-3-line" /> Read our full policy
                        </li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center text-base py-5 '>
                <p>Made in Chile con 💚</p>
                <p><Link href="https://wh01s17.vercel.app/"
                    rel="noreferer"
                    target="_blank"
                    className="duration-300 hover:brightness-50"
                >
                    wh01s17</Link> {year}
                </p>
            </div>
        </footer>
    )
}
