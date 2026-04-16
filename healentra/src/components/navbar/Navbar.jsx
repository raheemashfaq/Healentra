import { useState } from 'react'
import hlogo from '../../assets/images/hlogo.png'
import avatar from '../../assets/images/Ellipse 196.png'

const navLinks = [
  { label: 'Services', hasDropdown: true },
  { label: 'Join as doctors' },
  { label: 'About us' },
  { label: 'Blogs' },
  { label: 'Contact Us' },
]

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div
        className="w-full py-2 px-4 lg:px-[50px] flex items-center relative"
        style={{ backgroundColor: '#8DC645' }}
      >
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-2">
          <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
            <path d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z" />
          </svg>
          <span className="text-white text-sm whitespace-nowrap" style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>
            No hidden fees |&nbsp; Scale your practice with clear pricing and packages
          </span>
          <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
            <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
          </svg>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
          </svg>
          <span className="text-white text-sm font-semibold whitespace-nowrap">(866) 938-3272</span>
        </div>
      </div>

      <nav className="w-full">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[50px] py-4 lg:py-5 flex items-center justify-between">
          <img src={hlogo} alt="Healentra" className="h-10 lg:h-[52px] w-auto object-contain" />

          <ul className="hidden lg:flex items-center gap-5">
            {navLinks.map(({ label, hasDropdown }) => (
              <li key={label}>
                {hasDropdown ? (
                  <button
                    onClick={() => setServicesOpen(o => !o)}
                    className="flex items-center gap-1.5 text-base font-normal leading-normal"
                    style={{ color: '#2CA8E0' }}
                  >
                    {label}
                    <svg className="w-3 h-3" fill="#2CA8E0" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                ) : (
                  <a href="#" className="text-white text-base font-normal leading-normal hover:opacity-80 transition-opacity">
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <div className="rounded-lg p-2.5" style={{ backgroundColor: '#2CA8E0' }}>
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
              </svg>
            </div>
            <div className="flex items-center gap-2.5 border border-white rounded-[10px] px-3 py-2">
              <img
                src={avatar}
                alt="Kiara"
                className="w-9 h-9 rounded-full object-cover"
              />
              <span className="text-white text-base font-semibold leading-normal">Kiara</span>
            </div>
          </div>

          <button onClick={() => setMenuOpen(o => !o)} className="lg:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 lg:px-[50px]">
          <div className="h-px bg-white opacity-20" />
        </div>

        {menuOpen && (
          <div className="lg:hidden px-4 py-5" style={{ backgroundColor: 'rgba(0,20,57,0.97)' }}>
            <ul className="flex flex-col gap-5">
              {navLinks.map(({ label, hasDropdown }) => (
                <li key={label}>
                  {hasDropdown ? (
                    <button className="flex items-center gap-1.5 text-base font-normal" style={{ color: '#2CA8E0' }}>
                      {label}
                    </button>
                  ) : (
                    <a href="#" className="text-white text-base font-normal hover:opacity-80">{label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
