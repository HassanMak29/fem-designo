import { ReactNode } from 'react'
import { cn } from '../lib/utils'

function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        'max-w-[1440px] w-screen lg:px-[165px] px-6 md:px-10',
        className
      )}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
