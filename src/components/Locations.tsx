import { ReactNode } from 'react'

function Locations({ children }: { children: ReactNode }) {
  return <section className='flex justify-around z-10'>{children}</section>
}

export default Locations
