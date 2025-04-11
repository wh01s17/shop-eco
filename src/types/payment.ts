export type PaymentData = {
    cardName: string
    cardNumber: string
    expiry: string
    cvc: string
}

export type PaymentStore = {
    paymentData: PaymentData
    updatePayment: (field: keyof PaymentData, value: string) => void
    resetPayment: () => void
}

export type ShippingData = {
    fullName: string
    address: string
    city: string
    region: string
    postalCode: string
    country: string
}

export type ShippingStore = {
    shippingData: ShippingData
    updateShipping: (field: keyof ShippingData, value: string) => void
    resetShipping: () => void
}