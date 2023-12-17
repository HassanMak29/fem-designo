import { ReactNode } from 'react'

function Locations({ children }: { children: ReactNode }) {
  return <section className='flex justify-around'>{children}</section>
}

export default Locations
