# Assets do hero implementado

**Data:** 14/09/2026. **Método:** ferramenta nativa `image_gen`, sem CLI.

**Entrada em ambas as gerações:** `C:/Users/Paulo/Downloads/Imagem do Codex 14 de set. de 2026, 18_51_02.png`. Cópia preservada no projeto em `design/referencias/M14-referencia-fornecida.png`.

## Arquivos finais

**Fundo atual escolhido pelo usuário:** `assets/city-vertical.png`, cópia intacta de `C:/Users/Paulo/Downloads/Imagem do Codex 14 de set. de 2026, 20_07_05.png`, com 724 × 2172 px. SHA-256: `2797533ABF84A80DBCAA96EA917C0FADF389EB19E7FE290C0A69D5E031F8F48D`. É o mesmo arquivo do M14-01, agora aplicado ao site. Nenhuma nova geração ou edição de imagem foi feita nessa troca. O cenário horizontal abaixo fica registrado como versão anterior.

| Asset | Arquivo no projeto | Original preservado | Dimensões |
|---|---|---|---|
| Cenário horizontal anterior | `assets/hero-city.png` | `exec-00585708-d6f4-4ce6-ac9c-e5c692a4893c.png` | 1536 × 1024 |
| Atlas de quatro mockups | `assets/project-screens.png` | `exec-bc9bc130-9bc2-42d4-ac8b-982386637916.png` | 1536 × 1024 |

Os originais estão em `C:/Users/Paulo/.codex/generated_images/01a0a22f-2770-7671-9e40-f5f63083b77d/`. Ambos foram copiados sem alterar o arquivo original. O atlas é dividido por posição de fundo em CSS, sem necessidade de quatro downloads. As telas são representações ilustrativas da referência, não capturas verificadas dos sites reais.

O fundo M14-01 foi inspecionado, mas sua proporção vertical não se adequava ao primeiro hero desktop. Por isso foi produzida uma adaptação horizontal independente. Ela não substitui nem apaga o estudo anterior.

## Prompt final — atlas dos mockups

```text
Create a production asset for implementing the attached portfolio design. Output ONE LANDSCAPE 1536x1024 image containing exactly FOUR rectangular website screen textures in an EXACT 2x2 grid. Each quadrant fills its complete area edge-to-edge; no spacing, no outer border, no labels or annotations. TOP LEFT: the navy blue Elevamos elevator training site from the reference, with small logo and top navigation, large 'Elevamos' and 'Transforme sua vida e profissão.', yellow small CTA, cinematic elevator shaft on right. TOP RIGHT: cream and terracotta Michelle Sampaio marketing page from the reference, tiny top navigation and brand Michelle Sampaio, large refined serif 'Marketing 360°', 'Estratégia, conteúdo e resultados reais.', abstract warm terracotta architecture and plant photography on right. BOTTOM LEFT: Guinga’s Bar exactly the reference's striking dark black and red karaoke site with small white nav above, bold condensed red 'GUINGA’S BAR', 'KARAOKÊ AO VIVO', warm dim interior and large vintage microphone on right. BOTTOM RIGHT: the M.I.Ferreira construction portfolio from reference, white and very pale gray, delicate serif brand, small top nav, large 'M.I.Ferreira', 'CONSTRUINDO O AMANHÃ, HOJE.', small 'Em breve' CTA and modern luxury house photograph right. These are illustrative design mockup textures based on the attached image. Reproduce their visual identity and composition faithfully. CRITICAL: all four screenshots are FRONT-ON FLAT rectangles, absolutely NO perspective, NO glass frames, NO browser chrome or laptop/device, NO city or sky, NO shadows between quadrants. Four equal quadrants separated only by their natural rectangular boundaries. Each individual screen must have 3:2 ratio, exactly half image width and half image height. Need sharp professionally typeset text, particularly all brand names. Preserve the reference layouts, no additional sections or invented claims.
```

## Prompt final — cenário

```text
Create a clean background asset for a real interactive website based on the attached exact design reference. Output a LANDSCAPE 1536x1024 image, not a webpage screenshot. Use the reference's nighttime city atmosphere with extremely faithful cloud lighting, midnight navy palette, subtle scattered stars, luminous moon partly obscured behind clouds at upper right, dark layered silhouettes of buildings and tiny sparse warm amber windows. REMOVE ALL lettering, logos, navigation, floating glass mockups, small floating glass cubes, portrait/person, and every UI element, reconstructing the matching sky/buildings. Compose for a desktop hero: sky occupies top 70% with dark readable open center, sculptural softly blue-lit clouds around top and side edges, layered city skyline occupies bottom 30%; the closer tall dark building at extreme right begins around 53% image height, at left around 68%; distant skyline lower middle around 77%. City continues off bottom of image, no terrace or foreground ledge. Preserve reference rendering, cinematic realistic moonlit clouds, simple near-black architectural silhouettes, photographic depth, no new architecture style. One coherent scene. No aerial birdseye view, no bright streets, no sunset. No text, no devices, no people, no UI, no floating objects. Full bleed. This is the standalone background only.
```

## Outros arquivos

`assets/inter-latin.woff2`: fonte Inter em subconjunto latino, obtida pela folha oficial do Google Fonts. Licença em `assets/INTER-LICENSE.txt`.

`assets/favicon.svg`: monograma tipográfico simples do site, criado em SVG.
