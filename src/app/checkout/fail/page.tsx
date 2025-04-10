import { Container } from "@/components/layout/Container"
import { Fail } from "@/components/payment/Fail"
import ProtectedRoute from "@/components/ProtectedRoute"

export default async function SuccessPage() {
    return (
        <ProtectedRoute>
            <Container>
                <Fail />
            </Container>
        </ProtectedRoute>
    )
}

export async function generateMetadata() {
    return {
        title: 'Fail',
        description: 'Shop-Eco Success'
    }
}
