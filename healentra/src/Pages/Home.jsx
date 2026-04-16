import Hero from '../components/hero/Hero'
import AboutUs from '../components/aboutUs/AboutUs'
import Stats from '../components/stats/Stats'
import ClinicServices from '../components/clinicServices/ClinicServices'
import JourneyWithUs from '../components/journeyWithUs/JourneyWithUs'
import CompleteCare from '../components/completeCare/CompleteCare'
import ExpDoctor from '../components/expDoctor/ExpDoctor'
import PatSay from '../components/patSay/PatSay'
import FaqSection from '../components/faqSection/FaqSection'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Stats />
      <ClinicServices />
      <JourneyWithUs />
      <CompleteCare />
      <ExpDoctor />
      <PatSay />
      <FaqSection />
    </div>
  )
}

export default Home
