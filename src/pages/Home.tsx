import homeHeroPattern from '../assets/home/desktop/bg-pattern-hero-home.svg'
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
        pattern={homeHeroPattern}
        patternClassName='top-0 right-0'
        className='h-[640px] py-36 px-24 z-10 justify-between'>
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

      <BgPattern className='left-0 top-80' />

      <Services className='z-10 grid-cols-2 grid-rows-2'>
        <Service
          title='Web design'
          to='web-design'
          className={`row-span-full bg-[url('./assets/home/desktop/image-web-design-large.jpg')]`}
        />
        <Service
          title='App design'
          to='app-design'
          className={`bg-[url('./assets/home/desktop/image-app-design.jpg')]`}
        />
        <Service
          title='Graphic design'
          to='graphic-design'
          className={`bg-[url('./assets/home/desktop/image-graphic-design.jpg')]`}
        />
      </Services>
      <HowWeWork className='z-10' />

      <BgPattern className='right-0 bottom-16 rotate-180' />

      <CallToAction />
    </>
  )
}

export default Home
