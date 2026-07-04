"use client";

import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Clock3,
  HeartPulse,
  MapPin,
  Microscope,
  Phone,
  ShieldCheck,
  SmilePlus,
  Sparkles,
  Star,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const specialties = [
  {
    title: "Implantes dentários",
    description: "Planejamento digital e reabilitação estética com previsibilidade clínica.",
    icon: Sparkles,
  },
  {
    title: "Estética dental",
    description: "Clareamento, facetas e harmonização do sorriso com resultados naturais.",
    icon: SmilePlus,
  },
  {
    title: "Ortodontia e alinhamento",
    description: "Tratamentos personalizados para um sorriso saudável e funcional.",
    icon: Stethoscope,
  },
  {
    title: "Odontologia preventiva",
    description: "Rotinas de cuidado e diagnóstico precoce para preservar a saúde.",
    icon: ShieldCheck,
  },
];

const testimonials = [
  {
    quote: "O atendimento foi impecável, do acolhimento à solução final.",
    name: "Fernanda L.",
    role: "Paciente há 2 anos",
  },
  {
    quote: "Tecnologia, confiança e carinho em cada etapa do tratamento.",
    name: "Miguel T.",
    role: "Paciente de implante",
  },
  {
    quote: "Meu sorriso ficou mais bonito e natural do que eu imaginei.",
    name: "Patrícia A.",
    role: "Paciente de estética",
  },
];

const faqs = [
  {
    question: "Quais tratamentos vocês oferecem?",
    answer: "Atendemos com implantes, estética, reabilitação, ortodontia e prevenção com foco em estética e funcionalidade.",
  },
  {
    question: "A consulta inicial é presencial?",
    answer: "Sim. A primeira consulta inclui avaliação, conversa sobre objetivos e plano de tratamento personalizado.",
  },
  {
    question: "Aceitam convênios e planos?",
    answer: "Trabalhamos com diferentes formas de pagamento e orientamos sobre as melhores opções para cada caso.",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-medium text-sky-700 dark:border-sky-900/60 dark:bg-sky-950/40 dark:text-sky-300">
            <Bot className="h-4 w-4" />
            Assistente de atendimento com IA para agendamentos inteligentes
          </div>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Sorriso elegante, saúde e confiança em cada consulta.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300">
            Clínica premium voltada para tratamentos odontológicos estéticos e funcionais, com tecnologia de ponta e acolhimento humanizado.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-700">
              Agendar consulta <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#about" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-600 dark:border-slate-700 dark:text-slate-200">
              Conhecer a clínica
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-500" />Atendimento premium</div>
            <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-500" />Tecnologia digital</div>
            <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-500" />Resultados naturais</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-[2rem] border border-slate-200 bg-white/70 p-6 shadow-2xl shadow-sky-100/60 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-none">
          <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-6 dark:border-slate-800 dark:from-slate-800/80 dark:to-slate-900">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">Atendimento inteligente</p>
                <h2 className="mt-2 text-2xl font-semibold">IA para orientação rápida</h2>
              </div>
              <div className="rounded-2xl bg-sky-600 p-3 text-white"><Bot className="h-6 w-6" /></div>
            </div>
            <div className="mt-6 space-y-3">
              {[
                "Quero agendar uma avaliação",
                "Tenho dúvidas sobre implantes",
                "Preciso de um plano estético",
              ].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm dark:border-slate-700 dark:bg-slate-950/50">
                  <span>{item}</span>
                  <ArrowRight className="h-4 w-4 text-sky-600" />
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-slate-900 p-4 text-sm text-slate-100 dark:bg-slate-950">
              <p className="font-semibold">Resposta instantânea</p>
              <p className="mt-1 text-slate-300">“Podemos te guiar sobre horários, procedimentos e a melhor especialidade para você.”</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="specialties" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">Especialidades</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Tratamentos sob medida para o seu sorriso</h2>
          </div>
          <p className="max-w-2xl text-slate-600 dark:text-slate-300">Cada procedimento é planejado com precisão, estética e conforto para oferecer resultados duradouros.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {specialties.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.35, delay: index * 0.05 }} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">Sobre a clínica</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Excelência clínica com cuidado humano</h2>
            <p className="mt-5 text-slate-600 dark:text-slate-300">A clínica de Dr. Érica de Araújo Silva combina tecnologia de ponta, planejamento detalhado e acolhimento para transformar sorrisos com segurança e naturalidade.</p>
            <div className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-3"><HeartPulse className="mt-0.5 h-5 w-5 text-rose-500" />Atendimento personalizado com foco em estética e bem-estar.</div>
              <div className="flex items-start gap-3"><Microscope className="mt-0.5 h-5 w-5 text-sky-500" />Diagnóstico preciso com recursos modernos e digitais.</div>
              <div className="flex items-start gap-3"><UserRoundCheck className="mt-0.5 h-5 w-5 text-emerald-500" />Equipe preparada para acolher pacientes de todas as idades.</div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Anos de experiência", value: "15+" },
              { label: "Pacientes satisfeitos", value: "2.5k" },
              { label: "Taxa de indicação", value: "96%" },
              { label: "Média de resposta", value: "< 10 min" },
            ].map((item) => (
              <div key={item.label} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/60">
                <p className="text-3xl font-semibold text-slate-900 dark:text-white">{item.value}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white dark:border-slate-800">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">Galeria</p>
            <h2 className="mt-3 text-3xl font-semibold">Resultados que inspiram confiança</h2>
            <p className="mt-4 text-slate-300">Cada sorriso é tratado com naturalidade, equilíbrio e atenção aos detalhes.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Sorriso harmonioso",
              "Implantes estéticos",
              "Clareamento premium",
              "Reabilitação completa",
            ].map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-4 h-28 rounded-[1rem] bg-gradient-to-br from-sky-100 via-white to-slate-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950" />
                <h3 className="font-semibold">{item}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Resultados personalizados com alto padrão estético.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">Depoimentos</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">O que nossos pacientes dizem</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (<Star key={index} className="h-4 w-4 fill-current" />))}
              </div>
              <p className="mt-4 text-slate-600 dark:text-slate-300">“{item.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Perguntas frequentes</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">Tudo o que você precisa saber antes de agendar sua avaliação.</p>
          </div>
          <Accordion type="single" collapsible className="w-full rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            {faqs.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-xl dark:border-slate-800 lg:grid-cols-[1fr_0.9fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">Localização e contato</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Agende sua avaliação com conforto</h2>
            <p className="mt-4 max-w-xl text-slate-300">Estamos em uma localização central e acolhemos com agilidade e excelência.</p>
            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-sky-400" />Rua das Flores, 123, Vila Olímpia, São Paulo</div>
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-sky-400" />(11) 99999-9999</div>
              <div className="flex items-center gap-3"><Clock3 className="h-5 w-5 text-sky-400" />Segunda a sexta, das 8h às 19h</div>
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-slate-800 bg-white/10 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold">Fale com nossa equipe</h3>
            <p className="mt-2 text-sm text-slate-300">Responderemos em até 10 minutos para te ajudar com horário, tratamentos e dúvidas.</p>
            <div className="mt-6 space-y-3">
              <a href="mailto:contato@clinicadrerica.com.br" className="block rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm font-medium text-white transition hover:border-sky-500">contato@clinicadrerica.com.br</a>
              <a href="https://wa.me/5511999999999" className="block rounded-2xl bg-sky-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-sky-500">Conversar no WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
