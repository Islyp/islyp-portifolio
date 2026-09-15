# M11 — Prompts do estudo Cidade contínua

**Data:** 14 de setembro de 2026  
**Método:** ferramenta nativa de geração de imagens (image_gen); sem CLI.  
**Finalidade:** imagem de planejamento, não implementação do site.  
**Arquivo selecionado:** [M11-pagina-cidade-continua.png](modelos/M11-pagina-cidade-continua.png)

## Referências e revisões

1. Composição inicial baseada nos quadros M10-01, M10-02 e M10-03. Resultado original: `exec-98251dca-7a26-4d50-b8d4-32f393731635.png`. Faltava uma descrição própria para M.I. Ferreira.
2. Revisão da apresentação do quarto projeto. Resultado original: `exec-3e6f53f4-373c-40d8-b05d-eeb675b1d761.png`.
3. Correção dos itens adicionais gerados nas bordas do carrossel: passam a repetir tecnologias já informadas. Resultado selecionado: `exec-79c61ca8-0cf7-46d9-af1e-8160725d68cf.png`.

Os três originais permanecem no diretório de geração do Codex. A imagem selecionada foi copiada para o projeto. A composição é uma única imagem vertical de 724 × 2172 px; 1280 × 3840 foi uma orientação do prompt, não a resolução efetivamente retornada.

## Prompt 1 — Composição contínua

