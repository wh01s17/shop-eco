import { Product } from '@/types/product'
import Image from 'next/image'
import React from 'react'

export const CardProduct = ({ product }: { product: Product }) => {
    const { title, price, category, image, rating } = product
    const { rate, count } = rating

    return (
        <article
            className='flex justify-between flex-col border-2 p-5 rounded-2xl w-[15%]'
        >
            <div>
                <p className='text-md capitalize'>{category}</p>
                <h3 className="font-bold text-lg mb-10">{title}</h3>

                <div className='flex flex-col items-center h-1/2'>
                    <Image
                        src={image}
                        alt={title}
                        height={180}
                        width={100}
                        className='object-contain'
                    />
                </div>
            </div>

            <div>
                <p className="text-black font-bold">${price}</p>

                <div className="mt-2">
                    Rating: {rate} <i className="ri-star-fill text-amber-300" />
                    ({count} reviews)
                </div>
            </div>
        </article>
    )
}
