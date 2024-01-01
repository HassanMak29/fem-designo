import australiaImage from '../assets/shared/desktop/illustration-australia.svg'
import canadaImage from '../assets/shared/desktop/illustration-canada.svg'
import ukImage from '../assets/shared/desktop/illustration-united-kingdom.svg'
import BgPattern from '../components/BgPattern'
import ContactUsForm from '../components/ContactUsForm'
import Hero from '../components/Hero'
import Location from '../components/Location'
import Locations from '../components/Locations'

function ContactUs() {
  return (
    <>
      <Hero
        patternClassName='max-md:top-0 max-md:-left-20 max-md:right-0 max-md:mx-auto md:max-lg:-left-[122px] md:max-lg:-top-[83px] lg:bottom-0 lg:left-0 max-md:max-w-[584px] min-h-[292px] md:w-[640px] md:h-[640px]'
        pattern='bg-[url("./assets/contact/mobile/bg-pattern-hero-contact-mobile.svg")] md:bg-[url("./assets/contact/desktop/bg-pattern-hero-desktop.svg")]'
        className='z-10 min-h-[764px] items-center gap-10 px-6 py-[71px] max-md:text-center md:min-h-[711px] md:px-14 lg:min-h-[480px] lg:px-24 lg:py-14 lg:pt-20'>
        <div className='flex flex-col gap-8'>
          <h1 className='text-white'>Contact Us</h1>
          <p className='text-white lg:max-w-[458px]'>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <ContactUsForm />
      </Hero>

      <Locations>
        <Location img={canadaImage} title='Canada' bgCircleCn='rotate-90' />
        <Location img={australiaImage} title='Australia' />
        <Location
          img={ukImage}
          title='United kingdom'
          bgCircleCn='-rotate-90'
        />
      </Locations>

      <BgPattern className='-bottom-48 right-0 -z-10' />

      <div />
    </>
  )
}

export default ContactUs
