'use server'
import { Product } from 'src/types/product'
import { medusaClient } from '../config'

export async function getProducts(): Promise<{
    products: Product[]
}> {
    const { products } = await medusaClient.products.list().then(res => res)
    const transformedProducts = products.map((product: any) => {
        return {
            name: product.title,
            description: product.description,
            thumbnail: product.thumbnail,
            images: product.images,
            category: '',
            price: product.variants[0].prices[0].amount / 100
        }
    })
    return {
        products: transformedProducts
    }
}
