import { Container } from "@/components/layout/Container"
import { Checkout } from "@/components/payment/Checkout"
import ProtectedRoute from "@/components/ProtectedRoute"

export default async function CheckoutPage() {
    return (
        <ProtectedRoute>
            <Container>
                <Checkout />
            </Container>
        </ProtectedRoute>
    )
}

export async function generateMetadata() {
    return {
        title: 'Checkout',
        description: 'Shop-Eco Checkout'
    }
}
