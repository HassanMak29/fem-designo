import { Link } from 'react-router-dom'
import rightArrow from '../assets/shared/desktop/icon-right-arrow.svg'
import { cn } from '../lib/utils'

interface ServiceProps {
  title: string
  to: string
  className?: string
}

function Service({ className, title, to }: ServiceProps) {
  return (
    <div
      className={cn(
        'bg-[#888] rounded-2xl flex flex-col items-center justify-center gap-6 min-h-[308px]',
        className
      )}>
      <h2 className='uppercase text-white'>{title}</h2>
      <Link
        to={to}
        className='text-white text-[15px] uppercase tracking-[5px] font-medium flex gap-3 items-center'>
        <span>View projects</span>
        <img src={rightArrow} alt='right arrow' />
      </Link>
    </div>
  )
}

export default Service
