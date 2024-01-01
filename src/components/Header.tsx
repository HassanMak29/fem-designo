import { Link } from 'react-router-dom'
// import Logo from '../icons/Logo'
import darkLogo from '../assets/shared/desktop/logo-dark.png'
import lightLogo from '../assets/shared/desktop/logo-light.png'
import { cn } from '../lib/utils'
import MaxWidthWrapper from './MaxWidthWrapper'
import Navigation from './Navigation'

interface HeaderProps {
  isFooter?: boolean
  className?: string
}

function Header({ isFooter, className }: HeaderProps) {
  return (
    <header>
      <MaxWidthWrapper
        className={cn(
          'flex justify-between items-center py-[35px] md:py-16 relative',
          className
        )}>
        <Link to='/'>
          <img
            src={isFooter ? lightLogo : darkLogo}
            alt='designo logo'
            className='h-6'
          />
        </Link>
        <Navigation isFooter={isFooter} />
      </MaxWidthWrapper>
    </header>
  )
}

export default Header
