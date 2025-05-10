import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import PurposeSection from './components/PurposeSection'
import FeaturesSection from './components/FeaturesSection'
import ScheduleSection from './components/ScheduleSection'
import MonitorSection from './components/MonitorSection'
import PricingSection from './components/PricingSection'
import ServicesSection from './components/ServicesSection'

import './App.css'
import TestimonialSection from './components/TestimonialSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'

function App() {
  return (
    <main className='bg-gradient-to-r from-red-50 to-blue-100 min-h-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <CompanyLogo />
      <PurposeSection />
      <FeaturesSection />
      <ScheduleSection />
      <MonitorSection />
      <PricingSection />
      <ServicesSection />
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
   </main>
  )
}

export default App
