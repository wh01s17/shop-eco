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
        <section className='px-40 pt-30 flex flex-col items-center'>
            <table
                className='text-2xl text-center divide-y divide-zinc-700 [&>tbody>tr>td]:px-4 [&>tbody>tr>td]:py-2'
            >
                <thead>
                    <tr className=" divide-zinc-700">
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
                        getItems().map(item => {
                            return <tr
                                key={item.id}
                                className=' divide-zinc-700 font-bold'
                            >
                                <td id='itemImage' className='w-50'>
                                    <Link
                                        href={`/products/${item.id}`}
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            height={180}
                                            width={90}
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
                    <tr className='font-bold text-3xl'>
                        <td></td>
                        <td></td>
                        <td className='h-40 w-100'><u>Total</u>: ${getTotal().toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}
