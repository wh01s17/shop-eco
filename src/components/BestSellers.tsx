'use client'
import { Product } from '@/types/product'
import React, { useEffect, useState } from 'react'
import fakeApiServices from '@/services/FakeApi'
import { CardProduct } from './CardProduct'
import { Clothes } from './Clothes'

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
        <section className='mx-40 my-40'>
            <div className='mb-60'>
                <h1 className='text-4xl font-bold text-green-900'>Best sellers</h1>
                <div className="overflow-x-auto mt-5">
                    <div
                        id="gridProducts"
                        className="grid grid-flow-col auto-cols-max gap-5 overflow-x-auto"
                    >
                        {products.map(product => (
                            <CardProduct key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>

            <div
                className='my-20 flex justify-evenly text-green-900
                            bg-cover bg-center'
                style={{ backgroundImage: "url('/images/bg.png')" }}
            >
                <Clothes filter={'women\'s clothing'} />
                <Clothes filter={'men\'s clothing'} />
            </div>
        </section>
    )
}
