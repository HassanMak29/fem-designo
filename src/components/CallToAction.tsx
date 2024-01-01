import { Link } from 'react-router-dom'
import patternCTA from '../assets/shared/desktop/bg-pattern-call-to-action.svg'

function CallToAction() {
  return (
    <section className='relative z-20 -mb-20 mt-auto flex h-96 w-full flex-col items-center gap-8 overflow-hidden rounded-2xl bg-primaryPeach px-4 py-16 text-center lg:h-72 lg:flex-row lg:justify-between lg:gap-0 lg:px-24 lg:py-20 lg:text-start'>
      <div className='z-10 md:w-[50%]'>
        <h4 className='h-24 text-[32px] font-medium leading-[36px] text-white max-lg:px-9 lg:text-[40px] lg:leading-10'>
          Let’s talk about your project
        </h4>
        <p className='text-white'>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <Link to='/contact-us' className='z-10'>
        <button className='btn white z-10'>Get in touch</button>
      </Link>
      <img
        src={patternCTA}
        alt='call to action circles pattern'
        className='absolute -top-1/2 min-w-[1082px] lg:right-0 lg:top-auto lg:min-w-0'
      />
    </section>
  )
}

export default CallToAction
