import aboutUsPattern from '../assets/about/desktop/bg-pattern-hero-about-desktop.svg'
import aboutHero from '../assets/about/desktop/image-about-hero.jpg'
import worldClassTalentHero from '../assets/about/desktop/image-world-class-talent.jpg'
import realDealHero from '../assets/about/desktop/image-real-deal.jpg'
import AboutCard from '../components/AboutCard'
import BgPattern from '../components/BgPattern'
import CallToAction from '../components/CallToAction'
import Hero from '../components/Hero'
import Locations from '../components/Locations'

function AboutUs() {
  return (
    <>
      <Hero
        pattern={aboutUsPattern}
        patternClassName='-top-40 left-0'
        className='h-[480px] py-36 px-24 z-10 justify-between'>
        <div className='flex flex-col gap-8'>
          <h1 className='text-white'>About us</h1>
          <p className='w-[458px] text-white'>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
        <img src={aboutHero} alt='about us hero' className='absolute right-0' />
      </Hero>

      <BgPattern className='left-0 top-80' />

      <AboutCard
        className='z-10'
        img={worldClassTalentHero}
        imgSide='left'
        title='World-class talent'
        paragraphs={[
          'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.',
          'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.',
        ]}
      />
      <Locations />
      <AboutCard
        className='z-10'
        img={realDealHero}
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
