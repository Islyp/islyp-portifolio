# M12 — Prompts e arquivos: fachadas contínuas

**Data:** 14 de setembro de 2026  
**Método:** ferramenta nativa de geração de imagens; sem CLI.  
**Etapa:** planejamento visual, sem implementação.  
**Motivo:** o usuário apontou que o M11 não era contínuo e pediu reconstruir do zero, aproveitando apenas a ideia da imagem.

## Arquivos selecionados

- [M12-01 — Fundo da cidade](modelos/M12-01-fundo-cidade.png): cenário gerado do zero, sem usar M11 como imagem de entrada.
- [M12-02 — Página com fachadas contínuas](modelos/M12-02-pagina-fachadas-continuas.png): conteúdo da página sobreposto ao novo cenário, com ajuste localizado do carrossel.

Cada arquivo retornado tem 724 × 2172 px. As dimensões maiores mencionadas no prompt eram uma orientação de geração, não a resolução entregue.

## Histórico de geração

1. Fundo novo, original `exec-92644c49-bf15-46c9-861c-aaef55af14a2.png`.
2. Primeira composição da página usando o fundo como entrada, original `exec-775d0249-1901-499c-bdb5-3d606d7a912a.png`.
3. Ajuste das faixas de tecnologias para atravessarem as bordas, original selecionado `exec-4b5cc9ad-8892-4552-9722-e8fa3cdb5145.png`.

Os originais permanecem no diretório de geração do Codex. As duas imagens selecionadas foram copiadas para o projeto e conferidas por SHA-256. M11 está preservado como histórico, com o feedback de falta de continuidade.

## Prompt 1 — Gerar o cenário do zero

```text
Use case: stylized-concept.
Create a NEW image from scratch: a single very tall cinematic night-city background for an artistic developer portfolio, portrait aspect ratio 1:3, intended 1280 x 3840. This image is JUST THE BACKGROUND, no UI, no text, no devices or people yet.

The defining subject is ONE physically coherent city scene seen in a long vertical panorama, from open night sky DOWN the full height of the SAME buildings all the way to their foundations and ONE street at the bottom. Architectural continuity must be unmistakable. It must not look like several landscape city photographs stacked.

COMPOSITION:
Upper 28% is vast dark midnight navy sky with very subtle clouds and a small diffused moon high above. Spacious, quiet and almost empty.
At about 28–35% of the image height, the roofs of TWO simple tall apartment buildings begin at the far left and far right margins, each occupying only about the outer 18% of the width. Both building facades extend UNINTERRUPTED down the whole remaining image until their bases at 95% height. Draw their vertical corners and narrow window columns as single unbroken architectural lines. A faint vertical downpipe on the left facade can be visually followed from roof to ground without any interruption.
The broad central 64% is mostly dark, uncluttered negative space: a deep shadowed urban gap, with only one faraway very dark building surface starting at about 42% and extending to the same single street. No visible skyline or roof terraces inside this central space. No rooftop scene within another scene.
At the bottom 5% only, the facades meet ONE narrow quiet street, tiny lamps and a small patch of wet pavement reflecting a little warm light. This is the only ground plane in the image.

LIGHT: silhouetted architecture, extremely restrained navy edge light, very few randomly lit small amber windows down the continuous facades. Large areas of near black for later white typography. Strong hierarchy and elegant subtlety. No bright visible brick details, no dense busy city texture.
PERSPECTIVE: a tall architectural elevation panorama with mild realistic perspective. Same geometry, buildings and lighting all the way down. Visible descending series of floors, never a reset to roofs or sky. No montage, no horizontal seams, no stacked cityscapes, no terraced platforms, no balconies projecting across the canvas, no separate sections, no second moon, no repeated horizon, no repeated skyline. Do not add trees covering the facades.
The emotional style is quiet atmospheric nocturnal photography with cinematic shadows, blue-black silhouettes and sparse amber points. Empty sky above; long uninterrupted buildings below; ground at the very bottom. One continuous world. Full bleed single image, no frame, no labels, no lettering.
```

