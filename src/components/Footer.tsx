import Header from './Header'
import MaxWidthWrapper from './MaxWidthWrapper'
import iconFacebook from '../assets/shared/desktop/icon-facebook.svg'
import iconYoutube from '../assets/shared/desktop/icon-youtube.svg'
import iconTwitter from '../assets/shared/desktop/icon-twitter.svg'
import iconPintrest from '../assets/shared/desktop/icon-pinterest.svg'
import iconInstagram from '../assets/shared/desktop/icon-instagram.svg'
import { NavLink } from './NavLink'

function Icon({ name, icon }: { name: string; icon: string }) {
  return (
    <img
      src={icon}
      alt={`${name} icon`}
      className='cursor-pointer text-3xl transition-all hover:brightness-125'
    />
  )
}

function Footer() {
  return (
    <footer className='z-10 mx-auto bg-primaryBlack pb-16 pt-36 md:h-96'>
      <MaxWidthWrapper className='flex flex-col items-center text-center md:block md:text-left'>
        <Header
          isFooter={true}
          className='mb-8 w-full p-0 md:mb-10 md:p-0 lg:px-0'
        />
        <div className='mb-8 h-[1px] w-full bg-white opacity-10 md:mb-0' />
        <nav className='mb-10 block md:hidden'>
          <ul className='flex flex-col items-center gap-10 text-sm uppercase'>
            <NavLink
              to='/about-us'
              text='Our company'
              className={'text-white'}
            />
            <NavLink
              to='/locations'
              text='Locations'
              className={'text-white'}
            />
            <NavLink to='/contact-us' text='Contact' className={'text-white'} />
          </ul>
        </nav>
        <div className='flex flex-col gap-10 text-base text-white md:mt-8 md:flex-row md:gap-8'>
          <div className='basis-1/3 opacity-50'>
            <p className='font-bold'>Designo Central Office</p>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div className='basis-1/3 opacity-50'>
            <p className='font-bold'>Contact Us (Central Office)</p>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
          <div className='mx-auto flex gap-4 md:mx-0 md:ml-auto md:gap-2 md:self-end'>
            <Icon name='facebook' icon={iconFacebook} />
            <Icon name='youtube' icon={iconYoutube} />
            <Icon name='twitter' icon={iconTwitter} />
            <Icon name='pintrest' icon={iconPintrest} />
            <Icon name='instagram' icon={iconInstagram} />
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
