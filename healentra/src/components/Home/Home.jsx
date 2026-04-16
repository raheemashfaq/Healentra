import Hero from '../hero/Hero'
import AboutUs from '../aboutUs/AboutUs'
import Stats from '../stats/Stats'
import ClinicServices from '../clinicServices/ClinicServices'
import JourneyWithUs from '../journeyWithUs/JourneyWithUs'
import CompleteCare from '../completeCare/CompleteCare'
import ExpDoctor from '../expDoctor/ExpDoctor'
import PatSay from '../patSay/PatSay'
import FaqSection from '../faqSection/FaqSection'

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