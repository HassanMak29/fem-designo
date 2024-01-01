import { cn } from '../lib/utils'

interface LocationMapProps {
  map: string
  className?: string
}

const LocationMap = ({ map, className }: LocationMapProps) => {
  return (
    <div
      className={cn(
        `z-30 h-80 w-full overflow-hidden bg-cover bg-no-repeat md:rounded-3xl`,
        map,
        className
      )}
    />
  )
}

export default LocationMap
