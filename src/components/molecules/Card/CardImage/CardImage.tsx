import Image from 'next/image'
import { SaleTag } from 'src/components/atoms'
interface CardImageProps {
    imageSrc: string
    salePercentage?: string
}
export function CardImage({ imageSrc, salePercentage }: CardImageProps) {
    return (
        <div className='w-[250px] h-[250px] overflow-hidden relative'>
            {!!salePercentage && (
                <SaleTag salePercentage={`${salePercentage}%`}></SaleTag>
            )}
            <Image
                src={imageSrc}
                alt='Artikl'
                width={250}
                height={250}
                className='transition-transform duration-[250ms] hover:scale-105'
            />
        </div>
    )
}
