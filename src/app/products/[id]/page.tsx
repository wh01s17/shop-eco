import { Container } from "@/components/layout/Container"
import { SingleProduct } from "@/components/products/SingleProduct"
import fakeApiServices from '@/services/FakeApi'

interface ProductProps {
    params: Promise<{ id: number }>
}

export default async function SingleProductPage({ params }: Awaited<ProductProps>) {
    const { id } = await params
    const product = await fakeApiServices.getProductById(id)

    return (
        <Container>
            <SingleProduct product={product} />
        </Container>
    )
}
