interface LocationMapProps {
  country: string
  map: string
}

const LocationMap = ({ country, map }: LocationMapProps) => {
  return (
    <div className='col-span-1 rounded-3xl overflow-hidden'>
      <img src={map} alt={`map of ${country}`} className='h-full' />
    </div>
  )
}

export default LocationMap
