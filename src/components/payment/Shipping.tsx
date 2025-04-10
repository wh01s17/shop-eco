'use client'
import { useShippingStore } from '@/store/useShippingStore'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/store/useCartStore'

export const Shipping = () => {
    const { data, updateField } = useShippingStore()
    const { items, getTotal } = useCartStore()

    const formData = [
        { id: 'fullName', label: 'Full Name', placeholder: 'John Doe' },
        { id: 'address', label: 'Address', placeholder: '123 Main St' },
        { id: 'city', label: 'City', placeholder: 'Santiago' },
        { id: 'region', label: 'Region / State', placeholder: 'Región Metropolitana' },
        { id: 'postalCode', label: 'Postal Code', placeholder: '8320000' },
        { id: 'country', label: 'Country', placeholder: 'Chile' },
    ]

    return (
        <div className='flex'>
            <div className='w-1/2'>
                <h2 className='text-2xl font-bold my-10'>Shipping</h2>
                <form className='grid gap-4'>
                    {
                        formData.map(({ id, label, placeholder }) => (
                            <div key={id} className='flex flex-col'>
                                <label htmlFor={id} className='mb-1 font-medium'>
                                    {label}
                                </label>
                                <input
                                    type='text'
                                    id={id}
                                    name={id}
                                    placeholder={placeholder}
                                    value={data[id as keyof typeof data]}
                                    onChange={(e) => updateField(id as keyof typeof data, e.target.value)}
                                    className='border border-zinc-400 rounded px-3 py-2'
                                />
                            </div>
                        ))
                    }
                </form>
            </div>

            <div className='w-1/2 pl-80 pt-30'>
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
                                </tr>
                            })
                        }
                        <tr className='font-bold'>
                            <td></td>
                            <td>Total:</td>
                            <td>${getTotal().toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    )
}