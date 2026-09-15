# M13 — Cidade vista de cima e duas fileiras de tecnologias

**Data:** 14 de setembro de 2026  
**Método:** ferramenta nativa de geração de imagens; sem CLI.  
**Etapa:** planejamento visual, sem implementação.  
**Decisão do usuário:** “quero esse background”, em referência à imagem aérea gerada neste estudo.

## Arquivos selecionados

- [M13-01 — Background aéreo escolhido](modelos/M13-01-background-aereo.png): cópia intacta do fundo aprovado.
- [M13-02 — Página sobre a cidade aérea](modelos/M13-02-pagina-cidade-aerea.png): composição do layout do M12 sobre esse cenário, com exatamente duas fileiras de tecnologias.

Cada imagem retornada tem 724 × 2172 px. As cópias foram conferidas por SHA-256; os originais permanecem no diretório de geração do Codex.

## Referências e decisões

O usuário disse que o restante do M12 estava perfeito, pediu uma ou duas fileiras animadas para tecnologias e uma cidade vista de cima com mais prédios. Foi produzido primeiro o cenário aéreo e, em seguida, o usuário escolheu explicitamente esse background. A composição seguinte usa o fundo escolhido e o M12 como fonte de layout. Duas fileiras foram adotadas para representar a faixa animada; apenas um recorte do repertório aparece neste instante estático.

A escolha do fundo não define automaticamente fontes, cores exatas, animações ou toda a identidade. O original sem conteúdo é a referência para o futuro background; a composição gerada é um estudo visual, não garantia de preservação pixel a pixel nem site implementado.

## Originais

| Etapa | Arquivo original |
|---|---|
| Fundo aéreo escolhido | `exec-bc7be4cc-c770-4ad2-9d7e-7a829d23afbf.png` |
| Página M13 | `exec-f3dfeaf0-7856-4434-b6ea-cd7faa6da582.png` |

## Prompt 1 — Criar o background aéreo

```text
Use case: stylized-concept.
Generate a SINGLE continuous panoramic nighttime city BACKGROUND, very tall portrait ratio 1:3. No text or website UI yet.
A true elevated aerial oblique view, camera high above a dense city, angled down about 35–45 degrees. We clearly see many rooftops and the upper surfaces of buildings, distant blocks, and streets far below. This must unmistakably feel like looking DOWN OVER the city from the sky, not standing in a narrow alley between two walls.
One physically coherent scene with a SINGLE perspective and vanishing system across the entire tall canvas. Upper 15% is sparse midnight clouds, a small diffused moon and distant horizon. Beneath this, 30–50 varied mid-rise and taller buildings recede into the distance. Small distant buildings near the upper part smoothly progress into larger and closer foreground rooftops near the bottom. Streets form one coherent quiet urban grid, with a few tiny amber lamp dots. Their routes and building edges can be visually traced without discontinuities. Many dark rooftop rectangles are visibly viewed from above.
Do not invent a separate city for every vertical segment. No stacked landscapes, repeated horizons or restarted sky. No horizontal breaks, terraces used as dividers, or floating disconnected buildings. The bottom must still be aerial: closest rooftop edges and faint streets far beneath, not an eye-level street scene.
Art direction: artistic nocturnal developer portfolio, cinematic blue-black silhouettes with restrained warm windows, very low illumination, atmospheric depth, navy haze in distance. Building shapes and scattered amber light, not bright or detailed brick textures. More open urban depth and more buildings than a two-building corridor. Preserve a relatively dark subdued central vertical area across about 60% of the width for later white typography; architecture can pass behind it but avoid high-contrast lights there. Subtle diffuse moonlight on roof edges. No bright neon, no huge billboards, no trees filling the canvas, no lens flares, no roads appearing as luminous diagrams. No text, logos, people, devices, UI, borders or frames. A single high-quality long aerial city photograph/painting, uninterrupted from distant skyline at top to nearest rooftops at bottom.
```

