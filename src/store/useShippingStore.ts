import { ShippingStore } from '@/types/payment'
import { create } from 'zustand'

export const useShippingStore = create<ShippingStore>((set) => ({
    shippingData: {
        fullName: '',
        address: '',
        city: '',
        region: '',
        postalCode: '',
        country: '',
    },

    updateShipping: (field, value) =>
        set((state) => ({
            shippingData: {
                ...state.shippingData,
                [field]: value,
            },
        })),

    resetShipping: () =>
        set(() => ({
            shippingData: {
                fullName: '',
                address: '',
                city: '',
                region: '',
                postalCode: '',
                country: '',
            },
        })),
}))