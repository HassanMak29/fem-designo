import { Link } from 'react-router-dom'
import bgCircle from '../assets/shared/desktop/bg-pattern-small-circle.svg'
import { cn } from '../lib/utils'

interface LocationProps {
  img: string
  title: string
  bgCircleCn?: string
}

export default function Location({ img, title, bgCircleCn }: LocationProps) {
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
      <Link to='/locations'>
        <button className='btn dark'>See location</button>
      </Link>
    </div>
  )
}
