# M14 — Fundo da imagem fornecida pelo usuário

**Data:** 14 de setembro de 2026  
**Método:** ferramenta nativa de geração de imagens; sem CLI.  
**Pedido:** “faça usando o background dessa imagem”.  
**Etapa:** planejamento por imagens; nenhuma implementação.

## Entradas e arquivos

- [Referência enviada pelo usuário](referencias/M14-referencia-fornecida.png): cópia intacta de `C:/Users/Paulo/Downloads/Imagem do Codex 14 de set. de 2026, 18_51_02.png`, com 1024 × 1536 px.
- [M14-01 — Fundo adaptado](modelos/M14-01-fundo-referencia.png): versão gerada do cenário sem elementos de interface e prolongada verticalmente; 724 × 2172 px.
- [M14-02 — Página com o fundo da referência](modelos/M14-02-pagina-fundo-referencia.png): layout atual sobre esse cenário, mantendo duas fileiras de tecnologias; 724 × 2171 px.

A referência fornecida substitui a vista aérea do M13 como orientação atual do fundo. O pedido é sobre o cenário, por isso o notebook do layout atual foi mantido. Os monitores de vidro e a pessoa da referência não foram importados como mudanças de layout.

A cópia da referência e as cópias dos resultados foram conferidas por SHA-256. Os originais permanecem nos respectivos locais. A remoção dos elementos sobrepostos e a extensão do cenário foram feitas por geração de imagem; o fundo adaptado não é uma extração pixel a pixel. A referência original fica preservada para comparação.

## Originais gerados

| Etapa | Arquivo |
|---|---|
| Fundo adaptado | `exec-b48291ce-b4ce-435a-aa1d-772aa7d56253.png` |
| Composição da página | `exec-fc370f61-d24e-4504-a7f0-f98b1b221946.png` |

## Prompt 1 — Preparar o cenário da referência

```text
Use case: compositing, precise-object-edit and downward outpainting.
INPUT is the exact user-supplied visual reference. Extract its ENVIRONMENT as a clean background and extend it downward for a long portfolio page. Output ONE tall portrait background, aspect ratio 1:3.
Preserve the distinctive environment of this reference: deep blue night sky with sculptural moonlit clouds, scattered subtle stars, a partially cloud-veiled moon high at the right, then a dense skyline of almost black and navy building silhouettes in layers, tiny scattered warm amber windows, a few delicate red antenna lights, near buildings at the edges and many smaller buildings beyond. Match this particular reference's stylized silhouette rendering and lighting very closely.
REMOVE every foreground website element: all floating glass screens, all little glass objects, ALL lettering including logo/navigation/title/bio, ALL person/body/portrait, all UI. Naturally reconstruct the matching sky or architecture that was occluded by those elements. No remaining panels, text shadows or portrait fragments.

ADAPT THE HEIGHT by extending the scene downward, not by repeating the original. Treat the supplied image as the source for the upper portion of the tall background. Preserve the original cloud masses and skyline composition as closely as possible. Below the former portrait area continue down the SAME foreground and midground buildings; their facades extend toward the base, with sparse window lights and shadow. Continue their vertical edges across the full new lower area. A restrained rooftop/parapet edge from the reference may appear once near the very bottom, but never as section dividers.
There is ONLY ONE sky region at the top and ONLY ONE skyline transition. Do not restart clouds or a new skyline at a lower level. One continuous world across the whole image, with buildings growing closer toward the lower area. Keep broad central areas very dark for later typography. No horizontal seams, no tiled background, no terraces stacked one under another.
CRITICAL: reproduce THIS reference's mood and silhouetted city. Do NOT turn it into a detailed aerial drone photograph or a street grid seen vertically from above. Do NOT add a river, bridges, bright roads, visible brick textures or a narrow corridor of just two apartment blocks. Many buildings in layers, as in the reference. Low light, rich midnight blue, near-black silhouettes, little amber windows. No orange sunset or daylight.
Return just the empty scene, full bleed, with no people, no lettering, no devices, no cards or borders. Preserve the reference's background identity while extending it into a continuous tall backdrop.
```

