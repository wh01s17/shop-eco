import React from 'react'

export const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode
}) => {
    return (
        <button
            className='mt-2 bg-green-700 text-md text-white py-1 px-3 rounded-lg hover:scale-105 cursor-pointer'
            {...props}
        >
            {children}
        </button>
    )
}