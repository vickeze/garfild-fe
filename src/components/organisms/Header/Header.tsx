import Image from 'next/image'
import { Input } from 'src/components/atoms'
import { Navigation } from 'src/components/molecules'

export function Header() {
    return (
        <header className='bg-base flex items-center max-w-[1100px] m-auto'>
            <Image src='/logo.png' alt='LOGO' width={150} height={150} />
            <Navigation />
            <Input />
        </header>
    )
}
