export interface NavItemProps {
    link: string
    text: string
}

export function NavItem({ link, text }: NavItemProps) {
    return (
        <a
            className='inline-block mx-10 text-center py-2 hover:scale-95 cursor-default'
            href={link}
        >
            {text.toUpperCase()}
        </a>
    )
}
