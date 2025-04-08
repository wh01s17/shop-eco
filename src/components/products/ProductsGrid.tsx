'use client'
import { Product } from '@/types/product'
import { CardProduct } from './CardProduct'
import React, { useMemo, useState } from 'react'
import { Loading } from '../ui/Loading'

export const ProductsGrid = ({ products }: { products: Product[] }) => {
    const [sortOption, setSortOption] = useState("None")
    const [search, setSearch] = useState("")

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
            case 'Most reviewed':
                return productsCopy.sort((a, b) => b.rating.count - a.rating.count)
            default:
                return productsCopy
        }
    }, [products, sortOption])

    const filterProducts = sortedProducts.filter(product => {
        return product.title.toLowerCase().includes(search.toLowerCase()) ||
            product.description.toLowerCase().includes(search.toLowerCase())
    })

    if (filterProducts.length === 0) return <Loading />

    return (
        <section className='flex flex-col w-full justify-center my-20 gap-3'>
            <div className=' flex justify-between items-center px-35 text-lg'>
                <div id='sort'>
                    <h1 className='font-bold'>Sort by</h1>
                    <select
                        className='border w-fit rounded-sm px-1'
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
                        <option>
                            Most reviewed
                        </option>
                    </select>
                </div>

                <div id='search'>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder='Search...'
                        className='border rounded-sm px-1'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className='flex flex-wrap w-full justify-center mb-20 gap-3'>
                {
                    filterProducts.length > 0
                        ? filterProducts.map(product => {
                            return <CardProduct key={product.id} product={product} />
                        })
                        : <h1 className='text-2xl font-bold mt-20'>Apparently we don&apos;t have what you&apos;re looking for 😥</h1>
                }
            </div>
        </section>
    )
}
