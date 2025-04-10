import { Container } from "@/components/layout/Container"
import { ProductsGrid } from "@/components/products/ProductsGrid"
import { Metadata } from "next"

interface ProductProps {
    params: Promise<{ category: string }>
}

export default async function CategoryProductPage({ params }: Awaited<ProductProps>) {
    const { category } = await params

    return (
        <Container>
            <ProductsGrid type='category' category={category} />
        </Container>
    )
}

export async function generateMetadata({ params }: Awaited<ProductProps>): Promise<Metadata> {
    const { category } = await params
    const categorySpaced = category.replace(/%20/g, ' ')
    const categoryCapitalized = categorySpaced.charAt(0).toUpperCase() + categorySpaced.slice(1).toLowerCase()

    if (!categoryCapitalized) {
        return {
            title: 'Category not found',
            description: 'Category doesn\'t exists'
        }
    }

    return {
        title: categoryCapitalized,
        description: categoryCapitalized || 'Category'
    }
}
