import threeCirclesPatterns from '../assets/shared/desktop/bg-pattern-three-circles.svg'
import { cn } from '../lib/utils'

interface LocationInfoCardProps {
  country: string
  office: string
  address1: string
  address2: string
  phone: string
  email: string
  className?: string
}
const LocationInfoCard = ({
  country,
  office,
  address1,
  address2,
  phone,
  email,
  className,
}: LocationInfoCardProps) => {
  return (
    <div
      className={cn(
        'px-6 py-20 md:px-[75px] md:py-[88px] lg:p-24 md:rounded-3xl min-h-80 lg:h-80 max-h-[394px] max-lg:order-2 lg:w-[66%] bg-[#FDF3F0] relative max-md:flex max-md:flex-col max-md:items-center max-md:text-center max-lg:overflow-hidden',
        className
      )}>
      <img
        src={threeCirclesPatterns}
        alt='three circles pattern'
        className='absolute max-md:top-0 md:bottom-0 left-0 max-md:max-w-[584px] max-md:h-[584px]'
      />
      <h2 className='text-primaryPeach mb-6 capitalize'>{country}</h2>
      <div className='flex md:flex-row flex-col gap-8 items-start'>
        <div className='w-64'>
          <p className='font-bold capitalize'>Designo {office} Office</p>
          <p>{address1}</p>
          <p>{address2}</p>
        </div>
        <div className='w-64'>
          <p className='font-bold'>Contact</p>
          <p>P : {phone}</p>
          <p>M : {email}</p>
        </div>
      </div>
    </div>
  )
}

export default LocationInfoCard
