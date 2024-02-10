import { Typography } from 'src/components/atoms'
import { CardImage, CardPrice } from 'src/components/molecules'
import { Product } from 'src/types/product'

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
                imageSrc={product.thumbnail}
                salePercentage={product.salePrice ? salePercentage : undefined}
            />
            <Typography>{product.name}</Typography>
            <CardPrice price={product.price} salePrice={10} />
        </div>
    )
}
