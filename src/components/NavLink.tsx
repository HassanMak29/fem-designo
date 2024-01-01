import { Link } from 'react-router-dom'
import { cn } from '../lib/utils'

interface NavLinkProps {
  to: string
  text: string
  className?: string
  isFooter?: boolean
  isMobileNav?: boolean
  clickHandler?: () => void
}

export function NavLink({
  to,
  text,
  className,
  isFooter,
  isMobileNav,
  clickHandler,
}: NavLinkProps) {
  return (
    <li>
      <Link
        to={to}
        className={cn(
          'hover:underline tracking-[2px] cursor-pointer',
          { 'text-white': isFooter },
          {
            'text-[24px] leading-[25px] tracking-[2px]':
              !isFooter && isMobileNav,
          },
          className
        )}
        onClick={clickHandler}>
        {text}
      </Link>
    </li>
  )
}
