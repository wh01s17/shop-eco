import { create } from 'zustand'

type ShippingData = {
    fullName: string
    address: string
    city: string
    region: string
    postalCode: string
    country: string
}

type ShippingStore = {
    data: ShippingData
    updateField: (field: keyof ShippingData, value: string) => void
    reset: () => void
}

export const useShippingStore = create<ShippingStore>((set) => ({
    data: {
        fullName: '',
        address: '',
        city: '',
        region: '',
        postalCode: '',
        country: '',
    },

    updateField: (field, value) =>
        set((state) => ({
            data: {
                ...state.data,
                [field]: value,
            },
        })),

    reset: () =>
        set(() => ({
            data: {
                fullName: '',
                address: '',
                city: '',
                region: '',
                postalCode: '',
                country: '',
            },
        })),
}))