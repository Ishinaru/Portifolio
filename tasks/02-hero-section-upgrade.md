# Task 02 — Hero Section: Impacto Visual Máximo

## Objetivo
Transformar o Hero num momento "wow" inicial com efeitos visuais premium.

## Mudanças

### `Hero.tsx`
- **Typing effect** no badge "Disponível para novos projetos" com cursor piscando
- **Animated counter** nos "3+ Anos de Experiência" (contagem de 0 a 3)
- **Floating geometric shapes** animados ao redor da foto (triângulos, quadrados, círculos)
- **Mouse parallax** nos blobs de fundo — movem suavemente com o cursor
- **Scroll indicator** animado na parte inferior (seta pulsando para baixo)
- **Text gradient animation** mais suave e visível no "Futuro Digital"
- **Stat cards adicionais** ao redor da foto: "10+ Projetos", "5+ Tecnologias"
- **Glow ring** animado ao redor da foto de perfil

## Arquivos Afetados
- `src/sections/Hero.tsx`
- `src/app/globals.css` (novas keyframes se necessário)

## Critério de Sucesso
- Hero prende a atenção nos primeiros 3 segundos
- Animações não travam nem causam CLS
- Responsivo em mobile (ocultar elementos decorativos se necessário)
