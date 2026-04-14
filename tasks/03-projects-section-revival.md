# Task 03 — Selected Portfolio: Dar Vida à Seção de Projetos

## Problema
A seção de projetos parece sem vida — cards são caixas escuras sem destaque visual.

## Mudanças

### `ProjectCard.tsx`
- **Hover tilt 3D** leve (CSS perspective transform)
- **Ícone de linguagem** com cor real da linguagem (ex: C# roxo, Java vermelho)
- **Shimmer border** no hover — borda que "brilha" percorrendo o card
- **Gradient mesh** de fundo animado que muda suavemente
- **Arrow reveal** — a seta de "Ver Código" desliza da esquerda no hover
- **Star glow** — contador de stars com brilho sutil

### `Projects.tsx`
- **Staggered entrance** — cada card entra com delay incremental
- **Section divider** decorativo entre o título e os cards
- **Skeleton loading** animado ao invés de texto simples de loading
- **Empty state** mais visual com ilustração para o card placeholder

### Novo componente: `SkeletonCard.tsx`
- Skeleton com shimmer animation para o estado de loading

## Arquivos Afetados
- `src/components/ProjectCard.tsx`
- `src/sections/Projects.tsx`
- `src/components/SkeletonCard.tsx` (novo)

## Critério de Sucesso
- Cards parecem "vivos" com interação
- Loading é visual e agradável, não apenas texto
- Hover nos cards é satisfatório e convida ao clique
