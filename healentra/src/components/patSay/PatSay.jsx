import { useState } from 'react'
import ellipse196 from '../../assets/images/Ellipse 196.png'

const testimonials = [
  {
    title: 'I just joined TopX Fitness a few days ago...',
    review: "I was so nervoius because i've never been to a gym, But everyone there made me feel so welcome. I really appreciate the customer service you provide. Thank you for helping me change my life!",
    name: 'David Shah',
    role: 'Patient',
    img: ellipse196,
  },
  {
    title: 'Best online consultation I have ever had...',
    review: 'The doctors were extremely professional and attentive. I got my prescription within minutes and the whole process was seamless. Highly recommend Healentra to everyone.',
    name: 'Sarah Ahmed',
    role: 'Patient',
    img: ellipse196,
  },
  {
    title: 'Quick and reliable healthcare at home...',
    review: 'I was able to consult a specialist from my home without any waiting time. The platform is easy to use and the doctors are very knowledgeable. Great experience overall.',
    name: 'Michael Torres',
    role: 'Patient',
    img: ellipse196,
  },
  {
    title: 'Truly changed how I manage my health...',
    review: 'Healentra has made it so easy to stay on top of my health. Booking appointments, getting prescriptions and follow-ups all in one place is a game changer for me.',
    name: 'Priya Nair',
    role: 'Patient',
    img: ellipse196,
  },
]

const PatSay = () => {
  const [active, setActive] = useState(0)
  const { title, review, name, role, img } = testimonials[active]

  return (
    <section className="w-full py-12 lg:py-20" style={{ backgroundColor: '#001439' }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[50px]">
        <div className="text-center mb-12">
          <h2 className="text-white font-bold text-[26px] md:text-[34px] lg:text-[42px] leading-tight mb-4">
            What Our Patients Say
          </h2>
          <p className="text-[15px] leading-[1.75] max-w-[500px] mx-auto" style={{ color: '#9EA1B0' }}>
            Discover the experiences of those who have trusted us with their care. Real
            stories, real results, and the impact of compassionate treatment
          </p>
        </div>

        <div className="max-w-[780px] mx-auto">
          <div
            className="rounded-2xl px-6 md:px-16 pt-10 pb-20 text-center relative"
            style={{ backgroundColor: '#0D2B55' }}
          >
            <div className="text-[56px] font-serif leading-none mb-4" style={{ color: '#8DC645' }}>"</div>

            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} className="w-5 h-5 md:w-6 md:h-6" fill="#8DC645" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-white font-bold text-[15px] md:text-[17px] mb-3">{title}</p>
            <p className="text-[14px] md:text-[15px] leading-[1.75]" style={{ color: '#C9CBD3' }}>{review}</p>

            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
              <img
                src={img}
                alt={name}
                className="w-24 h-24 rounded-full object-cover border-4"
                style={{ borderColor: '#0D2B55' }}
              />
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="font-semibold text-[16px] mb-1" style={{ color: '#8DC645' }}>{name}</p>
            <p className="text-sm" style={{ color: '#9EA1B0' }}>{role}</p>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="w-4 h-4 rounded-full transition-all"
                style={{
                  backgroundColor: i === active ? 'transparent' : '#9EA1B0',
                  border: i === active ? '2px solid #8DC645' : '2px solid transparent',
                  outline: i === active ? '2px solid #8DC645' : 'none',
                  outlineOffset: '2px',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PatSay
