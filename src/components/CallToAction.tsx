import { Link } from 'react-router-dom'
import patternCTA from '../assets/shared/desktop/bg-pattern-call-to-action.svg'

function CallToAction() {
  return (
    <section className='w-full rounded-2xl h-96 lg:h-72 bg-primaryPeach mt-auto -mb-20 px-4 lg:px-24 py-16 lg:py-20 flex flex-col lg:flex-row lg:justify-between items-center gap-8 lg:gap-0 text-center lg:text-start relative overflow-hidden z-20'>
      <div className='md:w-[50%] z-10'>
        <h4 className='h-24 max-lg:px-9 font-medium text-white text-[32px] lg:text-[40px] leading-[36px] lg:leading-10'>
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
        className='absolute lg:right-0 min-w-[1082px] lg:min-w-0 -top-1/2 lg:top-auto'
      />
    </section>
  )
}

export default CallToAction
