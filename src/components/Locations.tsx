import { ReactNode } from 'react'

function Locations({ children }: { children: ReactNode }) {
  return (
    <section className='flex flex-col gap-14 lg:gap-4 lg:flex-row justify-around z-10'>
      {children}
    </section>
  )
}

export default Locations
