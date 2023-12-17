import webDesignPattern from '../assets/shared/desktop/bg-pattern-call-to-action.svg'
import bloggerImage from '../assets/web-design/desktop/image-blogr.jpg'
import builderImage from '../assets/web-design/desktop/image-builder.jpg'
import campImage from '../assets/web-design/desktop/image-camp.jpg'
import expressImage from '../assets/web-design/desktop/image-express.jpg'
import photonImage from '../assets/web-design/desktop/image-photon.jpg'
import transferImage from '../assets/web-design/desktop/image-transfer.jpg'
import BgPattern from '../components/BgPattern'
import CallToAction from '../components/CallToAction'
import Hero from '../components/Hero'
import Project from '../components/Project'
import Projects from '../components/Projects'
import Service from '../components/Service'
import Services from '../components/Services'

function WebDesign() {
  return (
    <>
      <Hero
        pattern={webDesignPattern}
        patternClassName='-top-40 right-0 scale-y-[-1]'
        className='h-64 z-10 text-white flex flex-col justify-center gap-6 text-center'>
        <h1 className='text-white'>Web design</h1>
        <p className='w-[40ch]'>
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </p>
      </Hero>

      <BgPattern className='left-0 top-32' />

      <Projects className='z-10 grid-cols-3 grid-rows-2'>
        <Project
          img={expressImage}
          title='Express'
          description='A multi-carrier shipping website for ecommerce businesses'
        />
        <Project
          img={transferImage}
          title='Transfer'
          description='Site for low-cost money transfers and sending money within seconds'
        />
        <Project
          img={photonImage}
          title='Photon'
          description='A state-of-the-art music player with high-resolution audio and DSP effects'
        />
        <Project
          img={builderImage}
          title='Builder'
          description='Connects users with local contractors based on their location'
        />
        <Project
          img={bloggerImage}
          title='Blogger'
          description='Blogr is a platform for creating an online blog or publication'
        />
        <Project
          img={campImage}
          title='Camp'
          description='Get expert training in coding, data, design, and digital marketing'
        />
      </Projects>
      <Services className='z-10 grid-cols-2'>
        <Service
          title='App design'
          to='/app-design'
          className={`bg-[url('./assets/home/desktop/image-app-design.jpg')]`}
        />
        <Service
          title='Graphic design'
          to='/graphic-design'
          className={`bg-[url('./assets/home/desktop/image-graphic-design.jpg')]`}
        />
      </Services>
      <CallToAction />
    </>
  )
}

export default WebDesign