## Prompt 2 — Aplicar o background e reduzir para duas fileiras

```text
Use case: compositing, ui-mockup edit.
Make a high-fidelity single tall portfolio design by combining these TWO inputs.
IMAGE 1 = the EXACT aerial nighttime city BACKGROUND selected by the user. This is the locked base image.
IMAGE 2 = the accepted website FOREGROUND and layout source. Its former two-building corridor background must be discarded completely.

Composite the foreground website from image 2 over image 1, preserving the page structure, typography, white text, fictional cutout man's identity and pose, notebook, project devices, descriptions, cards, laboratory and footer. The user explicitly said the rest of the layout was perfect. Make only the requested background substitution and technology-row reduction.
Output one full-page portrait image, SAME 1:3 aspect ratio.

BACKGROUND INVARIANT: use the aerial city of image 1 AS IS across the full canvas, edge to edge, without tiling, splitting, repeating or recreating different city scenes. Keep its moon, horizon, distant urban panorama, many visible rooftops, nearest buildings, light patterns and oblique aerial perspective in their existing locations. It is one continuous high viewpoint cityscape. Foreground text and devices may occlude it. A very subtle continuous transparent darkening behind reading areas is allowed, but no opaque section panels, no horizontal background bands, no platforms under devices, no extra moon, no new buildings, no new street-level footer. The footer remains over the closest rooftops of this same aerial photograph.

TECHNOLOGIES CHANGE: replace the FOUR technology rows of image 2 with EXACTLY TWO ROWS under the unchanged title “Tecnologias utilizadas”. Never three or four rows.
These two rows are animated marquee concepts: each is a SINGLE UNBROKEN HORIZONTAL LINE that extends beyond the physical left and right canvas edges. Show partially cropped icons/names at both extreme edges, as though the items are sliding off screen. No carousel arrow buttons, no grids, no boxes, no bullet-list layout, no wrapped lines. Sharp recognizable color icons + readable names. Two airy rows only, keep the extra space as breathing room before Projects rather than introducing more rows.
Only a subset of the technologies needs to be visible at this single instant. The remaining items belong OFFSCREEN in the loop — do not cram the entire list into the image.
Loop A repertoire: HTML, CSS, JavaScript, React, Astro, Three.js, Firebase, Cloudflare Workers, Firebase Hosting, Vercel, Git / GitHub.
Loop B repertoire: Design responsivo, UI/UX, Figma, Canva, Photoshop, Claude / Claude Code, ChatGPT / Codex.
For this screenshot, row A can show HTML / CSS / JavaScript / React / Astro / Three.js with Firebase partially entering at the right and a clipped previous item at left. Row B can show Figma / Canva / Photoshop / Claude / Claude Code / ChatGPT / Codex with partial items at both edges. No invented skills. Exactly TWO horizontal technology rows total. Suggest continuous movement through edge clipping without blurring the names.

PRESERVE THE REST of image 2:
Header islyp.com and navigation.
Centered hero “Transformo ideias em experiências e soluções digitais.”, “Conheça meu trabalho”, down arrow and notebook with Guinga’s Bar on its screen.
Cutout portrait, “Paulo Islyp”, “Desenvolvedor e professor.” and existing short bio.
Four project anchor preview cards.
All FOUR complete alternating phone case studies: Guinga’s Bar, Elevamos, Michelle Sampaio, M.I. Ferreira. Each retains its own phone, title, explanation and “Tecnologias: a confirmar”. M.I. Ferreira retains “Em breve”.
Laboratório and its three “Em planejamento” previews.
Footer “O que você quer construir?”, invitation and E-mail / LinkedIn / GitHub labels.
No omitted project, no new section, no additional slogan or invented contact details.
Keep the layout recognizably the same as image 2 and the city recognizably the exact aerial scene of image 1. Carefully preserve the uninterrupted city perspective behind the whole page.
```

