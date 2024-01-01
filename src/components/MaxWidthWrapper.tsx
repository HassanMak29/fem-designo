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
        'w-screen max-w-[1440px] px-6 md:px-10 lg:px-[165px]',
        className
      )}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
