import { Product } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'
import React, { JSX } from 'react'
import { Button } from '../ui/Button'

export const SingleProduct = ({ product }: { product: Product }) => {
    const { title, category, image, description, price, rating } = product
    const { rate, count } = rating

    const stars = (counter: number): JSX.Element[] => {
        const output: JSX.Element[] = []

        const fullStars = Math.floor(counter)
        const hasHalf = counter % 1 !== 0

        for (let i = 0; i < fullStars; i++) {
            output.push(
                <i key={`full-${i}`} className="ri-star-fill text-amber-400" />
            )
        }

        if (hasHalf && output.length < 5) {
            output.push(
                <i key="half" className="ri-star-half-fill text-amber-400" />
            )
        }

        while (output.length < 5) {
            output.push(
                <i key={`empty-${output.length}`} className="ri-star-line text-amber-400" />
            )
        }

        return output
    }

    return (
        <article
            className='flex justify-between flex-col border-green-900 text-green-900 pt-15 pb-30 px-20'
        >
            <Link
                href="/products"
                className='text-xl mb-5 transform duration-75 hover:scale-103 origin-left transition'
            >
                « Back to products
            </Link>

            <div className='flex flex-col'>
                <Link
                    href={`/products/category/${category}`}
                    className='text-lg border p-1 rounded-lg capitalize hover:scale-103 transition mb-3 w-fit'
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

                <div className='mb-10 mt-5 border-1 border-green-900 px-5 pb-5 pt-5 rounded-xl'>
                    <h1 className='text-3xl font-bold mb-5'>
                        Description
                    </h1>
                    <p className='text-2xl'>
                        {description}
                    </p>

                    <div className="mt-10 text-2xl">
                        <b>Rating: {rate}</b>
                        <br />
                        {
                            stars(rate)
                        }
                        <br />
                        ({count} reviews)
                    </div>
                </div>
            </div>
        </article>
    )
}
