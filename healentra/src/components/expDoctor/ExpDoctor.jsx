import doc1 from '../../assets/images/doc1.png'
import doc2 from '../../assets/images/doc2.png'

const doctors = [
  { img: doc1, name: 'Dr. James Lee, MD', role: 'Head of Cardiologist', desc: 'With expertise in managing complex heart conditions and performing advanced cardiac procedures', featured: false },
  { img: doc2, name: 'Dr. John Smith, MD', role: 'Emergency Medicine Physician', desc: 'With expertise in treating acute illnesses and injuries in medicine physician', featured: true },
  { img: doc1, name: 'Dr. Susan Bones, MD', role: 'Board-certified Pediatrician', desc: 'With experience in managing complex medical conditions in children', featured: false },
]

const ExpDoctor = () => {
  return (
    <section className="w-full py-12 lg:py-20" style={{ backgroundColor: '#F7F8FA' }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[50px]">
        <div className="text-center mb-16">
          <h2 className="font-bold text-[24px] md:text-[32px] lg:text-[38px] leading-tight mb-4" style={{ color: '#001439' }}>
            Experienced Doctors, Exceptional Care
          </h2>
          <p className="text-[15px] leading-[1.75] max-w-[420px] mx-auto" style={{ color: '#9EA1B0' }}>
            Our team of highly qualified doctors brings years of expertise to deliver trusted,
            personalized care for every patient
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start justify-center gap-16 sm:gap-6">
          {doctors.map(({ img, name, role, desc, featured }) => (
            <div
              key={name}
              className="bg-white rounded-2xl flex flex-col items-center text-center relative w-full sm:w-auto"
              style={{
                width: undefined,
                maxWidth: '280px',
                minWidth: '240px',
                paddingTop: '80px',
                paddingBottom: '32px',
                paddingLeft: '24px',
                paddingRight: '24px',
                margin: '0 auto',
                boxShadow: featured ? '0 8px 40px rgba(0,20,57,0.12)' : '0 4px 20px rgba(0,20,57,0.07)',
              }}
            >
              <div
                className="absolute rounded-full overflow-hidden border-4 border-white"
                style={{ width: '130px', height: '130px', top: '-65px', left: '50%', transform: 'translateX(-50%)' }}
              >
                <img src={img} alt={name} className="w-full h-full object-cover" />
              </div>

              <p className="font-bold text-[17px] mb-1" style={{ color: '#001439' }}>{name}</p>
              <p className="text-sm font-medium mb-3" style={{ color: '#2CA8E0' }}>{role}</p>
              <p className="text-sm leading-[1.65]" style={{ color: '#9EA1B0' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExpDoctor
