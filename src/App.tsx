import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import MaxWidthWrapper from './components/MaxWidthWrapper'

function App() {
  return (
    <>
      <Header />
      <main>
        <MaxWidthWrapper className='relative flex grow flex-col gap-[120px] lg:gap-40'>
          <Outlet />
        </MaxWidthWrapper>
      </main>
      <Footer />
    </>
  )
}

export default App
