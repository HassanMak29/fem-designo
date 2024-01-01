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
        `z-10 grid grid-cols-1 justify-items-center gap-8 lg:grid-cols-2`,
        className
      )}>
      {children}
    </section>
  )
}

export default Services
