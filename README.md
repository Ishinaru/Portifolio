# Portfolio — David Vinícius

Portfolio pessoal construído em **Next.js 14 + TypeScript + Tailwind CSS**, com suporte a **português/inglês** e listagem dinâmica de projetos via **GitHub API**.

## ✨ Features

- Next.js 14 (App Router) com export estático
- Tailwind CSS com tema customizado (glassmorphism + gradientes)
- Internacionalização (PT / EN) com persistência em `localStorage`
- Projetos carregados em tempo real do GitHub
- Deploy automatizado via GitHub Actions → GitHub Pages
- Totalmente responsivo

## 🗂 Estrutura

```
src/
├── app/                 # App Router (layout, page, globals.css)
├── components/          # Componentes reutilizáveis
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── LanguageToggle.tsx
│   └── RevealObserver.tsx
├── sections/            # Seções da landing page
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── SkillsGrid.tsx
│   └── ContactSection.tsx
├── contexts/            # React Contexts (idioma)
│   └── LanguageContext.tsx
└── utils/               # Utilidades
    ├── github.ts        # Fetch de repositórios
    └── translations.ts  # Textos PT/EN
```

## 🚀 Começando

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## 🏗 Build

```bash
npm run build
```

A saída estática é gerada em `out/`.

## 🌐 Deploy no GitHub Pages

### 1. Configure o nome do repositório

Em [next.config.mjs](next.config.mjs) ajuste `repoName` para o nome exato do seu repositório:

```js
const repoName = 'Portifolio';
```

### 2. Ative GitHub Pages

No repositório, vá em **Settings → Pages** e selecione:

- **Source:** GitHub Actions

### 3. Push para `main`

```bash
git add .
git commit -m "feat: portfolio"
git push origin main
```

O workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) fará build e publicará automaticamente em:

```
https://<usuario>.github.io/<repoName>/
```

## 🔧 Configuração

- **Usuário GitHub:** altere `GITHUB_USER` em [src/utils/github.ts](src/utils/github.ts)
- **Textos:** edite [src/utils/translations.ts](src/utils/translations.ts)
- **Stack tecnológica:** edite `SKILLS` em [src/sections/SkillsGrid.tsx](src/sections/SkillsGrid.tsx)
- **Cores/tema:** [tailwind.config.ts](tailwind.config.ts)

## 📜 Licença

MIT
