import contactUsPattern from '../assets/contact/desktop/bg-pattern-hero-desktop.svg'
import Hero from '../components/Hero'
import Location from '../components/Location'
import australiaImage from '../assets/shared/desktop/illustration-australia.svg'
import canadaImage from '../assets/shared/desktop/illustration-canada.svg'
import ukImage from '../assets/shared/desktop/illustration-united-kingdom.svg'
import Locations from '../components/Locations'
import BgPattern from '../components/BgPattern'
import ContactUsForm from '../components/ContactUsForm'

function ContactUs() {
  return (
    <>
      <Hero
        pattern={contactUsPattern}
        patternClassName='-top-40 left-0'
        className='h-[480px] py-36 px-24 z-10 justify-between'>
        <div className='flex flex-col gap-8'>
          <h1 className='text-white'>Contact Us</h1>
          <p className='w-[458px] text-white'>
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

      <BgPattern className='-bottom-48 right-0' />

      <div />
    </>
  )
}

export default ContactUs