## Prompt 2 — Compor a página sobre o cenário

```text
Use case: ui-mockup, compositing.
INPUT IMAGE is the LOCKED BACKGROUND / edit target. Add a new elegant high-fidelity artistic developer portfolio website OVER this existing city photograph. Create one complete very tall desktop webpage, same 1:3 aspect ratio. This is islyp.com, a visual design study.
ABSOLUTE INVARIANT: preserve the supplied background's geometry and composition across the ENTIRE canvas. SAME continuous left and right buildings from their current roofs to their current bases, SAME vertical edges, SAME windows, SAME single moon and SAME street. Do not cut the image into sections. Do not introduce any additional skyline, building, horizon, terrace or platform. Content floats in front of this one scene. Background must remain traceable down the outer margins from top to bottom. The page should feel like descending the full height of these buildings. NO new background art. NO horizontal section backgrounds; transparent space between elements.

Design as a fresh editorial portfolio, not a dashboard. Pale white typography, large clean sans-serif hero, refined serif project names and personal name, smaller readable sans-serif body. Thin quiet rules only where helpful. Mobile previews show distinct real-world project categories. Devices have realistic 3D metallic edges, subtle perspective and gentle shadow, floating with no pedestals. No excessive glass panels.

Content order and space allocation, IMPORTANT all four project explanations must fit:
0–17% HERO in the sky: small top header “islyp.com”, Sobre / Projetos / Laboratório / Contato. Centered statement “Transformo ideias em experiências e soluções digitais.” Small “Conheça meu trabalho” with a downward arrow. One medium realistic notebook mockup below the heading, its screen showing a dark red karaoke/bar website. Its subtle playback line represents the intended portfolio video. Fit this entire hero in the upper 17%, so later content has room.
17–27% ABOUT: a photographic waist-up cutout of a fictional adult male developer with dark hair, short beard, plain black shirt, no glass/frame behind him. Beside him “Paulo Islyp” and “Desenvolvedor e professor.” Short description “Crio soluções digitais e ensino Desenvolvimento de Sistemas. Conecto design e tecnologia para tirar ideias do papel.”
27–35% TECHNOLOGIES: heading “Tecnologias utilizadas”. Four thin horizontal marquee rows go FULL WIDTH to both physical image edges. Each item is an icon plus name, well spaced; PARTIAL REPEATED items are clipped at both edges, implying continuous horizontal travel out of view. No opaque strip behind the rows; preserve the background facades. Exact allowed items only, no invented technologies: row 1 HTML, CSS, JavaScript, React, Astro, Three.js; row 2 Design responsivo, UI/UX, Figma, Canva, Photoshop; row 3 Firebase, Cloudflare Workers, Firebase Hosting, Vercel, Git / GitHub; row 4 Claude / Claude Code, ChatGPT / Codex. Repeat these same items at clipped ends.
35–41% PROJECT INDEX: “Projetos” and a compact row of FOUR small preview cards, Guinga’s Bar / Elevamos / Michelle Sampaio / M.I. Ferreira. Last marked “Em breve”. These suggest in-page anchor links.

41–85% FOUR DISTINCT CASE STUDIES, each given equal 11% image height. Each is a two-column layout: ONE tilted 3D smartphone with its mobile website, plus its OWN readable project name and description. Alternate phone side left/right. No device overlaps next section. All FOUR must have independent text, not just a phone.
CASE 1 at 41–52%, phone left, text right:
“Guinga’s Bar”
“Site e sistema para o bar e seu karaokê.”
“Fila em tempo real e painel administrativo”
“Repertório, cardápio, Maps e programação”
“Tecnologias: a confirmar”
“Visitar site ↗”
Phone UI: black and deep red bar, karaoke queue and warm live-music photography.
CASE 2 at 52–63%, text left, phone right:
“Elevamos”
“Presença digital para captar novos alunos.”
“SEO para cursos de manutenção de elevadores”
“Blog com publicação pelo painel”
“Tecnologias: a confirmar”
“Visitar site ↗”
Phone UI: navy and yellow professional training website, elevator technician photo.
CASE 3 at 63–74%, phone left, text right:
“Michelle Sampaio”
“Portfólio de marketing e social media.”
“Estratégia, conteúdo e apresentação de projetos”
“Tecnologias: a confirmar”
“Visitar site ↗”
Phone UI: cream and terracotta editorial portfolio with elegant typography.
CASE 4 at 74–85%, text left, phone right:
“M.I. Ferreira”
small badge “Em breve”
“Construção civil com uma experiência em 3D.”
“Landing page com modelo 3D de uma casa”
“Tecnologias: a confirmar”
Phone UI: construction landing page, architectural rendering of a modern 3D house. No visit button for this unfinished site.

85–93% LABORATORY, after all four complete cases: “Laboratório” and three compact experimental thumbnail cards “Experimentos 3D”, “Interfaces e movimento”, “Pequenas ferramentas”, each labeled “Em planejamento”. Restrained borders, no new background.
93–100% FOOTER just above the existing single street: “O que você quer construir?” then “Vamos conversar sobre a sua próxima ideia.” Action “Vamos conversar ↗”; labels E-mail / LinkedIn / GitHub and islyp.com, no invented addresses, no fake statistics.

Keep medium-small device proportions so the full-page layout breathes. Body copy concise and sharp. Images inside screens are illustrative. ALL texts in Portuguese. ONE notebook, ONE temporary portrait, FOUR smartphones, FOUR anchor previews, THREE lab previews. No section numbers beyond optional 01–04 on the four cases. No added buildings, no restarted clouds, NO platforms under the phones or portrait. Only overlay the webpage elements on the fixed supplied continuous background.
```

