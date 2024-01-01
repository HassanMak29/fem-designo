import homeHeroPhone from '../assets/home/desktop/image-hero-phone.png'
import BgPattern from '../components/BgPattern'
import CallToAction from '../components/CallToAction'
import Hero from '../components/Hero'
import HowWeWork from '../components/HowWeWork'
import Service from '../components/Service'
import Services from '../components/Services'

function Home() {
  return (
    <>
      <Hero
        pattern='bg-[url("./assets/home/desktop/bg-pattern-hero-home.svg")]'
        patternClassName='min-w-[640px] min-h-[640px] lg:top-0 lg:right-0 top-1/2 max-lg:-translate-y-1/2 max-md:left-0 md:max-lg:-right-[122px]'
        className='z-10 h-[843px] px-6 pt-20 lg:h-[640px] lg:px-24 lg:py-36'>
        <div className='z-20 flex h-[350px] flex-col items-center gap-7 lg:items-stretch lg:justify-between lg:gap-0'>
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <h1 className='mb-4 h-28 w-[327px] text-white md:h-40 md:w-[573px] lg:mb-2.5 lg:w-[540px]'>
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className='w-[327px] text-white md:w-[440px]'>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
          </div>
          <a href='#services'>
            <button className='btn white'>Learn more</button>
          </a>
        </div>
        <img
          src={homeHeroPhone}
          alt='hero phone'
          className='absolute -bottom-[33%] max-w-[500px] scale-[1.3] lg:-bottom-60 lg:-right-20 lg:max-w-none lg:scale-100'
        />
      </Hero>

      <BgPattern className='left-0 top-80' />

      <Services className='lg:grid-rows-2'>
        <Service title='Web design' to='web-design' service='web' />
        <Service title='App design' to='app-design' service='app' />
        <Service title='Graphic design' to='graphic-design' service='graphic' />
      </Services>
      <HowWeWork className='z-10' />

      <BgPattern className='bottom-16 right-0 rotate-180' />

      <CallToAction />
    </>
  )
}

export default Home
