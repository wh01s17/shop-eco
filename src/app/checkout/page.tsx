import { Checkout } from "@/components/cart/Checkout"

export default async function CheckoutPage() {
    return (
        <Checkout />
    )
}

export async function generateMetadata() {
    return {
        title: 'Checkout',
        description: 'Shop-Eco Checkout'
    }
}
