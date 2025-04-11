'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useIsMounted } from '@/hooks/useIsMounted'
import { Loading } from '../ui/Loading'

export const Fail = () => {
    const router = useRouter()
    const isMounted = useIsMounted();

    if (!isMounted) return <Loading />

    return (
        <section className='pb-30 pt-10'>
            <div className="max-w-xl mx-auto p-6 mt-20 bg-white shadow-md rounded-2xl text-center">
                <div className="flex flex-col items-center mb-6">
                    <i className="ri-close-circle-fill text-red-600 text-5xl mb-3"></i>
                    <h1 className="text-3xl font-bold text-gray-800">Payment Failed</h1>
                    <p className="text-gray-600 mt-2">Oops! Something went wrong while processing your payment.</p>
                </div>

                <div className="mt-6 space-y-3">
                    <button
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-xl transition cursor-pointer"
                        onClick={() => router.back()}
                    >
                        Try Again
                    </button>

                    <button
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-xl transition cursor-pointer"
                        onClick={() => router.push('/')}
                    >
                        Go to Home
                    </button>
                </div>
            </div>
        </section>
    )
}
