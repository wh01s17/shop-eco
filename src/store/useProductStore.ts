import { Product } from '@/types/product'
import { create } from 'zustand'
import fakeApi from "../services/FakeApi"

type ProductStore = {
    products: Product[]
    categories: string[]
    singleProduct: Product
    loading: boolean

    setProducts: (products: Product[]) => void
    setSingleProduct: (product: Product) => void
    getProducts: () => void
    getProductById: (id: number) => void
    getProductByCategory: (category: string) => void
    getMostValuedProducts: () => void
    getCategories: () => void
}

export const useProductStore = create<ProductStore>(
    (set) => ({
        products: [],
        categories: [],
        singleProduct: {
            id: 0,
            title: "",
            price: 0,
            description: "",
            category: "",
            image: "",
            rating: {
                rate: 0,
                count: 0
            }
        },
        loading: false,

        setProducts: (products) => set({ products }),
        setSingleProduct: (singleProduct) => set({ singleProduct }),

        getProducts: async () => {
            set({ loading: true })
            try {
                const data = await fakeApi.getProducts()
                set({ products: data, loading: false })
            } catch (error) {
                console.error("Error getting products:", error)
                throw error
            }
        },

        getProductById: async (id) => {
            set({ loading: true })
            try {
                const data = await fakeApi.getProductById(id)
                set({ singleProduct: data, loading: false })
            } catch (error) {
                console.error("Error getting a product:", error)
                throw error
            }
        },

        getProductByCategory: async (category) => {
            set({ loading: true })
            try {
                const data = await fakeApi.getProductByCategory(category)
                set({ products: data, loading: false })
            } catch (error) {
                console.error("Error getting products by category:", error)
                throw error
            }
        },


        getMostValuedProducts: async () => {
            set({ loading: true })
            try {
                const data = await fakeApi.getMostValuedProducts()
                set({ products: data, loading: false })
            } catch (error) {
                console.error("Error getting most valued products:", error)
                throw error
            }
        },

        getCategories: async () => {
            set({ loading: true })
            try {
                const data = await fakeApi.getCategories()
                set({ categories: data, loading: false })
            } catch (error) {
                console.error("Error getting categories:", error)
                throw error
            }
        },
    })
)