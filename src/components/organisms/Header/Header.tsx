import Image from 'next/image'
import { Input, NavItemProps } from 'src/components/atoms'
import { Navigation } from 'src/components/molecules'
import { NavDirection } from 'src/components/molecules'
export function Header() {
    const navigationItems: NavItemProps[] = [
        {
            link: '/',
            text: 'Izdvojeno'
        },
        {
            link: '/fudbal',
            text: 'Fudbal'
        },
        {
            link: '/kosarka',
            text: 'Kosarka'
        },
        {
            link: '/rukomet',
            text: 'Rukomet'
        },
        {
            link: '/o-nama',
            text: 'O nama'
        }
    ]
    return (
        <header className='bg-base flex items-center fixed py-3 justify-around w-full drop-shadow-md z-30'>
            <Image src='/logo.png' alt='LOGO' width={150} height={150} />
            <Navigation
                navItems={navigationItems}
                direction={NavDirection.horizontal}
            />
            <Input />
        </header>
    )
}
