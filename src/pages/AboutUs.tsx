import australiaImage from '../assets/shared/desktop/illustration-australia.svg'
import canadaImage from '../assets/shared/desktop/illustration-canada.svg'
import ukImage from '../assets/shared/desktop/illustration-united-kingdom.svg'
import AboutCard from '../components/AboutCard'
import BgPattern from '../components/BgPattern'
import CallToAction from '../components/CallToAction'
import Hero from '../components/Hero'
import Location from '../components/Location'
import Locations from '../components/Locations'

function AboutUs() {
  return (
    <>
      <Hero
        pattern='max-md:bg-[url("./assets/about/mobile/bg-pattern-hero-about-mobile.svg")] md:bg-[url("./assets/about/desktop/bg-pattern-hero-about-desktop.svg")]'
        patternClassName='h-[292px] w-[584px] bottom-[200px] max-md:right-0 md:h-[640px] md:w-[640px] md:bottom-[100px] md:-left-[120px] lg:bottom-0 lg:left-0'
        className='h-[725px] md:h-[632px] lg:h-[480px] z-10 justify-between'>
        <div className='flex flex-col gap-8 py-20 md:py-16 lg:py-36 px-6 md:px-14 lg:px-24 max-lg:order-2 z-10 basis-[57%] max-lg:text-center'>
          <h1 className='text-white'>About us</h1>
          <p className=' text-white'>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
        <div className='basis-[43%] w-full h-full min-h-[320px] bg-[url("./assets/about/mobile/image-about-hero.jpg")] md:bg-[url("./assets/about/tablet/image-about-hero.jpg")] lg:bg-[url("./assets/about/desktop/image-about-hero.jpg")] bg-no-repeat bg-cover' />
      </Hero>

      <BgPattern className='left-0 top-80' />

      <AboutCard
        className='z-10'
        img='image-world-class-talent.jpg'
        imgSide='left'
        title='World-class talent'
        paragraphs={[
          'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.',
          'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.',
        ]}
      />
      <Locations>
        <Location img={canadaImage} title='Canada' bgCircleCn='rotate-90' />
        <Location img={australiaImage} title='Australia' />
        <Location
          img={ukImage}
          title='United kingdom'
          bgCircleCn='-rotate-90'
        />
      </Locations>
      <AboutCard
        className='z-10'
        img='image-real-deal.jpg'
        imgSide='right'
        title='The real deal'
        paragraphs={[
          'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.',
          'We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.',
        ]}
      />
      <CallToAction />
    </>
  )
}

export default AboutUs
