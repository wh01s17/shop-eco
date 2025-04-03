'use client'
import { Product } from '@/types/product'
import { CardProduct } from './CardProduct'
import React, { useMemo, useState } from 'react'

export const ProductsGrid = ({ products }: { products: Product[] }) => {
    const [sortOption, setSortOption] = useState("None")

    const handleSortOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        setSortOption(e.target.value)
    }

    const sortedProducts = useMemo(() => {
        if (!products) return []

        const productsCopy = [...products]

        switch (sortOption) {
            case 'Name: A to Z':
                return productsCopy.sort((a, b) => a.title.localeCompare(b.title))
            case 'Name: Z to A':
                return productsCopy.sort((a, b) => b.title.localeCompare(a.title))
            case 'Price: Low to High':
                return productsCopy.sort((a, b) => a.price - b.price)
            case 'Price: High to Low':
                return productsCopy.sort((a, b) => b.price - a.price)
            case 'Top rated':
                return productsCopy.sort((a, b) => b.rating.rate - a.rating.rate)
            default:
                return productsCopy
        }
    }, [products, sortOption])

    if (!products) return null

    return (
        <section className='flex flex-col w-full justify-center my-20 gap-3'>
            <div className=' flex flex-col pl-35 text-lg'>
                <h1 className='font-bold'>Sort by</h1>
                <select
                    className='border w-fit rounded-lg px-1'
                    value={sortOption}
                    onChange={handleSortOption}
                >
                    <option>
                        None
                    </option>
                    <option>
                        Name: A to Z
                    </option>
                    <option>
                        Name: Z to A
                    </option>
                    <option>
                        Price: Low to High
                    </option>
                    <option>
                        Price: High to Low
                    </option>
                    <option>
                        Top rated
                    </option>
                </select>
            </div>

            <div className='flex flex-wrap w-full justify-center mb-20 gap-3'>
                {
                    sortedProducts.map(product => {
                        return <CardProduct key={product.id} product={product} />
                    })
                }
            </div>
        </section>
    )
}
