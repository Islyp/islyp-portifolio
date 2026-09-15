# Tecnologias — referência e ícones

## Pedido e composição

O usuário pediu duas faixas de ponta a ponta da página, em sentidos opostos, usando a imagem `codex-clipboard-dadba4bd-c56b-4df7-a273-a84ce778274c.png`. Cópia preservada em [`referencias/TECNOLOGIAS-carrosseis-referencia.png`](referencias/TECNOLOGIAS-carrosseis-referencia.png).

- Primeira faixa, para a esquerda: HTML, CSS, JavaScript, TypeScript, Node.js, React, Three.js, Astro, Bootstrap, Firebase e Supabase.
- Segunda faixa, para a direita: Claude Code, Codex, Figma, Photoshop, Canva, Design responsivo, Cloudflare Workers / Pages, Vercel e Git / GitHub.
- Título “Tecnologias utilizadas”, ícones coloridos e nomes sobre o cenário contínuo, logo após a seção Sobre.

## Origem dos SVGs

Os arquivos ficam em `assets/technologies/`, servidos localmente. Nenhuma biblioteca ou CDN é carregada em tempo de execução.

- [Devicon](https://github.com/devicons/devicon/tree/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons), revisão `7330accdbc47e2dc0c19789a48533c4a3c50fe58`: HTML, CSS, JavaScript, TypeScript, Node.js, React, Three.js, Astro, Bootstrap, Firebase, Supabase, Figma, Photoshop, Canva, Cloudflare, Vercel, Git e GitHub. Versões `original.svg`; licença MIT preservada em `DEVICON-LICENSE.txt`.
- [Lobe Icons](https://github.com/lobehub/lobe-icons/tree/a94750e3f5f8fc33757b839d85030e742284e43a/packages/static-svg/icons), revisão `a94750e3f5f8fc33757b839d85030e742284e43a`: `claude-color.svg`, apresentado como Claude Code, e `codex.svg`. Licença MIT preservada em `LOBE-ICONS-LICENSE.txt`.
- `responsive.svg`: desenho vetorial próprio de monitor e celular para Design responsivo.

Adaptação para o cenário escuro: o corpo do A de Astro foi alterado para branco no SVG; Three.js, Codex, Vercel e GitHub recebem branco por filtro CSS. As formas dos símbolos foram mantidas. Marcas e nomes identificam as tecnologias mencionadas pelo usuário.

## Movimento e acessibilidade

Cada faixa usa duas cópias visualmente idênticas, com largura mínima de uma tela por cópia. A animação percorre uma metade exata do conjunto, a 32 px/s, em sentidos opostos. As cópias decorativas ficam ocultas de leitores de tela e inertes.

O botão ao lado do título pausa ou retoma as duas faixas; passar o mouse pausa apenas a faixa sob o ponteiro. As animações também param fora da área visível e com a aba oculta. Com movimento reduzido ou sem JavaScript, os vinte itens são apresentados em listas estáticas que se ajustam à largura disponível.

## Verificação

Conferidos em Chromium/Edge nas larguras de 320, 390, 768, 1440 e 3440 px: vinte itens com ícones carregados, largura total sem rolagem horizontal, sentidos opostos, continuidade na passagem entre ciclos e pausa/retomada. Com movimento reduzido, todos os itens cabem na tela e as cópias ficam ocultas. Também foi verificada a apresentação sem JavaScript em 320 px. Capturas e verificações locais ficam em `test-results/`, ignorado no Git.
