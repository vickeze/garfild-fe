import { Typography } from 'src/components/atoms'
import { CardImage, CardPrice } from 'src/components/molecules'

export type Product = {
    price: number
    salePrice?: number
    name: string
    details: string
    category: string
    imageSrc: string
}
interface CardProps {
    product: Product
}

export function Card({ product }: CardProps) {
    const salePercentage = (
        (1 - (product.salePrice ?? 0) / product.price) *
        100
    ).toPrecision(2)
    return (
        <div>
            <CardImage
                imageSrc={product.imageSrc}
                salePercentage={product.salePrice ? salePercentage : undefined}
            />
            <Typography>{product.name}</Typography>
            <CardPrice price={product.price} salePrice={product.salePrice} />
        </div>
    )
}
