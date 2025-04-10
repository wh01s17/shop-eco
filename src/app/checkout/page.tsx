import { Checkout } from "@/components/payment/Checkout"
import ProtectedRoute from "@/components/ProtectedRoute"

export default async function CheckoutPage() {
    return (
        <ProtectedRoute>
            <Checkout />
        </ProtectedRoute>
    )
}

export async function generateMetadata() {
    return {
        title: 'Checkout',
        description: 'Shop-Eco Checkout'
    }
}
