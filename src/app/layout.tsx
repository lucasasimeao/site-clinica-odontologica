import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clinicadrerica.com.br"),
  title: "Dr. Érica de Araújo Silva | Clínica Odontológica Premium",
  description: "Clínica odontológica premium com implantes, estética e atendimento acolhedor em São Paulo.",
  keywords: ["dentista", "implante", "estética dental", "clinica odontológica", "São Paulo"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dr. Érica de Araújo Silva | Clínica Odontológica Premium",
    description: "Tratamentos odontológicos estéticos e funcionais com tecnologia avançada.",
    type: "website",
    url: "https://clinicadrerica.com.br",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
        <a href="#top" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-sky-600 focus:px-4 focus:py-2 focus:text-white">
          Ir para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