## Prompt 2 — Aplicar o cenário ao layout

```text
Use case: compositing, ui-mockup edit.
Combine these two images into ONE tall full-page portfolio design.
IMAGE 1: the NEW background, directly derived from the user's supplied reference: deep midnight blue clouds, moon, stars, layered black building silhouettes and amber windows. Treat it as the fixed full-canvas background.
IMAGE 2: the current islyp.com webpage. Use ONLY its foreground content and layout. Replace its aerial-photo background entirely with image 1.

Only requested change: the background. Preserve the existing page's structure and all foreground elements as closely as possible. Output the same 1:3 portrait full-page composition.
BACKGROUND: keep image 1's cloud shapes, moon, skyline transition and continuous city geometry in their current locations. The sky occurs only in the upper portion; the same city continues downward through the rest of the page. Dark silhouettes, tiny warm window lights, atmosphere and depth. Do not regenerate separate scenery for each section, do not repeat the sky, do not create horizontal floors under the devices. No river or detailed aerial street grid from image 2. Apply the page like transparent foreground artwork over the single supplied background. Subtle transparent darkening immediately behind small text is okay; no opaque full-width section panels. At the bottom keep the single foreground roof/parapet from image 1.

PRESERVE from image 2:
- Small islyp.com header and Sobre / Projetos / Laboratório / Contato navigation.
- Centered hero “Transformo ideias em experiências e soluções digitais.”, “Conheça meu trabalho”, downward arrow, and the same single notebook with the red Guinga’s Bar website on screen. Keep this notebook: do not replace it with floating glass monitors.
- The same fictional man in a plain black shirt, arms folded, photographic cutout with no glass frame. “Paulo Islyp”, “Desenvolvedor e professor.” and his current brief bio.
- “Tecnologias utilizadas” with EXACTLY TWO full-width horizontal marquee rows. This is critical: NEVER add a third or fourth row. Preserve icons and names plus partially clipped items at the physical left and right image edges, suggesting continuous passage. No buttons, no wrapping and no static grid. Row 1 shows HTML, CSS, JavaScript, React, Astro, Three.js and a clipped next item. Row 2 shows Figma, Canva, Photoshop, Claude / Claude Code, ChatGPT / Codex and clipped edge items. Only a subset of the full loop is visible; other technologies are offscreen. No invented technologies.
- Four project anchor preview cards in one row.
- ALL FOUR independent phone case studies with existing metal smartphone perspectives, current mobile websites, names, concise descriptions and provisional technologies. Preserve their alternating sides and give each case enough room:
01 Guinga’s Bar — “Site e sistema para o bar e seu karaokê.” / “Fila em tempo real e painel administrativo” / “Repertório, cardápio, Maps e programação” / “Tecnologias: a confirmar” / “Visitar site ↗”.
02 Elevamos — “Presença digital para captar novos alunos.” / “SEO para cursos de manutenção de elevadores” / “Blog com publicação pelo painel” / “Tecnologias: a confirmar”.
03 Michelle Sampaio — “Portfólio de marketing e social media.” / “Estratégia, conteúdo e apresentação de projetos” / “Tecnologias: a confirmar” / “Visitar site ↗”.
04 M.I. Ferreira — “Em breve” / “Construção civil com uma experiência em 3D.” / “Landing page com modelo 3D de uma casa” / “Tecnologias: a confirmar”. Its own phone and explanation must remain complete. No visit link for this unfinished project.
- Laboratório with three cards, Experimentos 3D / Interfaces e movimento / Pequenas ferramentas, all “Em planejamento”.
- Footer “O que você quer construir?”, “Vamos conversar sobre a sua próxima ideia.”, “Vamos conversar ↗”, E-mail / LinkedIn / GitHub and islyp.com.

Keep all foreground spacing, scale and typography close to image 2. Do not add floating glass screens from any earlier concept. Do not change the fictional portrait. Do not omit any project or wrap the technology strip into more rows. ONE notebook, ONE cutout portrait, TWO technology lines, FOUR project smartphones and the current footer. Single coherent background from image 1 across everything. No outside annotations or watermarks.
```

