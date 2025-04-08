import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/Button'
import { Cart } from '@/types/Cart'

export const SmallCart = () => {
    let total = 0
    const items: Cart[] = [
        {
            id: 2,
            title: 'Mens Casual Premium Slim Fit T-Shirts',
            image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            price: 22.3,
            count: 3
        },
        {
            id: 3,
            title: 'Mens Cotton Jacket',
            price: 55.99,
            image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
            count: 1
        },
        {
            id: 4,
            title: 'Mens Casual Slim Fit',
            price: 15.99,
            image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
            count: 2
        }
    ]

    return (
        <div className='group relative inline-block'>
            Cart <i className="ri-shopping-cart-2-line" />

            <div
                className='hidden group-hover:block absolute -left-15 bg-white text-zinc-700 w-50 shadow-md rounded-md p-2 z-10 text-sm'
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
                        {items.map(item => {
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
                                <td className='hover:scale-120'>
                                    <i className="ri-delete-bin-line hover:text-red-700 text-lg font-light" />
                                </td>
                            </tr>
                        })}
                        <tr>
                            <td></td>
                            <td>Total:</td>
                            <td>${total}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='text-right'>
                    <Link
                        href='/checkout'
                        className='mt-4 font-light inline-block bg-green-700 text-white py-1 px-2 rounded-lg hover:scale-105 transition-transform duration-150'
                    >
                        Checkout
                    </Link>
                </div>
            </div>
        </div>
    )
}
