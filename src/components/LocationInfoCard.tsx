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
        'min-h-80 relative max-h-[394px] bg-[#FDF3F0] px-6 py-20 max-lg:order-2 max-lg:overflow-hidden max-md:flex max-md:flex-col max-md:items-center max-md:text-center md:rounded-3xl md:px-[75px] md:py-[88px] lg:h-80 lg:w-[66%] lg:p-24',
        className
      )}>
      <img
        src={threeCirclesPatterns}
        alt='three circles pattern'
        className='absolute left-0 max-md:top-0 max-md:h-[584px] max-md:max-w-[584px] md:bottom-0'
      />
      <h2 className='mb-6 capitalize text-primaryPeach'>{country}</h2>
      <div className='flex flex-col items-start gap-8 md:flex-row'>
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
