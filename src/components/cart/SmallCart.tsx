'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { getCartByEmail, removeItem } from '@/firebase/firestoreShoppingCart'
import { CartItem } from '@/types/cart'

export const SmallCart = () => {
    const [items, setItems] = useState<CartItem[]>([])
    const [loading, setLoading] = useState(true);
    let total = 0
    const { currentUser } = useAuth()

    const handleDelete = (id: string) => {
        try {
            if (currentUser?.email) {
                removeItem(id, currentUser?.email)
                setItems(prevItems =>
                    prevItems.map(item => {
                        if (item.id === id) {
                            if (item.count > 1) {
                                return { ...item, count: item.count - 1 }
                            } else {
                                return null
                            }
                        }
                        return item
                    })
                        .filter((item): item is typeof items[number] => item !== null)
                )
            }
        } catch (error) {
            console.error("Error deleting item: ", error);
        }

    }

    const fetchData = async (): Promise<void> => {
        setLoading(true);
        try {
            if (currentUser?.email) {
                const data = await getCartByEmail(currentUser.email);
                setItems(data);
            } else {
                setItems([]);
            }
        } catch (error) {
            console.error("Error al cargar el carrito:", error);
            setItems([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [currentUser]);

    if (loading) return null

    return (
        <div className='group relative inline-block'>
            Cart <i className="ri-shopping-cart-2-line" />

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
                                total += item.count * item.price
                                return <tr
                                    key={item.id}
                                >
                                    <td className='p-1'>
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
                                    <td>
                                        {item.count}
                                    </td>
                                    <td>
                                        ${item.count * item.price}
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
        </div>
    )
}
