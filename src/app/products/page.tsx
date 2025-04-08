import { ProductsGrid } from "@/components/products/ProductsGrid";
import { Container } from "@/components/layout/Container";
import fakeApiServices from '@/services/FakeApi'
import { Loading } from "@/components/ui/Loading";

export default async function ProductsPage() {
    const products = await fakeApiServices.getProducts()

    if (!products) return <Loading />

    return (
        <Container>
            <ProductsGrid products={products} />
        </Container>
    )
}

export async function generateMetadata() {
    return {
        title: 'Products',
        description: 'Products Shop-Eco'
    }
}
