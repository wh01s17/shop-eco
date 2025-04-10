import { ProductsGrid } from "@/components/products/ProductsGrid";
import { Container } from "@/components/layout/Container";

export default async function ProductsPage() {
    return (
        <Container>
            <ProductsGrid type='all' />
        </Container>
    )
}

export async function generateMetadata() {
    return {
        title: 'Products',
        description: 'Products Shop-Eco'
    }
}
