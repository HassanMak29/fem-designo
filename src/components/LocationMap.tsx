import { cn } from '../lib/utils'

interface LocationMapProps {
  map: string
  className?: string
}

const LocationMap = ({ map, className }: LocationMapProps) => {
  return (
    <div
      className={cn(
        `h-80 w-full md:rounded-3xl overflow-hidden z-30 bg-cover bg-no-repeat`,
        map,
        className
      )}
    />
  )
}

export default LocationMap
