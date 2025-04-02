'use client'
import { Product } from '@/types/product'
import React, { useEffect, useState } from 'react'
import fakeApiServices from '@/services/FakeApi'
import { CardProduct } from './CardProduct'

export const BestSellers = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fakeApiServices
            .getMostValuedProducts()
            .then(data => {
                setProducts(data)
            })
    }, [])

    return (
        <section className='mx-40 mt-10'>
            <h1 className='text-3xl font-bold'>Más vendidos</h1>
            <div className="overflow-x-auto mt-5">
                <div
                    id="gridProducts"
                    className="flex gap-5 min-w-max"
                >
                    {products.map(product => (
                        <CardProduct key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>

    )
}