```text
Use case: ui-mockup, compositing edit.
Create ONE polished, very tall continuous desktop webpage design image for islyp.com, 1280 x 3840 portrait, ratio 1:3, full bleed, no exterior browser frame. This is model M11: revision and downward extension of the supplied portfolio designs.
INPUTS: Image 1 is the edit target for visual identity, notebook hero and cutout portrait/about. Images 2 and 3 are supporting inputs for project smartphone mockups and page content. Recompose into ONE continuous page; do not concatenate the existing screenshots.
KEEP: deep midnight navy and black, pale typography, restrained warm window lights, photographic clouds, cinematic low light, spacious editorial styling, single laptop hero, cutout man without any glass frame. Preserve the fictional reference man's appearance. Screens can show illustrative project previews.
CRITICAL CHANGE — BACKGROUND: Paint ONE coherent vertical nighttime city panorama across the WHOLE page. The viewer descends through this single scene as the page continues downward. At the top there is true night sky, a little moon/cloud light. Near the about/technology areas the city's dark distant rooftops begin. Through the project sections, we move DOWN past progressively nearer and larger dark building silhouettes and upper to lower floors, with scattered amber lit windows and shadows. At the laboratory/footer we reach the lower buildings and a quiet street/base. ONE horizon only near the upper third. NO second moon, NO repeated skyline, NO sky reappearing at the bottom, NO repeated rooftop terraces, NO section-by-section backgrounds. Building edges and rows of windows continue seamlessly behind section boundaries. Atmospheric and quiet enough that all typography remains legible. Keep the city mostly silhouettes, points of light and shadow, not brightly exposed architecture.
LAYOUT from top to bottom, orderly and readable:
1. Top 0–19%: slim header islyp.com, links Sobre / Projetos / Laboratório / Contato. Centered main statement exactly “Transformo ideias em experiências e soluções digitais.” then “Conheça meu trabalho” and small downward arrow. Beneath this a single realistic metallic 3D notebook angled gently, screen showing a red/black Guinga’s Bar website; small subtle playback line implies a portfolio video, no fake video is actually required.
2. 19–29%: ABOUT: waist-up cutout of the same fictional bearded man from reference, no surrounding glass/card. Beside him “Paulo Islyp”, “Desenvolvedor e professor.” and short copy “Crio soluções digitais e ensino Desenvolvimento de Sistemas. Conecto design e tecnologia para tirar ideias do papel.” No invented credentials, years or statistics.
3. 29–37%: title “Tecnologias utilizadas”. A true FULL-BLEED MARQUEE visual: 3 airy horizontal continuous rails with recognizable technology icons AND their readable names. They extend all the way to the physical left and right image borders with partial icons/words CUT OFF at BOTH edges and subtle fading at edges, clearly implying the icons travel across and off-screen. NOT a static centered logo grid, NOT boxes, NOT a table. Slight trailing visual indication only if subtle, keep logos sharp. Use these names distributed across the three rails: HTML, CSS, JavaScript, React, Astro, Three.js, Design responsivo, UI/UX, Firebase, Cloudflare Workers, Firebase Hosting, Vercel, Git / GitHub, Figma, Canva, Photoshop, Claude / Claude Code, ChatGPT / Codex. Some can be clipped by the boundaries as required for the loop. Keep generous icon/name spacing.
4. 37–42%: “Projetos” heading and a compact single row of FOUR attractive thumbnail anchor cards labeled “Guinga’s Bar”, “Elevamos”, “Michelle Sampaio”, “M.I. Ferreira”. Last carries “Em breve”. These represent in-page anchors.
5. 42–80%: FOUR complete project presentations, one below the other, use alternating two-column layouts. EACH has one realistic tilted three-dimensional smartphone with metal sides and visible depth, showing that project's MOBILE website, AND alongside its name, a concise explanation and features, not just a title. Devices should be prominent but not gigantic. The city panorama continues behind them without reset or section floors. Fine rules are okay, no opaque section panels.
Project 01: “Guinga’s Bar” — phone with dark red karaoke/bar mobile site. Text “Uma experiência digital para o bar e seu karaokê.” Feature lines “Fila em tempo real • Painel administrativo” / “Repertório e programação” / “Cardápio e localização no Maps”. Small line “Tecnologias: a confirmar por projeto”. Link label “Visitar site ↗”.
Project 02: “Elevamos” — phone with navy and yellow elevator maintenance training mobile site. Text “Presença digital para transformar buscas em novos alunos.” Feature lines “SEO e captação de clientes” / “Blog com publicação pelo painel” / “Gestão de conteúdo”. Small line “Tecnologias: a confirmar por projeto”. Link label “Visitar site ↗”.
Project 03: “Michelle Sampaio” — phone with cream, terracotta, editorial marketing portfolio. Text “Portfólio para apresentar estratégia, conteúdo e criatividade.” Feature lines “Marketing e social media” / “Apresentação de projetos” / “Experiência responsiva”. Small line “Tecnologias: a confirmar por projeto”. Link label “Visitar site ↗”.
Project 04: “M.I. Ferreira” with small “Em breve” badge — phone with construction landing page and a rendered 3D house. Text “Construção civil apresentada com uma experiência em 3D.” Feature lines “Landing page institucional” / “Modelo 3D de uma casa”. Small line “Tecnologias: a confirmar por projeto”. Do not show a visit button for this unfinished site.
6. 80–90%: “Laboratório”, small “Ideias em teste. Tecnologia em movimento.” Three modest experiment preview cards, labels “Experimentos 3D”, “Interfaces e movimento”, “Pequenas ferramentas”, each with a small “Em planejamento”. Integrate into same backdrop near lower building floors.
7. 90–100%: footer near the street/lower city base, broad welcoming “O que você quer construir?” and “Vamos conversar sobre a sua próxima ideia.” Contact action “Vamos conversar ↗” and text labels “E-mail”, “LinkedIn”, “GitHub”, plus islyp.com. No invented email, phone or account URLs.
Overall: refined artistic developer/professor portfolio, attracts freelance clients. Desktop web proportions within the tall image. Crisp Portuguese text with accents, larger headings, coherent alignment, enough room for readable descriptions. Depth comes from city silhouettes, scattered lights and real device perspective, not excessive neon or glass. The continuous descending city background and edge-to-edge visibly clipped marquee are the MOST IMPORTANT improvements. No annotations, section numbers, outside captions, watermarks, code, fake achievements or multiple separate boards. This is a static design image, all motion is suggested visually.
```

## Prompt 2 — Quarto projeto completo

