const steps = [
  {
    label: 'Smarter Clinical Workflows That Simplify Your Day',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="#8DC645" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v4m0 0l-2-2m2 2l2-2" />
        <circle cx="12" cy="9" r="1" fill="#8DC645" />
      </svg>
    ),
  },
  {
    label: 'Integrated Billing & Claims for Faster Payments',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="#8DC645" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    label: 'Automated Scheduling for a Full Calendar',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="#8DC645" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v4M8 2v4M3 10h18" />
        <circle cx="12" cy="15" r="2" stroke="#8DC645" />
      </svg>
    ),
  },
  {
    label: 'Reputation Tools for Patient Growth and Loyalty',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="#8DC645" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <circle cx="12" cy="12" r="3" stroke="#8DC645" />
      </svg>
    ),
  },
  {
    label: 'One Platform, Simplifying Private Healthcare',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="#8DC645" strokeWidth="1.5" viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="9" ry="3" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5v6c0 1.657 4.03 3 9 3s9-1.343 9-3V5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 11v6c0 1.657 4.03 3 9 3s9-1.343 9-3v-6" />
      </svg>
    ),
  },
]

const CompleteCare = () => {
  return (
    <section className="w-full py-12 lg:py-20 relative overflow-hidden" style={{ backgroundColor: '#001439' }}>
      <svg className="absolute left-4 top-1/2 -translate-y-1/2 opacity-10 w-32 h-32" fill="none" stroke="#8DC645" strokeWidth="1" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H7a2 2 0 00-2 2v3a4 4 0 004 4 4 4 0 004-4V5a2 2 0 00-2-2h-2zm0 0V1m6 2V1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v9" />
      </svg>
      <svg className="absolute right-4 top-1/2 -translate-y-1/2 opacity-10 w-32 h-32" fill="none" stroke="#8DC645" strokeWidth="1" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8" />
      </svg>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[50px]">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-white font-bold text-[26px] md:text-[34px] lg:text-[42px] leading-tight mb-5">
            Complete Care, All in One Place
          </h2>
          <p className="text-[15px] leading-[1.75] max-w-[520px] mx-auto" style={{ color: '#9EA1B0' }}>
            Unlike most EHRs that end with clinical notes, Tebra goes beyond integrating
            your EHR with billing, scheduling, and reputation management tools that
            seamlessly work together.
          </p>
        </div>

        <div className="hidden lg:block">
          <div className="flex items-center mb-5">
            {steps.map(({ icon }, index) => (
              <div key={index} className="flex items-center flex-1">
                <div className="shrink-0">{icon}</div>
                {index < steps.length - 1 && (
                  <div className="flex-1 flex items-center mx-2">
                    <div className="flex-1 border-t-2 border-dashed" style={{ borderColor: 'rgba(141,198,69,0.45)' }} />
                    <svg className="w-3 h-3 shrink-0 -ml-1" fill="#8DC645" viewBox="0 0 24 24">
                      <path d="M8 5l8 7-8 7V5z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex">
            {steps.map(({ label }) => (
              <div key={label} className="flex-1 pr-6">
                <p className="text-white text-sm leading-[1.65]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden flex flex-col gap-5">
          {steps.map(({ icon, label }, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="shrink-0">{icon}</div>
              <p className="text-white text-sm leading-[1.65] pt-3">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompleteCare
