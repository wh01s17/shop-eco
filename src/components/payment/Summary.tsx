'use client'
import { useCartStore } from '@/store/useCartStore'
import { usePaymentStore } from '@/store/usePaymentStore'
import { useShippingStore } from '@/store/useShippingStore'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Summary = () => {
    const { getItems } = useCartStore()
    const { shippingData: shipping } = useShippingStore()
    const { paymentData: payment } = usePaymentStore()
    const items = getItems()

    const subtotal = items.reduce((sum, item) => sum + item.price * item.count, 0)
    const shippingCost = 0
    const total = subtotal + shippingCost

    return (
        <section className='pt-20 max-w-2xl mx-auto'>
            <table className='w-full text-left divide-y divide-zinc-700 mb-6 [&>tbody>tr>td]:py-4 [&>tbody>tr>td]:align-middle'>
                <thead>
                    <tr className='text-zinc-400 text-sm uppercase'>
                        <th>Item</th>
                        <th>Qty</th>
                        <th className='text-right'>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td className='flex items-center gap-4'>
                                <Image src={item.image} alt={item.title} width={60} height={60} className='object-contain' />
                                <Link href={`/products/${item.id}`} className='hover:underline'>
                                    {item.title}
                                </Link>
                            </td>
                            <td>{item.count}</td>
                            <td className='text-right'>${(item.count * item.price).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className='text-right space-y-1 text-lg mb-6'>
                <div className='flex justify-between'>
                    <span className='text-zinc-500'>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-zinc-500'>Shipping</span>
                    <span>${shippingCost.toFixed(2)}</span>
                </div>
                <div className='flex justify-between font-bold border-t border-zinc-700 pt-3 text-xl'>
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>

            <div className='mt-8 text-left border-t border-zinc-700 pt-6 space-y-4'>
                <div>
                    <h3 className='text-xl font-semibold mb-2'>Shipping Info</h3>
                    <p><strong>Name:</strong> {shipping.fullName}</p>
                    <p><strong>Address:</strong> {shipping.address}</p>
                    <p><strong>City:</strong> {shipping.city}</p>
                    <p><strong>Region:</strong> {shipping.region}</p>
                    <p><strong>ZIP:</strong> {shipping.postalCode}</p>
                </div>

                <div>
                    <h3 className='text-xl font-semibold mb-2'>Payment Info</h3>
                    <p><strong>Cardholder:</strong> {payment.cardName}</p>
                    <p><strong>Card Number:</strong> •••• •••• •••• {payment.cardNumber.slice(-4)}</p>
                    <p><strong>Expiry:</strong> {payment.expiry}</p>
                </div>
            </div>
        </section>
    )
}