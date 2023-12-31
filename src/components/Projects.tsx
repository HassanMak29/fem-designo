import { ReactNode } from 'react'
import { cn } from '../lib/utils'

interface ProjectsProps {
  className?: string
  children: ReactNode
}

function Projects({ className, children }: ProjectsProps) {
  return (
    <section
      className={cn(
        `grid grid-cols-1 xl:grid-cols-3 xl:grid-rows-2 gap-8 z-10 justify-items-center`,
        className
      )}>
      {children}
    </section>
  )
}

export default Projects
