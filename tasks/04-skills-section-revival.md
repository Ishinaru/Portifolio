# Task 04 — Technology Stack: Dar Vida à Seção de Skills

## Problema
A seção de skills parece estática e sem vida — é só um carrossel simples com tags.

## Mudanças

### `SkillsGrid.tsx`
- **Substituir carrossel por grid interativo** com cards que respondem ao hover
- **Hover glow**: cada card brilha na cor do seu accent ao hover
- **Progress indicator** visual (barra/anel) para nível de proficiência
- **Icon real** para cada tecnologia ao invés de abreviação texto
- **Tooltip** no hover mostrando detalhes (anos de experiência, projetos)
- **Animated entrance** — cards entram em stagger com scale-in
- **Tags com hover effect** — tags mudam de cor e escalam levemente
- **Partículas de fundo** sutis na seção (dots grid pattern)

### CSS necessário
- Dot grid pattern de fundo
- Card glow effect
- Hover scale com transição suave

## Arquivos Afetados
- `src/sections/SkillsGrid.tsx`
- `src/app/globals.css`

## Critério de Sucesso
- Seção parece moderna e interativa
- Cada skill tem identidade visual própria
- Hover effects são satisfatórios
- Grid funciona bem em mobile (2 colunas)
