import Image from 'next/image'
import React from 'react'

export const Shipping = () => {
    return (
        <div className='my-40' id='about'>
            <h1 className='text-5xl font-bold text-green-900 mb-10'>
                Shipping Information
            </h1>

            <p className='text-2xl'>
                We offer both, local and worldwide shipping, to ensure that our sustainable products can reach customers everywhere. Whether you&apos;re nearby or on the other side of the globe, we strive to provide a smooth and reliable delivery service. Our packaging is eco-friendly, minimizing plastic waste to align with our commitment to sustainability. Shop with confidence and join us in making a positive impact on the planet.
            </p>

            <div className='flex flex-wrap justify-evenly my-20'>
                <Image
                    src='/images/ship-01.webp'
                    alt='ship-01'
                    width={600}
                    height={300}
                    className='rounded-lg -rotate-3'
                />

                <Image
                    src='/images/ship-02.webp'
                    alt='ship-02'
                    width={600}
                    height={300}
                    className='rounded-lg rotate-3'
                />

                <Image
                    src='/images/ship-03.webp'
                    alt='ship-03'
                    width={600}
                    height={300}
                    className='rounded-lg 3xl:-rotate-3'
                />
            </div>
        </div>
    )
}
