import appDesignPattern from '../assets/app-design/desktop/bg-pattern-intro-app.svg'
import airfilterImage from '../assets/app-design/desktop/image-airfilter.jpg'
import eyecamImage from '../assets/app-design/desktop/image-eyecam.jpg'
import faceitImage from '../assets/app-design/desktop/image-faceit.jpg'
import loopstudiosImage from '../assets/app-design/desktop/image-loopstudios.jpg'
import todoImage from '../assets/app-design/desktop/image-todo.jpg'
import BgPattern from '../components/BgPattern'
import CallToAction from '../components/CallToAction'
import Hero from '../components/Hero'
import Project from '../components/Project'
import Projects from '../components/Projects'
import Service from '../components/Service'
import Services from '../components/Services'

function AppDesign() {
  return (
    <>
      <Hero
        pattern={appDesignPattern}
        patternClassName='-top-40 -left-16'
        className='h-64 z-10 text-white flex flex-col justify-center gap-6 text-center'>
        <h1 className='text-white'>App design</h1>
        <p className='w-[40ch]'>
          Our mobile designs bring intuitive digital solutions to your customers
          right at their fingertips.
        </p>
      </Hero>

      <BgPattern className='left-0 top-32' />

      <Projects className='z-10 grid-cols-3 grid-rows-2'>
        <Project
          img={airfilterImage}
          title='Airfilter'
          description='Solving the problem of poor indoor air quality by filtering the air'
        />
        <Project
          img={eyecamImage}
          title='Eyecam'
          description='Product that lets you edit your favorite photos and videos at any time'
        />
        <Project
          img={faceitImage}
          title='Faceit'
          description='Get to meet your favorite internet superstar with the faceit app'
        />
        <Project
          img={todoImage}
          title='Todo'
          description='A todo app that features cloud sync with light and dark mode'
        />
        <Project
          img={loopstudiosImage}
          title='Loopstudios'
          description='A VR experience app made for Loopstudios'
        />
      </Projects>
      <Services className='z-10 grid-cols-2'>
        <Service
          title='Web design'
          to='/web-design'
          className={`bg-[url('./assets/home/desktop/image-web-design-small.jpg')]`}
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

export default AppDesign
