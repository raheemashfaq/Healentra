import doctorImg from '../../assets/images/Group 1000011798.png'

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.1675 8.33332C18.5481 10.2011 18.2769 12.1428 17.3991 13.8348C16.5213 15.5268 15.0899 16.8667 13.3438 17.6311C11.5976 18.3955 9.64221 18.5381 7.8036 18.0353C5.965 17.5325 4.35435 16.4145 3.24025 14.8678C2.12616 13.3212 1.57596 11.4394 1.68141 9.53615C1.78686 7.63294 2.54159 5.8234 3.81973 4.4093C5.09787 2.9952 6.82217 2.06202 8.70508 1.76537C10.588 1.46872 12.5157 1.82654 14.1667 2.77916" stroke="#2CA8E0" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.5 9.16671L10 11.6667L18.3333 3.33337" stroke="#2CA8E0" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const features = [
  { title: 'All Types of Doctors', desc: 'Access diverse medical services from trusted doctors across every specialty.' },
  { title: 'Get an E-Prescription', desc: 'Receive digital prescriptions instantly from verified doctors online.' },
]

const stats = [
  { label: 'Save More Times', value: 70 },
  { label: 'Satisfied Patients', value: 95 },
]

const AboutUs = () => {
  return (
    <section className="w-full py-12 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[50px] flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="w-full lg:w-[45%] shrink-0">
          <img src={doctorImg} alt="Online Doctor Consultation" className="w-full h-auto object-contain" />
        </div>

        <div className="flex-1 w-full">
          <h2 className="font-bold leading-[1.2] mb-5 text-[24px] md:text-[30px] lg:text-[36px]" style={{ color: '#001439' }}>
            We Provide Best Online Doctor Consultation For You
          </h2>

          <p className="text-[15px] leading-[1.75] mb-8" style={{ color: '#9EA1B0' }}>
            At Healentra, we provide the best online doctor consultation to your needs. Our platform
            connects you with trusted healthcare professionals making it easy to access expert medical
            advice, prescriptions, and care anytime, and from any condition or age groups.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mb-8">
            {features.map(({ title, desc }) => (
              <div key={title} className="flex gap-3">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(44,168,224,0.1)' }}
                >
                  <CheckIcon />
                </div>
                <div>
                  <p className="font-semibold text-[15px] mb-1" style={{ color: '#001439' }}>{title}</p>
                  <p className="text-sm leading-[1.6]" style={{ color: '#9EA1B0' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-8">
            {stats.map(({ label, value }) => (
              <div key={label} className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium" style={{ color: '#001439' }}>{label}</span>
                  <span className="text-sm font-semibold" style={{ color: '#2CA8E0' }}>{value}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: '#C9CBD3' }}>
                  <div className="h-1.5 rounded-full" style={{ width: `${value}%`, backgroundColor: '#8DC645' }} />
                </div>
              </div>
            ))}
          </div>

          <button
            className="text-white text-base font-semibold px-8 py-3.5 rounded-lg transition hover:brightness-110"
            style={{ backgroundColor: '#2CA8E0' }}
          >
            About Us
          </button>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
