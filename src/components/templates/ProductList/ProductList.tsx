import { getProducts } from 'src/api/getProducts/getProducts'
import { Card } from 'src/components/organisms/Card/Card'

export async function ProductList() {
    const { products } = await getProducts()
    return (
        <div>
            {products.map(product => (
                <Card product={product} />
            ))}
        </div>
    )
}
