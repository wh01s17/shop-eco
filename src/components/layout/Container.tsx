import React from 'react'

export const Container = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <section className='xs:mx-15 2xl:mx-40 3xl:mx-150'>
            {children}
        </section>
    )
}
