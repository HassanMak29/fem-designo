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
        `z-10 grid grid-cols-1 justify-items-center gap-8 xl:grid-cols-3 xl:grid-rows-2`,
        className
      )}>
      {children}
    </section>
  )
}

export default Projects
