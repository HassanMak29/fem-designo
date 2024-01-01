import { NavLink } from './NavLink'
import hamburger from '../assets/shared/mobile/icon-hamburger.svg'
import close from '../assets/shared/mobile/icon-close.svg'
import { useState } from 'react'

function Overlay({ clickHandler }: { clickHandler: () => void }) {
  return (
    <div
      className='absolute bottom-0 left-0 right-0 top-[94px] z-40 h-screen bg-black opacity-20'
      onClick={clickHandler}
    />
  )
}

interface NavigationProps {
  isFooter: boolean | undefined
}
function Navigation({ isFooter }: NavigationProps) {
  const [open, setOpen] = useState(false)

  const openMenu = () => setOpen(true)
  const closeMenu = () => setOpen(false)

  return (
    <>
      <nav className='hidden md:block'>
        <ul className='flex items-center gap-10 text-sm uppercase'>
          <NavLink to='/about-us' text='Our company' isFooter={isFooter} />
          <NavLink to='/locations' text='Locations' isFooter={isFooter} />
          <NavLink to='/contact-us' text='Contact' isFooter={isFooter} />
        </ul>
      </nav>

      {!isFooter ? (
        <>
          <div className='md:hidden'>
            {!open ? (
              <img
                src={hamburger}
                alt='hamburger menu'
                className='cursor-pointer'
                onClick={openMenu}
              />
            ) : (
              <img
                src={close}
                alt='close icon'
                className='cursor-pointer'
                onClick={closeMenu}
              />
            )}
          </div>
          {open ? (
            <>
              <Overlay clickHandler={closeMenu} />
              <nav className='absolute left-0 right-0 top-[94px] z-40 bg-black px-6 py-12 text-white md:hidden'>
                <ul className='flex flex-col items-start gap-10 text-sm uppercase'>
                  <NavLink
                    to='/about-us'
                    text='Our company'
                    isMobileNav
                    clickHandler={closeMenu}
                  />
                  <NavLink
                    to='/locations'
                    text='Locations'
                    isMobileNav
                    clickHandler={closeMenu}
                  />
                  <NavLink
                    to='/contact-us'
                    text='Contact'
                    isMobileNav
                    clickHandler={closeMenu}
                  />
                </ul>
              </nav>
            </>
          ) : null}
        </>
      ) : null}
    </>
  )
}

export default Navigation
