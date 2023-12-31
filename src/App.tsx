import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import MaxWidthWrapper from './components/MaxWidthWrapper'

function App() {
  return (
    <>
      <Header />
      <MaxWidthWrapper className='relative grow flex flex-col gap-[120px] lg:gap-40'>
        <Outlet />
      </MaxWidthWrapper>
      <Footer />
    </>
  )
}

export default App
