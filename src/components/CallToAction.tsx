import patternCTA from '../assets/shared/desktop/bg-pattern-call-to-action.svg'

function CallToAction() {
  return (
    <section className='w-full rounded-2xl h-72 bg-primaryPeach mt-auto -mb-20 px-24 py-20 flex justify-between items-center relative overflow-hidden'>
      <div className='w-[460px] z-10'>
        <h4 className='w-[270px] h-24 font-medium text-white text-[40px] leading-10'>
          Let’s talk about your project
        </h4>
        <p className='text-white'>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <button className='btn white z-10'>Get in touch</button>
      <img
        src={patternCTA}
        alt='call to action circles pattern'
        className='absolute right-0'
      />
    </section>
  )
}

export default CallToAction
