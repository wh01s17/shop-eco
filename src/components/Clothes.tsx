'use client'
import { Product } from '@/types/product'
import React, { useEffect, useRef, useState } from 'react'
import fakeApiServices from '@/services/FakeApi'
import Image from 'next/image'
import Link from 'next/link'

export const Clothes = ({ filter }: { filter: string }) => {
    const [products, setProducts] = useState<Product[]>([])
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        fakeApiServices
            .getProductByCategory(filter)
            .then(data => {
                setProducts(data)
            })
    }, [filter])

    useEffect(() => {
        let currentIndex = 0
        const interval = setInterval(() => {
            if (scrollRef.current && products.length > 0) {
                currentIndex = (currentIndex + 1) % products.length
                const scrollPosition = currentIndex * scrollRef.current.offsetWidth

                scrollRef.current.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                })
            }
        }, 2000)

        return () => clearInterval(interval)
    }, [products.length])

    if (products.length < 1) return null

    return (
        <div className='my-8 xs:w-1/3 3xl:w-1/4 mx-auto flex flex-col items-center py-20'>
            <h1 className='text-3xl font-bold text-green-900 mb-15 capitalize
                            [text-shadow:2px_2px_0px_white,-2px_2px_0px_white,2px_-2px_0px_white,-2px_-2px_0px_white]'>
                {filter}
            </h1>

            <div
                ref={scrollRef}
                className='flex w-full h-[600px] overflow-x-hidden snap-x snap-mandatory scrollbar-hide bg-white rounded-lg'
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {
                    products.map((product, index) => {
                        return <div
                            key={product.id}
                            className="min-w-full h-full flex-shrink-0 snap-center relative"
                        >
                            <Link
                                href={`/products/${product.id}`}
                            >
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className='object-contain'
                                    priority={index === 0}
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-green-900 bg-opacity-50 text-white p-4">
                                    <h3 className="text-lg font-medium">{product.title}</h3>
                                    <p className="text-xl font-bold">${product.price}</p>
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
