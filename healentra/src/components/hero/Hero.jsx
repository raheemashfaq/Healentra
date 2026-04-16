import { useState } from 'react'
import ellipse196 from '../../assets/images/Ellipse 196.png'
import bgDoctor from '../../assets/images/bg.png'

const Hero = () => {
  const [search, setSearch] = useState('')

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '600px', backgroundColor: '#001439' }}>
      <div className="absolute inset-0">
        <img src={bgDoctor} alt="" className="absolute inset-0 w-full h-full object-cover object-top" />
        <div className="absolute inset-0" style={{ background: 'rgba(2,8,23,0.5)' }} />
      </div>

      <div
        className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-[50px]"
        style={{ paddingTop: '130px', paddingBottom: '60px' }}
      >
        <div
          className="inline-flex flex-wrap justify-center items-center my-6 rounded-full overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.3)', backgroundColor: 'rgba(0,0,0,0.35)' }}
        >
          <div className="flex items-center gap-3 px-5 py-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <span className="text-white text-sm font-medium whitespace-nowrap">
              Leader in Medical Practice<br />Management and Billing
            </span>
          </div>

          <div className="w-px self-stretch" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }} />

          <div className="flex items-center gap-3 px-5 py-3">
            <div className="flex items-center">
              {[0, 1, 2].map(i => (
                <img
                  key={i}
                  src={ellipse196}
                  alt=""
                  className="w-8 h-8 rounded-full object-cover border-2 border-white"
                  style={{ marginLeft: i === 0 ? 0 : '-10px' }}
                />
              ))}
            </div>
            <span className="text-white text-sm font-medium whitespace-nowrap">
              Trusted by<br />150,000 providers
            </span>
          </div>
        </div>

        <h1 className="text-white font-bold leading-[1.15] mb-5 text-[32px] md:text-[42px] lg:text-[52px]">
          One Platform to Power <br className="hidden sm:block" />
          Your Entire Practice
        </h1>

        <p className="text-[14px] lg:text-[15px] leading-[1.75] mb-8 max-w-[500px]" style={{ color: '#C9CBD3' }}>
          Healentra provides care, billing, scheduling, and telemedicine platform. With built-in
          AI, a streamlined admin, stronger patients, and unmatched scalability.
        </p>

  

        <div className="flex items-center w-full max-w-[560px] rounded-lg px-5 py-3.5" style={{ border: '1.5px solid rgba(255,255,255,0.6)', backgroundColor: 'rgba(255,255,255,0.01)' }}>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search doctor"
            className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-white/70"
          />
          <svg className="w-5 h-5 shrink-0 ml-3" fill="white" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </div>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-7">
          <button
            className="text-white text-base font-semibold px-7 py-3.5 rounded-lg transition hover:brightness-110"
            style={{ backgroundColor: '#2CA8E0' }}
          >
            Free Consultation
          </button>
          <button className="border text-[#8DC645] text-base font-semibold px-7 py-3.5 rounded-lg transition hover:bg-transparent hover:text-[#8DC645]" style={{ borderColor: '#8DC645' }}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
