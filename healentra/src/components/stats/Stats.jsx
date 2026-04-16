const stats = [
  { value: '1,000+', label: 'Healthcare Providers' },
  { value: '98%',    label: 'Patient Satisfaction' },
  { value: '98%',    label: 'Reduced No-Shows' },
  { value: '$1M',    label: 'Revenue Generated' },
]

const Stats = () => {
  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-[50px]" style={{ backgroundColor: '#E5EED4' }}>
      <div className="max-w-[1440px] mx-auto">
        <p className="text-center font-semibold text-[15px] lg:text-[17px] mb-8" style={{ color: '#001439' }}>
          Trusted by healthcare providers across specialties
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-white rounded-2xl px-4 lg:px-8 py-6 lg:py-8 text-center">
              <p className="text-[28px] lg:text-[40px] font-bold leading-none mb-3" style={{ color: '#2CA8E0' }}>
                {value}
              </p>
              <p className="text-sm" style={{ color: '#9EA1B0' }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
