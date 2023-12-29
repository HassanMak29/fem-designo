import twoCirclesPatterns from '../assets/shared/desktop/bg-pattern-two-circles.svg'

interface LocationInfoCardProps {
  country: string
  office: string
  address1: string
  address2: string
  phone: string
  email: string
}
const LocationInfoCard = ({
  country,
  office,
  address1,
  address2,
  phone,
  email,
}: LocationInfoCardProps) => {
  return (
    <div className='col-span-2 p-24 rounded-3xl h-80 bg-[#FDF3F0] relative'>
      <img
        src={twoCirclesPatterns}
        alt='tow circles pattern'
        className='absolute bottom-0 left-0'
      />
      <h2 className='text-primaryPeach mb-6 capitalize'>{country}</h2>
      <div className='flex gap-8 items-end'>
        <div className='w-64'>
          <p className='font-bold capitalize'>Designo {office} Office</p>
          <p className='w-[20ch]'>{address1}</p>
          <p className='w-[20ch]'>{address2}</p>
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
