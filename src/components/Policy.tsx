import React from 'react'
import { Container } from './layout/Container'
import Image from 'next/image'

export const Policy = () => {
    return (
        <Container>
            <section className="flex flex-col justify-center pt-20 pb-40 text-green-900 text-2xl relative [&>h1]:pb-50">
                <u>
                    <h1 className='text-4xl font-bold w-full text-center'>
                        Shop-Eco<i className="font-light ri-leaf-line swing-animation" /> Sustainability & Usage Policy
                    </h1>
                </u>

                <h2 className='font-bold text-3xl mt-10 mb-3'>1. Our Mission</h2>
                <p>
                    At <strong><u>Shop-Eco</u><i className="font-light ri-leaf-line" /></strong>, our core mission is to promote sustainable living through the reuse and responsible consumption of products. We specialize in curated recycled clothing, electronics, and jewelry—offering you style, function, and elegance without compromising the planet.
                </p>

                <p>
                    By choosing our items, you&apos;re not only investing in quality but also reducing waste, extending product lifecycles, and supporting ethical consumption habits.
                </p>

                <h2 className='font-bold text-3xl mt-10 mb-3'>2. Product Philosophy</h2>
                <ul>
                    <li>All our products are <strong>recycled</strong>, <strong>refurbished</strong>, or <strong>pre-owned</strong>, handpicked for their durability and potential to serve a second life.</li>
                    <li>Each item undergoes careful <strong>quality control</strong> to ensure it meets our standards of function and aesthetics.</li>
                    <li>Some products may have minor signs of previous use, which we believe adds to their character and uniqueness.</li>
                </ul>

                <h2 className='font-bold text-3xl mt-10 mb-3'>3. Environmental Commitment</h2>
                <ul>
                    <li>We use <strong>recyclable or compostable packaging materials</strong> for every order.</li>
                    <li><u>Shop-Eco</u><i className="font-light ri-leaf-line" /> supports initiatives that tackle the <strong>plastic crisis in our oceans</strong>.</li>
                    <li>We encourage customers to <strong>reuse or recycle our packaging</strong> whenever possible.</li>
                </ul>

                <h2 className='font-bold text-3xl mt-10 mb-3'>4. Shipping Policy</h2>
                <ul>
                    <li>We ship <strong>locally and internationally</strong> to reach conscious consumers worldwide.</li>
                    <li>All shipments use <strong>eco-friendly materials</strong>, and we aim to consolidate orders when possible to reduce carbon emissions.</li>
                    <li>Shipping times vary by location, but our goal is to minimize environmental impact while providing reliable delivery.</li>
                </ul>

                <h2 className='font-bold text-3xl mt-10 mb-3'>5. Returns & Exchanges</h2>
                <ul>
                    <li><strong>No returns</strong> for change of mind, due to the nature of our curated items.</li>
                    <li>If a product arrives <strong>defective or not as described</strong>, we offer <strong>exchanges or refunds</strong> within 14 days of receipt.</li>
                    <li>Please review all product details carefully before purchasing.</li>
                </ul>

                <h2 className='font-bold text-3xl mt-10 mb-3'>6. Join the Movement</h2>
                <p>
                    By supporting <u>Shop-Eco</u><i className="font-light ri-leaf-line" />, you&apos;re becoming part of a <strong>community that values sustainability, individuality, and environmental responsibility</strong>. Every purchase is a step toward reducing waste and reshaping the future of retail.
                </p>
                <p>
                    Together, we can give products a second life—and the planet a second chance.
                </p>

                <p className="mt-20 text-3xl text-center font-semibold">
                    Thank you for choosing <u>Shop-Eco</u><i className="font-light ri-leaf-line" />. Your actions matter, and your support helps create a cleaner, more thoughtful world.
                </p>

                <div className='flex flex-col justify-center items-center mx-auto mt-20 w-7/10'>
                    <Image
                        src='/images/policy-01.webp'
                        alt='policy-01'
                        width={4217}
                        height={2372}
                        className='rounded-xl shadow-2xl shadow-black/99 duration-300 swing-soft-animation'
                    />
                </div>
            </section>
        </Container>
    )
}
