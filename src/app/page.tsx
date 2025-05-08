"use client"

import { CheckCircle } from 'lucide-react';
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-gradient-to-br from-emerald-950 via-green-900 to-emerald-950">
      {/* Hero Section */}
      <main className="flex-1 flex items-center relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-20 w-60 h-60 bg-emerald-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
        </div>

        <section className="w-full py-16 md:py-24 relative z-10 flex flex-col justify-center h-full" aria-labelledby="hero-title">
          <div className="container px-6 md:px-12 max-w-6xl mx-auto h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center h-full">
              {/* Columna izquierda: Título y descripción */}
              <div className="flex flex-col items-center md:items-start space-y-6 text-center md:text-left h-full justify-center">
                <a
                  href="https://twitch.tv/midudev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium mb-2 transition-colors bg-[#9147FF] text-white hover:bg-[#772ce8] shadow-md"
                  style={{ boxShadow: '0 2px 8px 0 #9147FF33' }}
                  aria-label="Ver hackathon de midudev en Twitch"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block" style={{ verticalAlign: 'middle' }}>
                    <path d="M4 2L2 6V22H7V24H11L13 22H17L22 17V2H4Z" fill="#fff"/>
                    <path d="M7 17V4H20V16L17 19H13L11 21V19H7Z" fill="#9147FF"/>
                    <rect x="15" y="7" width="2" height="6" fill="#fff"/>
                    <rect x="11" y="7" width="2" height="6" fill="#fff"/>
                  </svg>
                  <span className="align-middle">Hackathon midudev en Twitch</span>
                </a>

                <h1 id="hero-title" className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
                  Toma <span className="text-emerald-300">Bien</span>
                </h1>

                <p className="text-lg text-white max-w-md leading-relaxed">
                  Organiza tus medicamentos y nunca olvidar una dosis.
                </p>

                <ul className="flex flex-col space-y-4 mt-4 w-full max-w-md" aria-label="Características principales">
                  <li className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="h-5 w-5 rounded-full bg-emerald-600 flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    <p className="text-white text-sm">Registra tus tratamientos médicos de forma sencilla</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="h-5 w-5 rounded-full bg-emerald-600 flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    <p className="text-white text-sm">Recibe recordatorios inteligentes para tomar tus medicamentos</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="h-5 w-5 rounded-full bg-emerald-600 flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    <p className="text-white text-sm">Mejora tu adherencia a los tratamientos médicos</p>
                  </li>
                </ul>
              </div>

              {/* Columna derecha: Card de lista de espera */}
              <div className="flex justify-center md:justify-end">
                {/* <Waitlist /> */}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-emerald-800" role="contentinfo">
        <div className="container px-6 md:px-12 max-w-6xl mx-auto py-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-300">TomaBien ❤️</p>
          </div>
          <nav className="flex gap-4 mt-4 md:mt-0 items-center" aria-label="Redes sociales">
            <span className="text-gray-400 text-sm font-medium select-all">@mancuellofran</span>
            <Link
              href="https://instagram.com/mancuellofran"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://linkedin.com/in/franciscomancuello"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/mancuellofran/toma-bien"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10Z" />
              </svg>
              <span className="sr-only">GitHub</span>
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
