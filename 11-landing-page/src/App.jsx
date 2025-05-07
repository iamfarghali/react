import './App.css'
import overviewImg from "./assets/overview.png"

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import PurposeSection from './components/PurposeSection'

function App() {
  return (
  <main className='bg-gradient-to-r from-red-50 to-blue-100 min-h-screen overflow-x-hidden'>
    <Navbar />
    <Hero />
    <CompanyLogo />
    <PurposeSection />

    {/* <div className='flex flex-col py-96'>
      <img src={overviewImg} className='w-100 h-100' alt=""/>
    </div> */}
  </main>
  )
}

export default App
