import graphicDesignPattern from '../assets/graphic-design/desktop/bg-pattern-intro-graphic.svg'
import boxedWaterImage from '../assets/graphic-design/desktop/image-boxed-water.jpg'
import changeImage from '../assets/graphic-design/desktop/image-change.jpg'
import scienceImage from '../assets/graphic-design/desktop/image-science.jpg'
import BgPattern from '../components/BgPattern'
import CallToAction from '../components/CallToAction'
import Hero from '../components/Hero'
import Project from '../components/Project'
import Projects from '../components/Projects'
import Service from '../components/Service'
import Services from '../components/Services'

function GraphicDesign() {
  return (
    <>
      <Hero
        pattern={graphicDesignPattern}
        patternClassName='-top-40 -left-16'
        className='h-64 z-10 text-white flex flex-col justify-center gap-6 text-center'>
        <h1 className='text-white'>Graphic design</h1>
        <p className='w-[40ch]'>
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
        </p>
      </Hero>

      <BgPattern className='left-0 top-32' />

      <Projects className='z-10 grid-cols-3'>
        <Project
          img={changeImage}
          title='Tim brown'
          description='A book cover designed for Tim Brown’s new release, ‘Change’'
        />
        <Project
          img={boxedWaterImage}
          title='Boxed water'
          description='A simple packaging concept made for Boxed Water'
        />
        <Project
          img={scienceImage}
          title='Science!'
          description='A poster made in collaboration with the Federal Art Project'
        />
      </Projects>
      <Services className='z-10 grid-cols-2'>
        <Service
          title='App design'
          to='/app-design'
          className={`bg-[url('./assets/home/desktop/image-app-design.jpg')]`}
        />
        <Service
          title='Web design'
          to='/web-design'
          className={`bg-[url('./assets/home/desktop/image-web-design-small.jpg')]`}
        />
      </Services>
      <CallToAction />
    </>
  )
}

export default GraphicDesign
