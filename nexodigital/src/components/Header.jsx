import { useState } from 'react';
import { CONFIG } from '../config/constants';

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#por-que-nosotros', label: 'Por qué nosotros' },
  { href: '#plataforma', label: 'Plataforma' },
  { href: '#contacto', label: 'Contacto' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 font-semibold text-primary-900 tracking-tight">
          {!logoError ? (
            <img
              src={CONFIG.LOGO_HEADER}
              alt={CONFIG.COMPANY_NAME}
              className="h-8 w-auto object-contain"
              onError={() => setLogoError(true)}
            />
          ) : null}
          {logoError && (
            <span className="text-xl">Byte <span className="text-primary-600">UY</span></span>
          )}
        </a>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center rounded-lg bg-primary-800 px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-700 transition-colors"
        >
          Escribinos
        </a>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Menú"
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="mt-2 rounded-lg bg-primary-800 px-3 py-2.5 text-sm font-medium text-white text-center"
              onClick={() => setOpen(false)}
            >
              Escribinos
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
