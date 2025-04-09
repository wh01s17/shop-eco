export interface CartItem {
    id: string
    title: string
    price: number
    image: string
    count: number
}

export interface ShoppingCart {
    email: string
    items: CartItem[]
    totalPrice?: number
    totalItems?: number
    lastUpdated?: Date
}