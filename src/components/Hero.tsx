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
        'rounded-2xl bg-primaryPeach flex items-center overflow-hidden relative',
        className
      )}>
      {children}
      <img
        src={pattern}
        alt='hero pattern'
        className={cn('absolute', patternClassName)}
      />
    </section>
  )
}

export default Hero
