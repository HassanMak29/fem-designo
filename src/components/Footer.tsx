import Header from './Header'
import MaxWidthWrapper from './MaxWidthWrapper'
import iconFacebook from '../assets/shared/desktop/icon-facebook.svg'
import iconYoutube from '../assets/shared/desktop/icon-youtube.svg'
import iconTwitter from '../assets/shared/desktop/icon-twitter.svg'
import iconPintrest from '../assets/shared/desktop/icon-pinterest.svg'
import iconInstagram from '../assets/shared/desktop/icon-instagram.svg'

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
    <footer className='z-10 h-96 pt-36 bg-primaryBlack'>
      <MaxWidthWrapper>
        <Header invert={true} className='p-0 mb-10' />
        <div className='h-[1px] bg-white opacity-10' />
        <div className='flex gap-8 text-white text-base opacity-50 mt-8'>
          <div className='w-[350px]'>
            <p className='font-bold'>Designo Central Office</p>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div className='w-[350px] font-bold'>
            <p>Contact Us (Central Office)</p>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
          <div className='ml-auto self-end flex gap-2'>
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
