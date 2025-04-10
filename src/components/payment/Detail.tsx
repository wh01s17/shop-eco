'use client'
import { useCartStore } from '@/store/useCartStore'
import { getAuth } from 'firebase/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Detail = () => {
    const { getItems, getTotal, loading, removeItem } = useCartStore()
    const { currentUser } = getAuth()

    const handleDelete = async (id: string) => {
        if (currentUser?.email && !loading) {
            try {
                await removeItem(id, currentUser.email)
            } catch (error) {
                console.error("Error deleting item: ", error)
            }
        }
    }
    return (
        <div>
            <h2 className='text-2xl font-bold my-10'>Shopping Cart information</h2>
            <table
                className='w-full text-2xl text-center divide-y divide-zinc-700 [&>tbody>tr>td]:px-4 [&>tbody>tr>td]:py-2'
            >
                <thead>
                    <tr className="divide-x divide-zinc-700">
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
                        getItems().map((item, index) => {
                            return <tr
                                key={item.id}
                                className='divide-x divide-zinc-700'
                            >
                                <td id='itemImage' className='w-120'>
                                    <Link
                                        href={`/products/${item.id}`}
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            height={200}
                                            width={100}
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
                                <td id='delete' className='w-40'>
                                    <button
                                        className='hover:scale-120 cursor-pointer'
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        <i className="ri-delete-bin-line hover:text-red-700 text-3xl font-light" />
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

            <div className='flex justify-end text-3xl font-bold mt-15'>
                <h1 >Total: ${getTotal().toFixed(2)}</h1>
            </div>

        </div>
    )
}
