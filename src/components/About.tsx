import Image from 'next/image'
import React from 'react'

export const About = () => {
    return (
        <section className='mx-40 my-20' id='about'>
            <h1 className='text-4xl font-bold text-green-900 mb-10'>
                About
            </h1>
            <p className='text-2xl'>
                At <b>Shop-Eco</b><i className="font-light ri-leaf-line" />, we believe in giving products a second life. We specialize in selling recycled clothing, electronics, and jewelry, offering a sustainable alternative for those looking for style, technology, and elegance with an eco-conscious mindset.

                Our commitment is to carefully select each item to ensure quality and functionality, reducing environmental impact and promoting responsible consumption. We believe that every piece has a story and deserves to continue in the hands of those who appreciate its design and utility.

                Whether you're looking for unique garments, refurbished electronic devices, or jewelry with history, at [Store Name] you'll find products that combine authenticity, savings, and sustainability.

                Join our community and be part of the movement towards a greener, more conscious world.
            </p>

            <div className='flex justify-evenly my-20'>
                <Image
                    src='/images/about-01.webp'
                    alt='about-01'
                    width={600}
                    height={300}
                    className='rounded-lg -rotate-3'
                />

                <Image
                    src='/images/about-03.webp'
                    alt='about-03'
                    width={600}
                    height={300}
                    className='rounded-lg rotate-3'
                />
            </div>

            <h1 className='text-3xl font-bold text-green-900 mb-10 mt-20'>The Plastic Crisis in Our Oceans</h1>
            <p>
                Every year, over 8 million tons of plastic waste end up in the ocean, harming marine life and disrupting entire ecosystems. Scientists estimate that by 2050, there could be more plastic than fish in the sea if current pollution rates continue. Microplastics have been found in 100% of marine turtles and over 90% of seabirds, illustrating the urgent need for change.

                By choosing recycled products, you contribute to reducing waste and protecting our planet's waters. Let's take action together to preserve the oceans for future generations.
            </p>
            <div className='flex justify-evenly my-20'>
                <Image
                    src='/images/about-02.webp'
                    alt='about-02'
                    width={600}
                    height={300}
                    className='rounded-lg -rotate-3'
                />

                <Image
                    src='/images/about-04.webp'
                    alt='about-04'
                    width={600}
                    height={300}
                    className='rounded-lg rotate-3'
                />
            </div>


        </section>
    )
}
