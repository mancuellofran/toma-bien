"use client";

import Link from "next/link";
import { ArrowLeft, Pill} from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center bg-gradient-to-br from-emerald-950 via-green-900 to-emerald-950 relative overflow-hidden" role="main" aria-label="Página no encontrada">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-0 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <Pill className="absolute left-10 top-24 w-10 h-10 text-emerald-300 opacity-80 animate-float" />
        <Pill className="absolute right-16 top-1/3 w-8 h-8 text-emerald-500 opacity-60 animate-float delay-200" />
        <Pill className="absolute left-1/2 bottom-20 w-12 h-12 text-teal-400 opacity-70 animate-float delay-500" />
      </div>
      <section className="z-10 flex flex-col items-center justify-center text-center w-full" aria-labelledby="notfound-title">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-3xl">
          <div className="flex flex-col items-center gap-2">
            <Pill className="w-24 h-24 text-white drop-shadow-lg animate-bounce" aria-hidden="true" />
            <h1 id="notfound-title" className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
              404
            </h1>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 w-full max-w-xl">
            <p className="text-lg md:text-2xl text-white/80">
              <span className="inline-flex items-center gap-2 font-bold text-emerald-300">
                ¡Ups! Te pasaste de dosis...
              </span>
              <br />
              Has llegado a una página que no existe en la receta de TomaBien.<br />
              <span className="text-emerald-300 font-semibold">¡No te preocupes!</span> Vuelve al inicio y sigue cuidando tu salud ❤️
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base shadow-lg transition-colors animate-bounce-slow"
              aria-label="Volver al inicio"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
