import illustrationFriendly from '../assets/home/desktop/illustration-friendly.svg'
import illustrationPassionate from '../assets/home/desktop/illustration-passionate.svg'
import illustrationResourceful from '../assets/home/desktop/illustration-resourceful.svg'
import bgCircle from '../assets/shared/desktop/bg-pattern-small-circle.svg'
import { cn } from '../lib/utils'

interface CardProps {
  src: string
  title: string
  text: string
  bgCircleCn?: string
}

function Card({ src, title, text, bgCircleCn }: CardProps) {
  return (
    <div className='flex w-[350px] flex-col items-center text-center md:w-auto md:flex-row md:gap-12 md:text-start lg:w-[350px] lg:flex-col lg:gap-0 lg:text-center'>
      <div className='relative'>
        <img
          src={bgCircle}
          alt='circle illustration'
          className={cn('absolute -z-10', bgCircleCn)}
        />
        <img
          src={src}
          alt='illustration'
          className='mb-12 h-52 w-52 md:mb-0 lg:mb-12'
        />
      </div>
      <div className='md:w-[440px] lg:w-auto'>
        <h5 className='mb-8 text-xl font-medium uppercase tracking-[5px] md:mb-4 lg:mb-8'>
          {title}
        </h5>
        <p>{text}</p>
      </div>
    </div>
  )
}

interface HowWeWorkProps {
  className?: string
}

function HowWeWork({ className }: HowWeWorkProps) {
  return (
    <section
      className={cn(
        'flex flex-col items-center gap-8 lg:flex-row lg:items-stretch',
        className
      )}>
      <Card
        src={illustrationPassionate}
        title='Passionate'
        text='Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions.'
      />
      <Card
        src={illustrationResourceful}
        bgCircleCn={'-rotate-90'}
        title='Resourceful'
        text='Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients’ needs.'
      />
      <Card
        src={illustrationFriendly}
        bgCircleCn={'rotate-90'}
        title='Friendly'
        text='We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the
          best experience a company can provide.'
      />
    </section>
  )
}

export default HowWeWork
