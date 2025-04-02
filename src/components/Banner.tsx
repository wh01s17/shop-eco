'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

export const Banner = () => {
    const images = [
        '/images/img-01.webp',
        '/images/img-04.webp',
        '/images/img-02.webp',
        '/images/img-05.webp',
        '/images/img-03.webp'
    ]

    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let currentIndex = 0
        const interval = setInterval(() => {
            if (scrollRef.current) {
                currentIndex = (currentIndex + 1) % images.length
                const scrollPosition = currentIndex * scrollRef.current.offsetWidth
                scrollRef.current.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                })
            }
        }, 5000)

        return () => clearInterval(interval)
    }, [images.length])

    return (
        <div
            ref={scrollRef}
            className='flex w-full h-dvh overflow-x-auto snap-x snap-mandatory scrollbar-hide'
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {
                images.map((img, index) => {
                    return (
                        <div key={index} className='w-full flex-shrink-0 snap-center'>
                            <Image
                                src={img}
                                alt={`Imagen ${index + 1}`}
                                height={800}
                                width={1600}
                                className='w-full h-full object-cover'
                                priority={index === 0}
                            />
                        </div>
                    )
                })
            }
            <div
                className='absolute z-9 right-50 xs:pt-80 2xl:pt-100 3xl:pt-200 font-bold animate-slide-in-right'
            >
                <h2 className='text-white xs:text-4xl 2xl:text-6xl 3xl:text-[6rem]'>
                    Reusable, eco-friendly,
                </h2>
                <h2
                    className='text-green-700 xs:text-7xl 2xl:text-9xl 3xl:text-[15rem]
                                [text-shadow:2px_2px_0px_white,-2px_2px_0px_white,2px_-2px_0px_white,-2px_-2px_0px_white]'
                >
                    conscious
                </h2>
            </div>
        </div>
    )
}
