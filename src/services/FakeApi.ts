import { Product } from '@/types/product'
import axios from 'axios'

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

const getMostValuedProducts = async (): Promise<Product[]> => {
    const request = axios.get<Product[]>(`${baseUrl}products`)
    const response = await request

    return response.data.filter(product => product.rating.rate > 4);
}

const getCategories = async (): Promise<string[]> => {
    const request = axios.get<string[]>(`${baseUrl}products/categories`)
    const response = await request

    return response.data
}

export default {
    getProducts,
    getProductById,
    getCategories,
    getProductByCategory,
    getMostValuedProducts
}