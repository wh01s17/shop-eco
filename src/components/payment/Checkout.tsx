'use client'
import React, { useState } from 'react'
import { Detail } from './Detail'
import { Shipping } from './Shipping'
import { Payment } from './Payment'
import { Summary } from './Summary'
import { Button } from '../ui/Button'
import Link from 'next/link'

const CHECKOUT_STEPS = [
    { id: 'detail', component: Detail, label: 'Details' },
    { id: 'shipping', component: Shipping, label: 'Shipping' },
    { id: 'payment', component: Payment, label: 'Payment' },
    { id: 'summary', component: Summary, label: 'Order Summary' }
]

export const Checkout = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    const isFirstStep = currentStepIndex === 0
    const isLastStep = currentStepIndex === CHECKOUT_STEPS.length - 1

    const goNext = () => {
        if (!isLastStep) {
            setCurrentStepIndex(prev => prev + 1)
        } else {
            console.log('Checkout completed!')
        }
    }

    const goBack = () => {
        if (!isFirstStep) {
            setCurrentStepIndex(prev => prev - 1)
        }
    }

    const CurrentStepComponent = CHECKOUT_STEPS[currentStepIndex].component

    return (
        <section className='py-10 text-green-900'>
            <h1 className='text-4xl font-bold mb-10'><u>Checkout</u></h1>
            <div className="flex justify-between mb-6 mt-4">
                {
                    CHECKOUT_STEPS.map((step, index) => (
                        <div
                            key={step.id}
                            className={`flex items-center ${index <= currentStepIndex ? 'text-green-900 font-bold' : 'text-gray-400'}`}
                        >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 
                                    ${index < currentStepIndex
                                    ? 'bg-green-900 text-white'
                                    : index === currentStepIndex ? 'border-2 border-green-900' : 'border-2 border-gray-200'}`}
                            >
                                {index < currentStepIndex ? '✓' : index + 1}
                            </div>
                            <span>{step.label}</span>
                        </div>
                    ))
                }
            </div>

            <CurrentStepComponent />
            <div className='flex justify-between text-2xl mt-20'>
                {
                    !isFirstStep
                        ? <Button
                            style={{
                                backgroundColor: "white",
                                color: "green",
                                border: "1px solid green"
                            }}
                            onClick={goBack}
                        >
                            « Back
                        </Button>
                        : <span></span>
                }

                {
                    !isLastStep
                        ? <Button
                            onClick={goNext}
                        >
                            Next »
                        </Button>
                        : <Link
                            href='/checkout/success'
                            className='mt-2 bg-green-700 text-md text-white py-1 px-3 rounded-lg hover:scale-105'
                        >
                            Finish ✓
                        </Link>
                }
            </div>
        </section>
    )
}
