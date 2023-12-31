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
        pattern='bg-[url("./assets/shared/desktop/bg-pattern-small-circle.svg")] md:bg-[url("./assets/app-design/desktop/bg-pattern-intro-app.svg")]'
        patternClassName='w-[292px] h-[292px] bg-cover max-md:top-0 max-md:right-0 md:min-w-[867px] md:min-h-[584px] md:scale-y-[-1]'
        className='h-80 md:h-64 z-10 text-white flex flex-col lg:flex-col justify-center gap-6 text-center max-md:px-6'>
        <h1 className='text-white'>Graphic design</h1>
        <p className='w-[40ch]'>
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
        </p>
      </Hero>

      <BgPattern className='left-0 top-32' />

      <Projects>
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
      <Services>
        <Service title='App design' to='/app-design' service='app' />
        <Service title='Web design' to='/web-design' service='web' />
      </Services>
      <CallToAction />
    </>
  )
}

export default GraphicDesign
