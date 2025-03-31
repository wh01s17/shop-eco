import axios from 'axios'

interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number,
        count: number
    }
}

const baseUrl = 'https://fakestoreapi.com/'

const getProducts = async (): Promise<Product[]> => {
    const request = axios.get<Product[]>(`${baseUrl}products`)
    const response = await request

    return response.data
}

const getProductById = async (id: number): Promise<Product> => {
    const request = axios.get<Product>(`${baseUrl}products/${id}`)
    const response = await request

    return response.data
}

const getProductByCategory = async (category: string): Promise<Product[]> => {
    const request = axios.get<Product[]>(`${baseUrl}products/category/${category}`)
    const response = await request

    return response.data
}

const getCategories = async (): Promise<string[]> => {
    const request = axios.get<string[]>(`${baseUrl}products/categories`)
    const response = await request

    return response.data
}

// const getCategories = async (): Promise<string[]> => {
//     const request = axios.get<Product[]>(`${baseUrl}products`)
//     const response = await request
//     let categoriesSet = new Set<string>()

//     response.data.map(product => {
//         categoriesSet.add(product.category)
//     })

//     const categories = Array.from(categoriesSet).sort()

//     return categories
// }

export default {
    getProducts,
    getProductById,
    getCategories,
    getProductByCategory,
}