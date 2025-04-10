import { Container } from "@/components/layout/Container"
import { SingleProduct } from "@/components/products/SingleProduct"

interface ProductProps {
    params: Promise<{ id: number }>
}

export default async function SingleProductPage({ params }: Awaited<ProductProps>) {
    const { id } = await params

    return (
        <Container>
            <SingleProduct idProduct={id} />
        </Container>
    )
}

export async function generateMetadata() {
    return {
        title: 'Products',
        description: 'Products Shop-Eco'
    }
}
