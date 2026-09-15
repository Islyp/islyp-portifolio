# M16 — Background claro contínuo

**Data:** 14 de setembro de 2026  
**Método:** ferramenta nativa de geração de imagens; sem CLI.  
**Pedido:** testar um fundo baseado na referência clara, considerando continuidade durante a rolagem, interação e animação.  
**Escopo desta entrega:** um background estático novo para avaliação. O cenário já aplicado ao site permanece como está.

## Arquivos

- [M16 — Background de galeria clara](modelos/M16-background-galeria-clara.png): PNG de 724 × 2172 px, proporção 1:3.
- [Referência clara fornecida](referencias/M16-referencia-clara.png): cópia intacta de `C:/Users/Paulo/Downloads/ChatGPT Image 14 de set. de 2026, 22_55_34.png`.

**Original gerado:** `exec-8284a890-b4f6-483a-8bb3-3759f7e557a3.png`. As cópias foram conferidas por SHA-256, preservando os originais. O prompt solicitou a maior resolução nativa disponível; a resolução efetivamente retornada foi 724 × 2172 px.

## Composição e uso pretendido

O fundo aproveita o ambiente branco perolado, vidro, luz difusa e piso reflexivo da referência. Um único átrio vertical se estende do volume superior até o chão. As estruturas laterais continuam entre as regiões da imagem, sem reiniciar o cenário. A área central fica livre para a interface; o piso aparece apenas na região inferior.

Foram removidos da composição os painéis de projetos, nomes, ícones, textos e elementos de interface da referência. Seu conteúdo serve apenas como referência visual; não confirma novos projetos, tecnologias, métricas ou datas para o portfólio.

## Rolagem, interação e animação

- **Descida:** revelar a imagem aos poucos, do volume iluminado superior até o piso, com deslocamento vertical suave e limitado ao fim do arquivo. Usar uma imagem única, sem repetição e sem comprimir a altura inteira na primeira tela.
- **Paralaxe:** a base arquitetônica pode se deslocar mais lentamente que o conteúdo. A implementação atual da cidade usa avanço de 28% da distância rolada; esse comportamento é um ponto de partida para uma futura avaliação visual, sem alteração de código nesta entrega.
- **Elementos independentes:** monitores arrastáveis, objetos de vidro e eventuais partículas devem continuar em camadas próprias, sobre o fundo. Eles não estão incorporados ao PNG para permitir movimento e interação independentes.
- **Profundidade:** a luz distante, as estruturas laterais translúcidas e as bordas próximas sugerem planos. Não foram gerados mapas de profundidade ou camadas separadas; paralaxe independente da arquitetura exigiria preparação adicional.
- **Leitura:** se o estudo for aplicado, avaliar textos e controles escuros sobre o fundo claro e a aparência dos painéis de vidro. A imagem foi criada com centro de baixo contraste para facilitar essa composição.

O arquivo é estático; não contém animação. Nenhuma alteração foi feita no hero, na física dos painéis, nas faixas de tecnologias ou no background usado atualmente pela página.

## Prompt utilizado

```text
Use case: compositing / architectural background.
Create ONE tall continuous website BACKGROUND using the ENVIRONMENT of the supplied reference image as the visual basis. Portrait 1:3 composition, ideally 1280 x 3840 pixels or highest available native resolution. This is a reusable background asset, not a screenshot or a finished webpage.

Match the reference's pale luminous studio: pearl white and cool silver-gray, immense soft daylight, frosted glass, softly blurred architecture, gentle blue/lavender refraction, subtle diagonal sunlight and a reflective satin floor. Elegant, airy, spacious, atmospheric. Almost monochrome, low contrast, sophisticated architectural photography / photoreal 3D render. No dark city.

REMOVE and DO NOT include ANY foreground interface from the reference: no monitors, glass UI cards, project screenshots, lettering, logos, navigation, icons, buttons, badges, code, people or devices. No “islyp”, no text anywhere. Reconstruct the empty environment behind these elements.

MOST IMPORTANT: one physically continuous VERY TALL room/atrium seen from one coherent perspective. It must support a slow downward camera-like reveal as the user scrolls a long webpage.
- Upper region: softly lit high ceiling / upper airy volume with faint beams of daylight and distant glazed architecture. Plenty of calm pale space for the hero.
- Middle: the SAME tall translucent glass architectural planes and slim structural edges continue unbroken downward near the left and right outer margins. Their vertical lines and soft light gradients connect the entire composition. No horizontal section changes.
- Lower region: those same surfaces lead naturally to ONE reflective pale floor, which appears only in the bottom 15–20%. Soft diagonal window shadows and subtle realistic reflections converge on this single floor. The image has one floor and one continuous room, not multiple stacked gallery scenes.
Use restrained differences of focus and depth: distant cloudy-white light in the back, softly visible tall glass planes on the sides, faint sharper glass edges at the near outer corners. The central approximately 65% of the width is broad uncluttered negative space with very gentle tonal variation so future dark text and draggable project screens will be readable over it.
Balance airy emptiness with enough side detail that movement down the background reveals new portions of the same architecture. Light should enter consistently from the upper left, with cool pale reflections and soft realistic shadows all the way down.

ANIMATION-AWARE COMPOSITION: the environment is a stationary base for later separate floating UI objects, draggable glass screens and subtle parallax. Therefore do NOT bake floating cubes, particles, independent glass ornaments or other interactive objects into this background. Leave margins and clear space where those separate animated layers can move. Distinct architectural depth should already be visible in this one image. No arrows, motion trails, guides or annotations about animation.
Prevent seams: no repeating tiles, no repeated floor at mid-page, no multi-panel collage, no disconnected rooms, no sudden lighting bands, no hard horizontal separators, no extreme tunnel vanishing point in the middle. One uninterrupted light environment from the high airy upper volume down to the floor at the very bottom.

Keep the reference's soft, pearlescent, translucent look rather than producing a clinical office or a stark blank white rectangle. No furniture, no desks, no chairs, no plants, no decorative sculptures, no oversaturated purple/neon, no orange or dramatic black shadows. Full bleed. Single tall background image only, beautiful and ready to layer a portfolio interface over.
```