```text
Use case: ui-mockup edit.
Edit this ONE tall islyp.com webpage mockup. Preserve the current visual identity, colors, fictional cutout person, notebook hero, full-width clipped technology marquee, four anchor cards, first three phone case studies and street footer.
The main correction is the fourth project presentation: it MUST have its own full section BEFORE the Laboratory. In the reference, the fourth M.I. Ferreira smartphone is incorrectly overlapped by Laboratory and its explanation is missing. Fix that layout with adequate space; slightly compress hero/about and the earlier case-study vertical spacing to fit, or use a taller canvas. Output a single continuous tall page, ideally 1280 x 3840, not multiple images.
Required four independent case studies in exact order:
01 Guinga’s Bar: keep existing smartphone, name, explanation, feature list and link.
02 Elevamos: keep existing smartphone, name, explanation, feature list and link.
03 Michelle Sampaio: keep existing smartphone, name, explanation, feature list and link.
04 M.I. Ferreira: give this a FULL dedicated two-column block, text LEFT, entire tilted 3D smartphone RIGHT, phone shows the construction landing page and 3D house. Text exactly:
“M.I. Ferreira”
“Em breve”
“Construção civil apresentada com uma experiência em 3D.”
“Landing page institucional”
“Modelo 3D de uma casa”
“Tecnologias: a confirmar por projeto”
NO visit-site button on M.I. Ferreira because the site is not published yet. Do not number Laboratory 04. Do not let any Laboratory card overlap this fourth case.
AFTER the complete fourth case, a compact separate “Laboratório” section with the existing three cards (“Experimentos 3D”, “Interfaces e movimento”, “Pequenas ferramentas”), small “Em planejamento” labels. THEN the same contact invitation and footer at street level.
Preserve the “Tecnologias utilizadas” title and all the full-bleed horizontal technology rails, icons plus names with partial items cut off at both image boundaries to suggest an endless scrolling marquee. Keep all content Portuguese.
Backdrop is ONE descending nighttime city panorama from sky/clouds at top to street at bottom. Maintain continuous tall facade silhouettes down both sides, progressing to lower floors and nearer window lights as we go down. Smooth the repeating horizontal rooftop platforms between cases into continuous facade shadows: do not put each phone on a new terrace, do not restart a sky or skyline behind each section. Only the top has a moon. The street appears only at the very bottom. Subdued silhouettes, points of warm window light, navy shadows, high legibility.
No decorative slogan painted on the building wall, no added text, no invented contact details, no extra devices. Ensure ALL FOUR project titles AND their explanations are visible beside their own 3D phones, and Laboratory comes afterward.
```

## Prompt 3 — Correção dos itens nas bordas

```text
Use case: precise-object-edit, UI mockup.
Make a MINIMAL localized correction to the TECHNOLOGY MARQUEE in this single tall portfolio image. Everything else must stay unchanged: the complete page, all four fully explained phone case studies, the notebook hero, portrait, continuous descending night city, Laboratory and footer.
The reference has accidentally added unauthorized technologies at the RIGHT EDGES of the marquee. Replace these three stray edge items ONLY:
- “Strapi” and its symbol at the right end of row 1 -> a PARTIALLY CLIPPED repetition of the HTML icon and “HTML”.
- “Illustrator” / Ai at the right end of row 2 -> a PARTIALLY CLIPPED repetition of the responsive-devices icon and “Design responsivo”.
- the Notion-style N icon at the right end of row 3 -> a PARTIALLY CLIPPED repetition of the Firebase icon and “Firebase”.
Those items should look like the start of the NEXT LOOP of the SAME rail; repetition at the far edge is intentional. Do NOT add any other skills/technologies. Preserve existing valid names: HTML, CSS, JavaScript, React, Astro, Three.js, Design responsivo, UI/UX, Figma, Canva, Photoshop, Firebase, Cloudflare Workers, Firebase Hosting, Vercel, Git / GitHub, Claude / Claude Code, ChatGPT / Codex.
Keep the full-width edge clipping and fading on both left and right boundaries. Keep icons and names sharp and small. Do not recompose or change any content outside these tiny rail-edge items. Return the complete tall page with this correction, same aspect ratio, highest native resolution.
```

