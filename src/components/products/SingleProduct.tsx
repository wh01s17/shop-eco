'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { JSX, useEffect } from 'react'
import { Button } from '../ui/Button'
import { useAuth } from '@/context/AuthContext'
import { useCartStore } from '@/store/useCartStore'
import { toast } from 'sonner'
import { useProductStore } from '@/store/useProductStore'
import { Loading } from '../ui/Loading'

export const SingleProduct = ({ idProduct }: { idProduct: number }) => {
    const { singleProduct, getProductById, loading } = useProductStore()

    const { id, title, category, image, description, price, rating } = singleProduct
    const { rate, count } = rating
    const { currentUser } = useAuth()
    const addItem = useCartStore(state => state.addItem)

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

    const handleAdd = async () => {
        if (currentUser?.email) {
            try {
                const data = {
                    id: id.toString(),
                    title,
                    price,
                    image,
                    count: 1
                }

                await addItem(data, currentUser.email)
                toast.success('Item added to shopping cart')
            } catch (error) {
                console.log(error)
                toast.error('Error adding item to cart')
            }
        } else {
            toast.error('Must be logged to add an item to shopping cart')
        }
    }

    useEffect(() => {
        getProductById(idProduct)
    }, [idProduct, getProductById])

    if (loading || !singleProduct) return <Loading />

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
                    {image ? (
                        <Image
                            src={image}
                            alt={title || 'Product image'}
                            height={1000}
                            width={500}
                            className='object-contain'
                        />
                    ) : (
                        <div className="h-[500px] w-[500px] flex items-center justify-center">
                            <Loading />
                        </div>
                    )}
                </div>
            </div>

            <div className=''>
                <p className="font-bold text-3xl">${price}</p>

                <Button
                    onClick={handleAdd}
                >
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
