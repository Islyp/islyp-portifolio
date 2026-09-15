# Foto da seção Sobre

**Pedido:** remover o fundo da foto do usuário e colocá-la com o texto Sobre abaixo do hero, seguindo a referência.

**Método:** ferramenta nativa `image_gen`, modo de edição, sem CLI.

- Entrada: `C:/Users/Paulo/Downloads/copia.jpg` (1904 × 2219 px). O original foi mantido sem alterações.
- Resultado no projeto: [`assets/paulo-islyp-recorte.png`](../assets/paulo-islyp-recorte.png), com 1122 × 1402 px, modo RGBA e transparência real (alpha de 0 a 255).
- Original da ferramenta: `C:/Users/Paulo/.codex/generated_images/01a0a22f-2770-7671-9e40-f5f63083b77d/exec-a02bd398-f784-4c73-b794-1c1f3892faa9.png`.
- Aplicação: foto sem moldura à esquerda; apresentação à direita. Em celular, uma coluna. Após o pedido para diminuir mais a foto, a largura máxima passou a ser 330 px no desktop e 210 px no celular. O desvanecimento da base é aplicado apenas por CSS; o PNG mantém o retrato completo entregue pela ferramenta.

## Referência de conteúdo

- Entrada: `C:/Users/Paulo/AppData/Local/Temp/codex-clipboard-1ee368a4-3892-4d4f-9343-72d44fd7f807.png`.
- Cópia no projeto: [`referencias/SOBRE-textos-referencia.png`](referencias/SOBRE-textos-referencia.png).
- Uso: título “Mais que código, propósito.”, apresentação profissional e seis áreas de atuação, adaptados ao cenário noturno existente.

## Prompt final

```text
Use case: precise-object-edit / background removal. EDIT TARGET: the attached real photograph of Paulo. Remove ONLY the outdoor background (waterfall, stones, trees, plants, sky, ground) and return a clean photographic cutout of the EXACT SAME person on a truly TRANSPARENT alpha background, as a PNG. Preserve his identity with the highest fidelity: the same facial features, facial expression, eye direction, skin tone and texture, beard, haircut and shaved hair line, eyebrow piercing, ear stud, silver necklace, black shirt and black-and-white jacket. Keep the same pose, shoulder proportions, clothing folds and all visible body from the original photograph. Do not beautify, retouch, change the face, redraw clothing, relight or color-grade the subject. Do not change his age, hair, physique or expression. Do not add hands, legs or unseen parts of the body; the torso ends at the same lower photographic crop. Carefully retain natural fine hair and the jacket silhouette, with clean soft alpha edges and no green/white outdoor halo. Trim the large empty space above the head so the isolated subject fills the canvas with a small transparent margin around the head and sides, useful as a large portrait on a website. Use a portrait canvas approximately 4:5, with the full visible torso intact. There must be NO scenery, NO backdrop color, NO checkerboard painted into the image, NO text, NO border, NO shadow or glow outside the subject. Genuine transparency everywhere outside the person. This is background removal from the supplied photograph, not a newly imagined portrait.
```
