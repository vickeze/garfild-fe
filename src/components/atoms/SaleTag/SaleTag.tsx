interface SaleTagProps {
    salePercentage?: string
}
export function SaleTag({ salePercentage }: SaleTagProps) {
    return (
        <div className='absolute right-2 bg-red-600 text-white z-10 py-1 px-2'>
            {salePercentage}
        </div>
    )
}
