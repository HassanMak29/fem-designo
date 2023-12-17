import canadaImage from '../assets/shared/desktop/illustration-canada.svg'
import australiaImage from '../assets/shared/desktop/illustration-australia.svg'
import ukImage from '../assets/shared/desktop/illustration-united-kingdom.svg'
import bgCircle from '../assets/shared/desktop/bg-pattern-small-circle.svg'
import { cn } from '../lib/utils'

interface LocationProps {
  img: string
  title: string
  bgCircleCn?: string
}

function Location({ img, title, bgCircleCn }: LocationProps) {
  return (
    <div className='flex flex-col items-center'>
      <div className='relative'>
        <img
          src={bgCircle}
          alt='circle illustration'
          className={cn('absolute', bgCircleCn)}
        />
        <img src={img} alt={title} className='h-52' />
      </div>
      <h5 className='uppercase font-medium tracking-[5px] text-xl mb-8'>
        {title}
      </h5>
      <button className='btn dark'>See location</button>
    </div>
  )
}

function Locations() {
  return (
    <section className='flex justify-around'>
      <Location img={canadaImage} title='Canada' bgCircleCn='rotate-90' />
      <Location img={australiaImage} title='Australia' />
      <Location img={ukImage} title='United kingdom' bgCircleCn='-rotate-90' />
    </section>
  )
}

export default Locations
