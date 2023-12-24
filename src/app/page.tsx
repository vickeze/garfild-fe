import { getProducts } from 'src/api/getProducts/getProducts'

import { Card } from 'src/components/organisms/Card/Card'
import { HomeCarousel } from 'src/components/organisms/HomeCarousel/HomeCarousel'

export default function Home() {
    const products = getProducts()
    return (
        <main className='w-full px-7 pt-[67px] bg-base'>
            <HomeCarousel></HomeCarousel>
            {products.map(product => (
                <Card product={product} />
            ))}
        </main>
    )
}
