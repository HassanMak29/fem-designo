import { NavLink } from './NavLink'
import hamburger from '../assets/shared/mobile/icon-hamburger.svg'
import close from '../assets/shared/mobile/icon-close.svg'
import { useState } from 'react'

function Overlay({ clickHandler }: { clickHandler: () => void }) {
  return (
    <div
      className='absolute top-[94px] left-0 right-0 bottom-0 h-screen bg-black opacity-20 z-40'
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
              <nav className='md:hidden absolute bg-black text-white z-40 top-[94px] left-0 right-0 py-12 px-6'>
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
