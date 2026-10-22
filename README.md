# Site Institucional para Clínica Odontológica

> Landing page moderna, responsiva e otimizada para SEO, feita em Next.js para uma clínica odontológica.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

## Sobre o projeto

Site de página única para apresentar uma clínica odontológica, seus tratamentos e facilitar o primeiro contato do paciente pelo WhatsApp ou e-mail. Projeto feito para uma clínica real; algumas partes ainda usam conteúdo de exemplo.

## Funcionalidades

- Seções de destaque, especialidades, sobre, resultados, depoimentos, perguntas frequentes e contato.
- Cabeçalho fixo com navegação por âncoras e botão flutuante de WhatsApp.
- Animações de entrada com Framer Motion.
- FAQ em acordeão acessível (Radix UI).
- Suporte a tema escuro, link "pular para o conteúdo" e layout responsivo.
- SEO: metadados, Open Graph, URL canônica, `robots.txt` e `sitemap.xml`.
- Bloco visual de "atendimento inteligente" que apresenta a ideia de um assistente de IA (apenas interface, ainda sem integração com IA).

## Tecnologias

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion, Radix UI, lucide-react e ESLint.

## Como executar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # versão de produção
```

## Estrutura do projeto

```text
src/
├── app/layout.tsx           # Metadados de SEO e layout base
├── app/page.tsx             # Seções da página
├── components/site-shell.tsx  # Cabeçalho, rodapé e botão de WhatsApp
└── components/ui/accordion.tsx
public/                      # robots.txt, sitemap.xml e ícones
```

## Competências demonstradas

- Front-end moderno com **Next.js, React e TypeScript**.
- **SEO técnico** e acessibilidade básica.
- Projeto para um **negócio real**, com foco em conversão (contato pelo WhatsApp).

## Próximos passos

- Ligar o bloco de atendimento a um assistente de IA real (perguntas frequentes e triagem para agendamento).
- Substituir os depoimentos e o número de WhatsApp de exemplo pelos dados reais antes de publicar.
