'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useCartStore } from '@/store/useCartStore'

export const SmallCart = () => {
    const { currentUser } = useAuth()
    const { items, loading, removeItem, fetchCart, getTotal } = useCartStore()

    useEffect(() => {
        if (currentUser?.email) {
            fetchCart(currentUser.email)
        }
    }, [currentUser, fetchCart])

    const handleDelete = async (id: string) => {
        if (currentUser?.email && !loading) {
            try {
                await removeItem(id, currentUser.email)
            } catch (error) {
                console.error("Error deleting item: ", error)
            }
        }
    }
    const total = getTotal()

    if (loading) return null

    return (
        <div
            className='hidden group-hover:block absolute -left-15 bg-white text-zinc-700 w-50 
                            shadow-md rounded-md p-2 z-10 text-sm'
        >
            <table className='w-full text-center divide-y divide-zinc-700'>
                <thead>
                    <tr>
                        <th />
                        <th>
                            Items
                        </th>
                        <th>
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => {
                            return <tr
                                key={item.id}
                            >
                                <td id='itemImage' className='p-1'>
                                    <Link
                                        href={`/products/${item.id}`}
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            height={60}
                                            width={30}
                                            className='object-contain hover:scale-105'
                                        />
                                    </Link>
                                </td>
                                <td id='quantity'>
                                    {item.count}
                                </td>
                                <td id='valueItems'>
                                    ${(item.count * item.price).toFixed(2)}
                                </td>
                                <td id='delete'>
                                    <button
                                        className='hover:scale-120 cursor-pointer'
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        <i className="ri-delete-bin-line hover:text-red-700 text-lg font-light" />
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                    <tr>
                        <td></td>
                        <td>Total:</td>
                        <td>${total.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            <div className='text-right'>
                <Link
                    href='/checkout'
                    className='mt-4 font-light inline-block bg-green-700 text-white py-1 px-2 rounded-lg
                        hover:scale-105 transition-transform duration-150'
                >
                    Checkout
                </Link>
            </div>
        </div>
    )
}
