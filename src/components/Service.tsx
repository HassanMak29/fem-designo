import { Link } from 'react-router-dom'
import rightArrow from '../assets/shared/desktop/icon-right-arrow.svg'
import { cn } from '../lib/utils'

interface ServiceProps {
  title: string
  to: string
  className?: string
  service: 'web' | 'app' | 'graphic'
}

function Service({ className, title, to, service }: ServiceProps) {
  return (
    <div
      className={cn(
        'bg-[#888] rounded-2xl flex flex-col items-center justify-center gap-6 min-h-[308px] w-[350px] md:w-full text-center',
        {
          "row-span-full bg-[url('./assets/home/mobile/image-web-design.jpg')] md:bg-[url('./assets/home/tablet/image-web-design.jpg')] lg:bg-[url('./assets/home/desktop/image-web-design-large.jpg')] bg-no-repeat bg-cover":
            service === 'web',
        },
        {
          "bg-[url('./assets/home/mobile/image-app-design.jpg')] md:bg-[url('./assets/home/tablet/image-app-design.jpg')] lg:bg-[url('./assets/home/desktop/image-app-design.jpg')] bg-no-repeat bg-cover":
            service === 'app',
        },
        {
          "bg-[url('./assets/home/mobile/image-graphic-design.jpg')] md:bg-[url('./assets/home/tablet/image-graphic-design.jpg')] lg:bg-[url('./assets/home/desktop/image-graphic-design.jpg')] bg-no-repeat bg-cover":
            service === 'graphic',
        },
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
