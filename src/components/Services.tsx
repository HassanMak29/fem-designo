import { ReactNode } from 'react'
import { cn } from '../lib/utils'

interface ServicesProps {
  className?: string
  children: ReactNode
}

function Services({ className, children }: ServicesProps) {
  return (
    <section
      id='services'
      className={cn(
        `grid grid-cols-1 lg:grid-cols-2 gap-8 z-10 justify-items-center`,
        className
      )}>
      {children}
    </section>
  )
}

export default Services
