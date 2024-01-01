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
        'flex min-h-[308px] w-[350px] flex-col items-center justify-center gap-6 rounded-2xl bg-[#888] text-center md:w-full',
        {
          "row-span-full bg-[url('./assets/home/mobile/image-web-design.jpg')] bg-cover bg-no-repeat md:bg-[url('./assets/home/tablet/image-web-design.jpg')] lg:bg-[url('./assets/home/desktop/image-web-design-large.jpg')]":
            service === 'web',
        },
        {
          "bg-[url('./assets/home/mobile/image-app-design.jpg')] bg-cover bg-no-repeat md:bg-[url('./assets/home/tablet/image-app-design.jpg')] lg:bg-[url('./assets/home/desktop/image-app-design.jpg')]":
            service === 'app',
        },
        {
          "bg-[url('./assets/home/mobile/image-graphic-design.jpg')] bg-cover bg-no-repeat md:bg-[url('./assets/home/tablet/image-graphic-design.jpg')] lg:bg-[url('./assets/home/desktop/image-graphic-design.jpg')]":
            service === 'graphic',
        },
        className
      )}>
      <h2 className='uppercase text-white'>{title}</h2>
      <Link
        to={to}
        className='flex items-center gap-3 text-[15px] font-medium uppercase tracking-[5px] text-white'>
        <span>View projects</span>
        <img src={rightArrow} alt='right arrow' />
      </Link>
    </div>
  )
}

export default Service
