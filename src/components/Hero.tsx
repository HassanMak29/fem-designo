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
        'md:rounded-2xl bg-primaryPeach flex flex-col lg:flex-row items-center overflow-hidden relative max-md:-mx-6 md:mx-0',
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
