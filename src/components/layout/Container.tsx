import React from 'react'

export const Container = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <div className='xs:mx-15 2xl:mx-40 3xl:mx-150'>
            {children}
        </div>
    )
}
