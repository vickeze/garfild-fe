import Image from 'next/image'
import { NavItemProps } from 'src/components/atoms'
import { NavDirection, Navigation } from 'src/components/molecules'

export function Footer() {
    const categories: NavItemProps[] = [
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
        <div className='bg-primary pt-10 px-10 pb-10'>
            <Image
                src='/logo.png'
                alt='LOGO'
                width={150}
                height={150}
                className='grayscale invert'
            />
            <div className='flex justify-around '>
                <Navigation
                    navItems={categories}
                    direction={NavDirection.vertical}
                    title='footer'
                />
                <Navigation
                    navItems={categories}
                    direction={NavDirection.vertical}
                    title='footer'
                />
                <Navigation
                    navItems={categories}
                    direction={NavDirection.vertical}
                    title='footer'
                />
            </div>
        </div>
    )
}
