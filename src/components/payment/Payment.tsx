import { useCartStore } from '@/store/useCartStore'
import { usePaymentStore } from '@/store/usePaymentStore'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Payment = () => {
    const { paymentData, updatePayment } = usePaymentStore()
    const { items, getTotal } = useCartStore()

    const formData = [
        { id: 'cardName', label: 'Cardholder Name', placeholder: 'John Doe' },
        { id: 'cardNumber', label: 'Card Number', placeholder: '1234 5678 9012 3456' },
        { id: 'expiry', label: 'Expiration Date', placeholder: 'MM/YY' },
        { id: 'cvc', label: 'CVC', placeholder: '123' },
    ]

    return (
        <section className='flex pt-20'>
            <div className='w-1/2'>
                <form className='grid gap-4 max-w-xl'>
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
                                    value={paymentData[id as keyof typeof paymentData]}
                                    onChange={(e) => updatePayment(id as keyof typeof paymentData, e.target.value)}
                                    className='border border-zinc-400 rounded px-3 py-2'
                                />
                            </div>
                        ))
                    }
                </form>
            </div>

            <div className='w-1/2 pl-70 pt-10'>
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
        </section>
    )
}
