# M15 — Hero com monitores de vidro da referência

**Data:** 14 de setembro de 2026  
**Método:** ferramenta nativa de geração de imagens; sem CLI.  
**Pedido:** “agora faça como no hero que mandei tambem”.  
**Etapa:** planejamento visual, sem implementação.

## Arquivo e referências

- [M15 — Página com hero de vidro](modelos/M15-pagina-hero-vidro.png): imagem selecionada, 724 × 2172 px.
- [Imagem fornecida pelo usuário](referencias/M14-referencia-fornecida.png): referência do hero e do cenário.
- [M14 — Página anterior](modelos/M14-02-pagina-fundo-referencia.png): fonte da estrutura, duas fileiras de tecnologias, retrato e apresentações dos projetos.

**Original gerado:** `exec-4d4474fb-d756-4a8a-84e5-6dee938c1655.png`. A cópia no projeto foi conferida por SHA-256 e o original preservado.

## Decisão representada

O hero volta a usar monitores transparentes de vidro, em lugar do notebook dos M10–M14. A frase fica no meio das telas. Elevamos e Michelle aparecem acima/lateralmente; Guinga’s Bar e M.I. Ferreira em primeiro plano abaixo/lateralmente. Telas menores e objetos de vidro reforçam a profundidade. O restante da página continua com Sobre, duas fileiras de tecnologias, cards-âncora, quatro apresentações mobile, Laboratório e contato.

O modelo continua estático. As intenções anteriores de arraste e animação das telas podem ser retomadas no planejamento de interação; nada foi implementado. A composição gerada interpreta a referência e não garante reprodução pixel a pixel. O novo resultado ainda depende da avaliação visual do usuário.

## Prompt utilizado

```text
Use case: compositing, ui-mockup edit.
Edit the FIRST image: the current full-length islyp.com webpage. Change its HERO to match the hero in the SECOND image supplied by the user.
IMAGE 1 = full-page edit target; preserve its rest-of-page content and its continuous midnight city background.
IMAGE 2 = precise HERO visual reference only. Borrow its floating glass project screens, central typography, perspective and composition. Do not import its lower portrait/about section.

THE REQUESTED CHANGE:
Completely remove the notebook and replace the top hero with the artistic floating GLASS SCREEN composition of image 2. The headline must be IN THE MIDDLE of the surrounding screens, not a heading above a group of screens.
Match the reference closely: transparent thick glass edges, subtle cool blue refraction and highlights, realistic perspective, screens at different scales/depths, distant miniature screens softened by depth of field. Four principal website screens arranged around an open central text area:
- Elevamos navy/yellow website, upper LEFT.
- Michelle Sampaio cream/terracotta “Marketing 360°” website, upper RIGHT.
- Guinga’s Bar dark red karaoke website, larger and closer at lower LEFT.
- M.I. Ferreira construction/house website, lower RIGHT.
Use the actual panel appearance from image 2 as the source. Add several much smaller distant versions around the outside, and the few tiny translucent glass prisms visible in the reference. They float in the night sky. No stands, no notebook, no keyboard, no stacked browser windows, no opaque device chassis and no orbit lines. Keep the glass framing luminous but restrained.
The center remains readable and completely free of screen overlap. Use the same clean WHITE SANS-SERIF typography as the reference hero, with exact centered text:
“Transformo ideias em
experiências e
soluções digitais.”
Below: “Conheça meu trabalho”
Below that: a small downward arrow.
Small header islyp.com and Sobre / Projetos / Laboratório / Contato navigation remain at the top.

COMPOSITION: give this rebuilt hero approximately the top QUARTER of the long page, enough space for the monitor composition to breathe. It should read like a faithful adaptation of the reference's entire hero into the top of this portfolio. Preserve the existing canvas's long 1:3 portrait format. Shift the following content down only as necessary, gently reducing excess gaps while keeping all its elements and hierarchy. Do not crop or omit lower sections.

PRESERVE from image 1 below the new hero:
1. Same cutout fictional man with folded arms, no glass frame; Paulo Islyp, Desenvolvedor e professor, existing bio.
2. Tecnologias utilizadas, EXACTLY TWO horizontal full-bleed scrolling-marquee rows with icons and names cropped at both physical edges. Keep these as two rows; never add a third/fourth. No arrows/buttons or boxes. The full list need not all be visible simultaneously.
3. Four project anchor cards.
4. ALL FOUR independent alternating 3D smartphone case studies with their current texts and devices: Guinga’s Bar, Elevamos, Michelle Sampaio, M.I. Ferreira. Each has its own title and description. Keep Tecnologias: a confirmar, and Em breve for M.I. Ferreira.
5. Laboratório with its three Em planejamento experiment cards.
6. Existing footer O que você quer construir?, invitation, Vamos conversar action and E-mail / LinkedIn / GitHub.

BACKGROUND INVARIANT: keep the same dark blue, moonlit clouds and single city of black building silhouettes with tiny warm windows. The sky at the top flows down into that ONE city through the entire page, without any restarted background, second moon, repeated horizon or separate terrace for each case study. Do not change to an aerial city photograph. Foreground elements float over this continuous scene.
The only substantial redesign is the HERO, now matching the floating glass monitors and central copy of image 2. The complete rest of the page remains present. Single high-quality full-page image, no annotations or watermarks.
```

