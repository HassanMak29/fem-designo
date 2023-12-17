import { ReactNode } from 'react'
import { cn } from '../lib/utils'

interface ProjectsProps {
  className?: string
  children: ReactNode
}

function Projects({ className, children }: ProjectsProps) {
  return <section className={cn(`grid gap-8`, className)}>{children}</section>
}

export default Projects
