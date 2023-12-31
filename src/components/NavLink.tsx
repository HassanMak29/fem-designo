import { Link } from 'react-router-dom'
import { cn } from '../lib/utils'

interface NavLinkProps {
  to: string
  text: string
  className?: string
}

export function NavLink({ to, text, className }: NavLinkProps) {
  return (
    <li>
      <Link
        to={to}
        className={cn(
          'hover:underline tracking-[2px] cursor-pointer',
          className
        )}>
        {text}
      </Link>
    </li>
  )
}
