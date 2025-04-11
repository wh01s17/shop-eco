import { PaymentStore } from '@/types/payment'
import { create } from 'zustand'

export const usePaymentStore = create<PaymentStore>((set) => ({
    paymentData: {
        cardName: '',
        cardNumber: '',
        expiry: '',
        cvc: '',
    },

    updatePayment: (field, value) =>
        set((state) => ({
            paymentData: {
                ...state.paymentData,
                [field]: value,
            },
        })),

    resetPayment: () =>
        set(() => ({
            paymentData: {
                cardName: '',
                cardNumber: '',
                expiry: '',
                cvc: '',
            },
        })),
}))