import { useState } from 'react'
import faq1 from '../../assets/images/faq1.png'
import faq2 from '../../assets/images/faq2.png'
import faq3 from '../../assets/images/faq3.png'
import faq4 from '../../assets/images/faq4.png'

const faqs = [
  {
    q: 'How to book an appointment online?',
    a: 'UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.',
  },
  {
    q: 'What types of medical services do you offer?',
    a: 'We offer a wide range of services including general consultations, specialist referrals, mental health support, chronic disease management, and preventive care.',
  },
  {
    q: 'Are the doctors on Healentra verified?',
    a: 'Yes, all doctors on our platform are fully licensed, board-certified, and verified through a rigorous credentialing process before joining.',
  },
  {
    q: 'Can I get a prescription online?',
    a: 'Absolutely. After your online consultation, your doctor can issue a digital prescription which you can use at any pharmacy or have delivered to your home.',
  },
]

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="w-full py-12 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[50px]">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="font-bold text-[24px] md:text-[32px] lg:text-[38px] leading-tight mb-4" style={{ color: '#001439' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-[15px] leading-[1.75] max-w-[420px] mx-auto" style={{ color: '#9EA1B0' }}>
            Find quick answers to common questions and get the support you need with ease and confidence.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        <div className="flex-1 w-full">
          <div className="flex flex-col gap-3">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="rounded-xl overflow-hidden" style={{ border: '1px solid #E5E7EB' }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-semibold text-[15px]" style={{ color: '#001439' }}>{q}</span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 transition-colors"
                    style={{ backgroundColor: openIndex === i ? '#8DC645' : 'transparent', border: `2px solid ${openIndex === i ? '#8DC645' : '#C9CBD3'}` }}
                  >
                    <svg
                      className="w-4 h-4 transition-transform"
                      fill="none"
                      stroke={openIndex === i ? '#fff' : '#9EA1B0'}
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {openIndex === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-[1.75]" style={{ color: '#9EA1B0' }}>{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[42%] shrink-0 flex gap-3">
          <div className="flex flex-col gap-3 flex-1">
            <img src={faq1} alt="" className="w-full h-[220px] md:h-[290px] object-cover rounded-2xl" />
            <img src={faq3} alt="" className="w-full h-[160px] md:h-[200px] object-cover rounded-2xl" />
          </div>
          <div className="flex flex-col gap-3 flex-1 mt-10">
            <img src={faq2} alt="" className="w-full h-[160px] md:h-[200px] object-cover rounded-2xl" />
            <img src={faq4} alt="" className="w-full h-[220px] md:h-[290px] object-cover rounded-2xl" />
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