## Prompt 3 — Ajustar o carrossel

```text
Use case: precise-object-edit.
Make ONE localized change in this tall islyp.com website design, ONLY within the four rows immediately under “Tecnologias utilizadas”. Preserve the entire remaining image exactly, especially the unbroken vertical building facades, their windows, the single continuous background, portrait, notebook, all four project presentations and footer. Do NOT redesign anything else.
Change these four centered carousel rows into FULL-BLEED automatic moving marquee rows that visibly flow beyond the physical canvas edges:
- REMOVE ALL the left/right chevron controls and ALL table-like horizontal border lines around the technology rows.
- Expand the icon/name content over the COMPLETE physical image width, from x=0 to x=100%, crossing in front of the dark facades too. These rows must NOT stop at the text column margins.
- On each row, intentionally show one partially cropped icon/name at the extreme left edge and one partially cropped repeated icon/name at the extreme right edge. Example row 1 visibly begins with the clipped tail “…ree.js” at the actual left image border and ends with a half-cut HTML item at the actual right image border. Center items remain readable. There must be NO left/right blank margin for these moving rows.
- Icons and names float directly over the existing background, no boxes or opaque panels, a very slight fading of the outermost few pixels only.
- Keep the same valid technology list, color icons and four rows. Only repeat from this list at the clipped edges; do not add technologies: row1 HTML / CSS / JavaScript / React / Astro / Three.js; row2 Design responsivo / UI/UX / Figma / Canva / Photoshop; row3 Firebase / Cloudflare Workers / Firebase Hosting / Vercel / Git / GitHub; row4 Claude / Claude Code / ChatGPT / Codex. In row4, repeat the two assistant groups to fill the width.
Preserve “Tecnologias utilizadas” heading, all other Portuguese copy and all other layout. The background architecture must remain continuous and unchanged. Return the whole tall image with only the corrected full-width border-clipped marquee.
```

