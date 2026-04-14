# Task 01 — Sistema de Animações Avançado

## Objetivo
Tornar o site dinâmico e divertido de navegar, adicionando animações ricas e micro-interações em todas as seções.

## Mudanças

### `globals.css` — Novas animações
- **Staggered reveal**: Elementos filhos entram com delay incremental
- **Slide-in-left / slide-in-right**: Para seções alternadas
- **Scale-in**: Para cards de projeto e skills
- **Magnetic hover**: Botões que "seguem" levemente o cursor
- **Text shimmer**: Efeito gradiente animado no título hero
- **Tilt on hover**: Cards com efeito 3D leve no hover
- **Typing cursor**: Efeito de cursor piscando no badge do hero
- **Glow pulse**: Botão CTA com pulso luminoso
- **Parallax background blobs**: Blobs que se movem com scroll suave
- `prefers-reduced-motion`: Respeitar configuração do usuário

### `tailwind.config.ts`
- Adicionar novas keyframes: `slide-in-left`, `slide-in-right`, `scale-in`, `shimmer`, `tilt`
- Adicionar novas animações correspondentes

### `RevealObserver.tsx`
- Adicionar suporte a `data-delay` para stagger automático
- Adicionar suporte a direção (`.reveal-left`, `.reveal-right`)
- Observar também `.reveal-scale`

## Arquivos Afetados
- `src/app/globals.css`
- `tailwind.config.ts`
- `src/components/RevealObserver.tsx`

## Critério de Sucesso
- Animações suaves e performáticas (usando transform/opacity)
- `prefers-reduced-motion` respeitado
- Transições de 200-600ms para micro-interações
- Nenhum layout jank durante animações
