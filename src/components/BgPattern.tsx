import bgPattern from '../assets/shared/desktop/bg-pattern-leaf.svg'
import { cn } from '../lib/utils'

export default function BgPattern({ className }: { className: string }) {
  return (
    <img
      src={bgPattern}
      alt='background leaf pattern'
      className={cn('absolute', className)}
    />
  )
}
