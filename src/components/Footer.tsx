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
      className='text-3xl cursor-pointer hover:brightness-125 transition-all'
    />
  )
}

function Footer() {
  return (
    <footer className='z-10 md:h-96 pt-36 pb-16 mx-auto bg-primaryBlack'>
      <MaxWidthWrapper className='flex flex-col items-center text-center md:block md:text-left'>
        <Header
          invert={true}
          className='p-0 md:mb-10 mb-8 md:p-0 lg:px-0 w-full'
        />
        <div className='h-[1px] bg-white opacity-10 w-full mb-8 md:mb-0' />
        <nav className='block md:hidden mb-10'>
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
        <div className='flex flex-col md:flex-row gap-10 md:gap-8 text-white text-base md:mt-8'>
          <div className='basis-1/3 opacity-50'>
            <p className='font-bold'>Designo Central Office</p>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div className='basis-1/3 font-bold opacity-50'>
            <p>Contact Us (Central Office)</p>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
          <div className='mx-auto md:mx-0 md:ml-auto md:self-end flex gap-4 md:gap-2'>
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
