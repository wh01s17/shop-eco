'use client'
import { ProductsGrid } from "@/components/products/ProductsGrid";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import fakeApiServices from '@/services/FakeApi'

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fakeApiServices
            .getProducts()
            .then(data => {
                setProducts(data)
            })
    }, [])

    return (
        <Container>
            <ProductsGrid products={products} />
        </Container>
    );
}
