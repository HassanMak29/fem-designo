import { ReactNode } from 'react'
import { cn } from '../lib/utils'

interface ServicesProps {
  className?: string
  children: ReactNode
}

function Services({ className, children }: ServicesProps) {
  return <section className={cn(`grid gap-8`, className)}>{children}</section>
}

export default Services
