import { Product } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/Button'

export const CardProduct = ({ product }: { product: Product }) => {
    const { id, title, price, category, image, rating } = product
    const { rate, count } = rating

    return (
        <article
            className='flex justify-between flex-col border-2 border-green-900 text-green-900 p-3 rounded-2xl 
            xs:w-70 2xl:w-80 3xl:w-100'
        >
            <div>
                <Link
                    href={`/products/${category}`}
                    className='text-md'
                >
                    {category}
                </Link>


                <h3 className="font-bold text-lg mb-10">
                    <Link
                        href={`/products/${id}`}
                    >
                        {title}
                    </Link>
                </h3>

                <div className='flex flex-col items-center justify-center h-1/2'>
                    <Link
                        href={`/products/${id}`}
                    >
                        <Image
                            src={image}
                            alt={title}
                            height={180}
                            width={100}
                            className='object-contain'
                        />
                    </Link>
                </div>
            </div>

            <div>
                <p className="font-bold">${price}</p>

                <div className="mt-2">
                    Rating: {rate} <i className="ri-star-fill text-amber-400" /> ({count} reviews)
                </div>
                <Button>
                    Add to cart <i className="ri-shopping-cart-2-line" />
                </Button>
            </div>
        </article>
    )
}
