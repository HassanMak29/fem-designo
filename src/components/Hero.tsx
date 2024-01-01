import { ReactNode } from 'react'
import { cn } from '../lib/utils'

interface HeroProps {
  className?: string
  patternClassName?: string
  pattern?: string
  children: ReactNode
}

function Hero({ className, patternClassName, pattern, children }: HeroProps) {
  return (
    <section
      className={cn(
        'relative flex flex-col items-center overflow-hidden bg-primaryPeach max-md:-mx-6 md:mx-0 md:rounded-2xl lg:flex-row',
        className
      )}>
      {children}
      <div
        className={cn(`absolute -z-10 bg-no-repeat`, pattern, patternClassName)}
      />
    </section>
  )
}

export default Hero
