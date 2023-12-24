import { Typography } from 'src/components/atoms'
import { NavItem, NavItemProps } from 'src/components/atoms/NavItem/NavItem'
interface NavigationProps {
    navItems: NavItemProps[]
    direction: NavDirection
    title?: string
}
export const enum NavDirection {
    horizontal = 'flex-row',
    vertical = 'flex-col'
}

export function Navigation({ navItems, direction, title }: NavigationProps) {
    return (
        <nav className={`flex ${direction}`}>
            {!!title && <Typography>{title}</Typography>}
            {navItems.map(item => (
                <NavItem text={item.text} link={item.link} />
            ))}
        </nav>
    )
}
