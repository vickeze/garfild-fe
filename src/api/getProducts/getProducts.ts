import { Product } from 'src/components/organisms/Card/Card'

export function getProducts() {
    const placeholderProducts: Product[] = [
        {
            name: 'Dres',
            category: 'Fudbal',
            imageSrc: '/dres.jpeg',
            price: 65,
            salePrice: 50,
            details: 'Odlican dres za fudbal'
        },
        {
            name: 'Dre2s',
            category: 'Fudbal',
            imageSrc: '/dres.jpeg',
            price: 65,
            details: 'Odlican dres za fudbal'
        }
    ]
    return placeholderProducts
}
