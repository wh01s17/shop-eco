import { Container } from "@/components/layout/Container"
import { Success } from "@/components/payment/Success"
import ProtectedRoute from "@/components/ProtectedRoute"

export default async function SuccessPage() {
    return (
        <ProtectedRoute>
            <Container>
                <Success />
            </Container>
        </ProtectedRoute>
    )
}

export async function generateMetadata() {
    return {
        title: 'Success',
        description: 'Shop-Eco Success'
    }
}
