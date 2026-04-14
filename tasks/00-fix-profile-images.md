# Task 00 — Fix Profile Images (Hero & About)

## Problema
As imagens `foto-perfil-1.jpg` e `foto-perfil-2.jpg` não estão encaixadas corretamente nas suas divs. O `object-cover` está aplicado mas falta `rounded` correspondente ao container e o aspecto ratio não está sendo respeitado.

## Mudanças

### `Hero.tsx` — foto-perfil-2.jpg
- Adicionar `rounded-[3rem]` na Image para acompanhar o container
- Garantir que a imagem preencha 100% do container com `object-cover` + `object-top`
- Remover a div wrapper desnecessária com o texto `text-9xl` que não exibe nada

### `About.tsx` — foto-perfil-1.jpg
- Adicionar `rounded-[2rem]` na Image para acompanhar o container interno
- Usar `object-cover` + `object-top` para focar no rosto
- Garantir que o `overflow-hidden` do container pai está cortando corretamente

## Arquivos Afetados
- `src/sections/Hero.tsx`
- `src/sections/About.tsx`

## Critério de Sucesso
- Ambas as imagens preenchem 100% do container sem distorção
- O arredondamento da imagem segue o arredondamento do container
- O rosto aparece centralizado/visível
