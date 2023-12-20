import { NavItem, NavItemProps } from 'src/components/atoms/NavItem/NavItem'

export function Navigation() {
    const navigationItems: NavItemProps[] = [
        {
            link: 'home',
            text: 'home'
        },
        {
            link: 'home',
            text: 'home'
        },
        {
            link: 'home',
            text: 'home'
        },
        {
            link: 'home',
            text: 'home'
        },
        {
            link: 'home',
            text: 'home'
        }
    ]
    return (
        <nav className='bg-base flex'>
            {navigationItems.map(item => (
                <NavItem text={item.text} link={item.link} />
            ))}
        </nav>
    )
}
