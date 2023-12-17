import CallToAction from '../components/CallToAction'
import Hero from '../components/Hero'
import homeHeroPattern from '../assets/home/desktop/bg-pattern-hero-home.svg'
import homeHeroPhone from '../assets/home/desktop/image-hero-phone.png'
function Home() {
  return (
    <>
      <Hero
        pattern={homeHeroPattern}
        patternClassName='top-0 right-0'
        className='h-[640px] py-36 px-24'>
        <div className='h-[350px] flex flex-col justify-between'>
          <div>
            <h1 className='w-[540px] h-40 text-white mb-2.5'>
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className='w-[445px] text-white'>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
          </div>
          <button className='btn white'>Learn more</button>
        </div>
        <img
          src={homeHeroPhone}
          alt='hero phone'
          className='absolute -right-20 -bottom-60'
        />
      </Hero>
      <CallToAction />
    </>
  )
}

export default Home
