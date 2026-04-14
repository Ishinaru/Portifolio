# Task 05 — Contact Section: Fix Email Gigante + Redesign

## Problema
O email `david-pereiraliman@outlook.com` está com `text-2xl md:text-4xl` — é enorme e quebra o layout em mobile com `break-all`.

## Mudanças

### `ContactSection.tsx`
- **Reduzir tamanho do email** para `text-lg md:text-xl` com estilo mais elegante
- **Adicionar ícone de copy** ao lado do email para copiar com um clique
- **Feedback visual** "Copiado!" ao clicar
- **Redesign do layout** com cards separados para cada canal (Email, LinkedIn, GitHub)
- **Hover effects** nos cards de contato com glow na cor da brand
- **Animated entrance** na seção com reveal staggered
- **Decorative orbs** de fundo com parallax sutil

### Novo layout proposto
```
[ Email Card ]  [ LinkedIn Card ]  [ GitHub Card ]
  Com ícone,      Com ícone,         Com ícone,
  label,          label,             label,
  e link          e link             e link
```

## Arquivos Afetados
- `src/sections/ContactSection.tsx`

## Critério de Sucesso
- Email legível e proporcional
- Copiar email com 1 clique
- Visual consistente com o resto do site
- Layout responsivo (empilha em mobile)
