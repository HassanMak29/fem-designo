import { ReactNode } from 'react'

function Locations({ children }: { children: ReactNode }) {
  return (
    <section className='z-10 flex flex-col justify-around gap-14 lg:flex-row lg:gap-4'>
      {children}
    </section>
  )
}

export default Locations
