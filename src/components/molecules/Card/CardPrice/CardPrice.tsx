import { Typography } from 'src/components/atoms'

interface CardPriceProps {
    price: number
    salePrice?: number
}
export function CardPrice({ price, salePrice }: CardPriceProps) {
    return (
        <div>
            <Typography>{salePrice ?? price}</Typography>
            {!!salePrice && <Typography>{price}</Typography>}
        </div>
    )
}
