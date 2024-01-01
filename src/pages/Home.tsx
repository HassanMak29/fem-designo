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
        className='h-[843px] lg:h-[640px] pt-20 lg:py-36 px-6 lg:px-24 z-10'>
        <div className='h-[350px] flex flex-col lg:justify-between gap-7 lg:gap-0 items-center lg:items-stretch z-20'>
          <div className='flex flex-col items-center text-center lg:text-left lg:items-start'>
            <h1 className='w-[327px] md:w-[573px] lg:w-[540px] h-28 md:h-40 text-white mb-4 lg:mb-2.5'>
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className='w-[327px] md:w-[440px] text-white'>
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
          className='absolute -bottom-[33%] scale-[1.3] lg:scale-100 max-w-[500px] lg:max-w-none lg:-right-20 lg:-bottom-60'
        />
      </Hero>

      <BgPattern className='left-0 top-80' />

      <Services className='lg:grid-rows-2'>
        <Service title='Web design' to='web-design' service='web' />
        <Service title='App design' to='app-design' service='app' />
        <Service title='Graphic design' to='graphic-design' service='graphic' />
      </Services>
      <HowWeWork className='z-10' />

      <BgPattern className='right-0 bottom-16 rotate-180' />

      <CallToAction />
    </>
  )
}

export default Home
