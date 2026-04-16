import { useState } from 'react'
import hlogo from '../../assets/images/hlogo.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import insta from '../../assets/images/insta.png'

const services = ['Urgent care', 'Primary care', 'Chronic Care', 'Stress and Mental Health', 'Prescriptions']
const quickLinks = ['About Us', 'Support', 'Our Team', 'Terms & Conditions', 'FAQs']

const Footer = () => {
  const [email, setEmail] = useState('')

  return (
    <footer>
      <div className="w-full py-12 lg:py-16 px-4 md:px-8 lg:px-[50px]" style={{ backgroundColor: '#001439' }}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <img src={hlogo} alt="Healentra" className="h-12 w-auto object-contain mb-5" />
            <p className="text-sm leading-[1.75] mb-8" style={{ color: '#9EA1B0' }}>
              At Healentra, we provide the best online doctor consultation tailored to your needs.
              Our platform connects you with trusted healthcare professionals
            </p>
            <div
              className="flex items-center rounded-lg overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.25)' }}
            >
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                className="flex-1 bg-transparent px-4 py-3 text-sm outline-none"
                style={{ color: '#fff' }}
              />
              <button
                className="px-4 py-3 flex items-center justify-center"

              >
                <svg className="w-4 h-4" fill="none" stroke="#8DC645" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-[18px] mb-6">Our Services</h4>
            <ul className="flex flex-col gap-4">
              {services.map(s => (
                <li key={s}>
                  <a href="#" className="text-sm transition-colors" style={{ color: '#9EA1B0' }}
                    onMouseEnter={e => e.target.style.color = '#8DC645'}
                    onMouseLeave={e => e.target.style.color = '#9EA1B0'}
                  >{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-[18px] mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {quickLinks.map(l => (
                <li key={l}>
                  <a href="#" className="text-sm transition-colors" style={{ color: '#9EA1B0' }}
                    onMouseEnter={e => e.target.style.color = '#8DC645'}
                    onMouseLeave={e => e.target.style.color = '#9EA1B0'}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-[18px] mb-6">Contact</h4>
            <div className="flex flex-col gap-4 mb-8">
              <p className="text-sm" style={{ color: '#9EA1B0' }}>+923041234567</p>
              <p className="text-sm" style={{ color: '#9EA1B0' }}>favorite@doctor.com</p>
              <p className="text-sm leading-[1.65]" style={{ color: '#9EA1B0' }}>
                Glassplace, Near<br />Cool Avenue, Boson
              </p>
            </div>
            <div className="flex items-center gap-3">
              {[facebook, twitter, insta, insta, twitter].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ border: '1px solid #8DC645' }}
                >
                  <img src={icon} alt="" className="w-4 h-4 object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-4 px-4 md:px-8 lg:px-[50px]" style={{ backgroundColor: '#8DC645' }}>
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white text-sm">© 2025 TeleMedLine. All rights reserved</p>
          <div className="flex items-center gap-6 sm:gap-10">
            <a href="#" className="text-white text-sm hover:underline">Terms of Service</a>
            <a href="#" className="text-white text-sm hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
