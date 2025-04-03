import { Container } from "@/components/layout/Container"
import { ProductsGrid } from "@/components/products/ProductsGrid"
import fakeApiServices from '@/services/FakeApi'

interface ProductProps {
    params: Promise<{ category: string }>
}

export default async function CategoryProductPage({ params }: Awaited<ProductProps>) {
    const { category } = await params
    const products = await fakeApiServices.getProductByCategory(category)

    return (
        <Container>
            <ProductsGrid products={products} />
        </Container>
    )
}
