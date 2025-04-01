'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export const Banner = () => {
    const images = [
        '/images/img-03.jpg',
        '/images/img-02.webp',
        '/images/img-01.webp'
    ]
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(images[0])

    const selectNewImage = (images: string[], next = true) => {
        const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0)
            : condition ? selectedIndex - 1 : images.length - 1

        setSelectedImage(images[nextIndex])
        setSelectedIndex(nextIndex)
    }

    const previous = () => {
        selectNewImage(images, false)
    }

    const next = () => {
        selectNewImage(images)
    }

    return (
        <section
            className='h-dvh aspect-video overflow-hidden flex justify-center relative w-full bg-white bg-cover bg-center'
        >
            <button
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-black text-white text-xl p-3 z-9
                            opacity-50 hover:opacity-100 cursor-pointer"
                onClick={previous}
            >
                <i className="ri-arrow-left-wide-line" />
            </button>
            <Image
                src={selectedImage}
                height={4016}
                width={6016}
                alt='img-01'
                className='w-full object-cover animate-slide-in-left'
            />
            <button
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white p-3 z-9 
                            opacity-50 hover:opacity-100 cursor-pointer"
                onClick={next}
            >
                <i className="ri-arrow-right-wide-line" />
            </button>

            <div className='absolute z-9 right-50 xs:pt-80 2xl:pt-100 3xl:pt-200 font-bold animate-slide-in-right'>
                <h2 className='text-white xs:text-4xl 2xl:text-6xl 3xl:text-[6rem]'>
                    Reutilizables, ecológicos,
                </h2>
                <h2 className='text-green-700 xs:text-7xl 2xl:text-9xl 3xl:text-[15rem] font-bold'>
                    conscientes
                </h2>
            </div>
        </section>
    )
}
