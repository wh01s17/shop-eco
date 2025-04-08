'use client'
import { Product } from '@/types/product'
import React, { useEffect, useState } from 'react'
import fakeApiServices from '@/services/FakeApi'
import { CardProduct } from './CardProduct'
import { Clothes } from './Clothes'
import { Loading } from '../ui/Loading'
import Link from 'next/link'

export const BestSellers = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fakeApiServices
            .getMostValuedProducts()
            .then(data => {
                const productsCopy = [...data]
                productsCopy.sort((a, b) => b.rating.rate - a.rating.rate)
                setProducts(productsCopy)
            })
    }, [])

    if (products.length === 0) return <Loading />

    return (
        <section className='my-40'>
            <div className='mb-30'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-5xl font-bold text-green-900 swing-soft-animation duration-200 hover:text-green-600'>
                        Best sellers <i className="ri-star-fill text-amber-300" />

                        <i className="ri-star-fill text-amber-300" />
                        <i className="ri-star-fill text-amber-300" />
                    </h1>

                    <Link href='/products'
                        className='text-3xl text-green-900 duration-200 hover:text-green-600'
                    >
                        View all products »
                    </Link>
                </div>

                <div className="overflow-x-auto mt-5">
                    <div
                        id="gridProducts"
                        className="grid grid-flow-col auto-cols-max gap-3 overflow-x-auto"
                    >
                        {
                            products.map(product => (
                                <CardProduct key={product.id} product={product} />
                            ))
                        }
                    </div>
                </div>
            </div>

            <div
                className='flex justify-evenly text-green-900
                            bg-cover bg-center'
                style={{ backgroundImage: "url('/images/bg.webp')" }}
            >
                <Clothes filter={'women\'s clothing'} />
                <Clothes filter={'men\'s clothing'} />
            </div>
        </section>
    )
}
