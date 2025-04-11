'use client'
import React, { useState } from 'react'
import { Detail } from './Detail'
import { Shipping } from './Shipping'
import { Payment } from './Payment'
import { Summary } from './Summary'
import { Button } from '../ui/Button'
import Link from 'next/link'
import { useShippingStore } from '@/store/useShippingStore'
import { toast } from 'sonner'
import { usePaymentStore } from '@/store/usePaymentStore'
import { useCartStore } from '@/store/useCartStore'

const CHECKOUT_STEPS = [
    { id: 'detail', component: Detail, label: 'Details' },
    { id: 'shipping', component: Shipping, label: 'Shipping' },
    { id: 'payment', component: Payment, label: 'Payment' },
    { id: 'summary', component: Summary, label: 'Order Summary' }
]

export const Checkout = () => {
    const { items } = useCartStore()
    const { shippingData } = useShippingStore()
    const { paymentData } = usePaymentStore()
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    const isFirstStep = currentStepIndex === 0
    const isLastStep = currentStepIndex === CHECKOUT_STEPS.length - 1

    const validateInput = (): boolean => {
        if (currentStepIndex === 0) {
            if (items.length === 0) {
                toast.error('Must add some products')
                return false
            }
        } else if (currentStepIndex === 1) {
            if (shippingData.address.length < 3) {
                toast.error('Address invalid')
                return false
            }

            if (shippingData.city.length < 3) {
                toast.error('City invalid')
                return false
            }

            if (shippingData.country.length < 3) {
                toast.error('Country invalid')
                return false
            }

            if (shippingData.fullName.length < 3) {
                toast.error('Full name invalid')
                return false
            }

            if (shippingData.postalCode.length < 5) {
                toast.error('Posta code invalid')
                return false
            }

            if (shippingData.region.length < 5) {
                toast.error('Region/State invalid')
                return false
            }
        } else if (currentStepIndex === 2) {
            if (paymentData.cardName.length < 6) {
                toast.error('Cardholder Name invalid')
                return false
            }

            const sanitizedNumber = paymentData.cardNumber.replace(/\s+/g, '')
            if (!/^\d{16}$/.test(sanitizedNumber)) {
                toast.error('Card number must be 16 digits')
                return false
            }

            if (!/^\d{2}\/\d{2}$/.test(paymentData.expiry)) {
                toast.error('Expiry must be in MM/YY format')
                return false
            } else {
                const [monthStr, yearStr] = paymentData.expiry.split('/')
                const month = parseInt(monthStr, 10)
                const year = parseInt(`20${yearStr}`, 10)

                const now = new Date()
                const currentYear = now.getFullYear()
                const currentMonth = now.getMonth() + 1

                if (month < 1 || month > 12 || year < currentYear || (year === currentYear && month < currentMonth)) {
                    toast.error('Card expiry is invalid or in the past')
                    return false
                }
            }

            if (!/^\d{3,4}$/.test(paymentData.cvc)) {
                toast.error('CVC must be 3 or 4 digits')
                return false
            }
        }
        return true
    }

    const goNext = () => {
        if (validateInput()) {
            if (!isLastStep) {
                setCurrentStepIndex(prev => prev + 1)
            } else {
                console.log('Checkout completed!')
            }
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
                            className={`flex items-center text-2xl ${index <= currentStepIndex ? 'text-green-900 font-bold' : 'text-gray-400'}`}
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

            <div className='flex justify-between text-2xl mt-10'>
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
