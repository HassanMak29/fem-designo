import { Link } from 'react-router-dom'
// import Logo from '../icons/Logo'
import darkLogo from '../assets/shared/desktop/logo-dark.png'
import lightLogo from '../assets/shared/desktop/logo-light.png'
import { cn } from '../lib/utils'
import MaxWidthWrapper from './MaxWidthWrapper'

interface NavLinkProps {
  to: string
  text: string
  className?: string
}

function NavLink({ to, text, className }: NavLinkProps) {
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

interface HeaderProps {
  invert?: boolean
  className?: string
}

function Header({ invert, className }: HeaderProps) {
  return (
    <header>
      <MaxWidthWrapper
        className={cn('flex justify-between items-center py-16', className)}>
        <img
          src={invert ? lightLogo : darkLogo}
          alt='designo logo'
          className='h-6'
        />
        <nav>
          <ul className='flex items-center gap-10 text-sm uppercase'>
            <NavLink
              to='/about-us'
              text='Our company'
              className={invert ? 'text-white' : undefined}
            />
            <NavLink
              to='/locations'
              text='Locations'
              className={invert ? 'text-white' : undefined}
            />
            <NavLink
              to='/contact-us'
              text='Contact'
              className={invert ? 'text-white' : undefined}
            />
          </ul>
        </nav>
      </MaxWidthWrapper>
    </header>
  )
}

export default Header
