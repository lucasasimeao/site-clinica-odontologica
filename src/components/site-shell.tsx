"use client";

import { motion } from "framer-motion";
import { CalendarDays, MessageCircleMore, Sparkles } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Especialidades", href: "#specialties" },
  { label: "Sobre", href: "#about" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "Contato", href: "#contact" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(144,202,249,0.18),_transparent_48%)] text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/70 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-lg shadow-sky-600/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold tracking-wide text-slate-900 dark:text-white">Dr. Érica de Araújo Silva</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Implantodontia & Estética</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-sky-600">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-500"
          >
            <CalendarDays className="h-4 w-4" />
            Agendar
          </Link>
        </div>
      </header>

      <main id="top">{children}</main>

      <footer className="border-t border-slate-200 bg-white/80 py-10 dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 dark:text-slate-400">
          <p>© 2026 Clínica Dr. Érica de Araújo Silva. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#about" className="transition hover:text-sky-600">Sobre nós</a>
            <a href="#contact" className="transition hover:text-sky-600">Contato</a>
            <a href="#faq" className="transition hover:text-sky-600">Perguntas frequentes</a>
          </div>
        </div>
      </footer>

      <motion.a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -4, scale: 1.03 }}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-500/30"
      >
        <MessageCircleMore className="h-4 w-4" />
        Falar no WhatsApp
      </motion.a>
    </div>
  );
}
