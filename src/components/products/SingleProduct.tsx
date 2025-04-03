import { Product } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/Button'

export const SingleProduct = ({ product }: { product: Product }) => {
    const { id, title, category, image, description, price, rating } = product
    const { rate, count } = rating
    return (
        <article
            className='flex justify-between flex-col border-green-900 text-green-900 pt-15 pb-30 px-20'
        >
            <div>
                <Link
                    href={`/products/${category}`}
                    className='text-xl'
                >
                    {category}
                </Link>

                <h3 className="font-bold text-4xl mb-10">
                    {title}
                </h3>

                <div className='flex flex-col items-center h-1/2 mb-20'>
                    <Image
                        src={image}
                        alt={title}
                        height={1000}
                        width={500}
                        className='object-contain'
                    />
                </div>
            </div>

            <div className=''>
                <p className="font-bold text-3xl">${price}</p>

                <Button>
                    Add to cart <i className="ri-shopping-cart-2-line" />
                </Button>

                <div className='mb-10 mt-5 border-1 border-green-900 px-5 pb-10 pt-5 rounded-xl'>
                    <h1 className='text-3xl font-bold mb-5'>
                        Description
                    </h1>
                    <p className='text-2xl'>
                        {description}
                    </p>
                </div>

                <div className="mt-2 text-2xl">
                    Rating: {rate} <i className="ri-star-fill text-amber-300" />
                    ({count} reviews)
                </div>
            </div>
        </article>
    )
}
