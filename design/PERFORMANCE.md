# Carregamento e imagens

## Otimização de 16/09/2026

As capturas em PNG estavam sendo transferidas em resolução maior que a necessária. Os arquivos originais permanecem preservados; o site usa 17 derivados WebP em `assets/optimized/`.

- Cidade: resolução original (724 × 2172), qualidade 86.
- Retrato: largura máxima de 660 px, qualidade 88, com transparência.
- Painéis do hero: largura máxima de 1200 px, qualidade 86.
- Capas dos projetos: largura máxima de 960 px, qualidade 86.
- Telas do celular: largura máxima de 780 px, qualidade 88.
- Conversão com Sharp 0.35.4, WebP `effort: 6`, `smartSubsample: true`, sem ampliar originais menores.

`scripts/image-assets.json` relaciona cada original ao derivado. O nome do derivado inclui os primeiros 12 caracteres do SHA-256 de seu conteúdo. Ao trocar uma imagem, gere outro nome a partir dos novos bytes, atualize o mapa e suas referências em `index.html` e `src/projects.js`. Não sobrescreva um arquivo com hash antigo.

## Carregamento e cache

O fundo, a fonte e as cinco capturas do hero têm preload. As imagens das seções seguintes continuam com carregamento tardio; retrato e capas têm prioridade baixa. O Three.js permanece carregado apenas perto da seção de projetos.

O build confere os derivados listados no mapa e copia `_headers` para `dist`. Apenas `/assets/optimized/*`, com nomes derivados do conteúdo, recebe cache imutável de um ano. HTML, JavaScript e CSS continuam usando a revalidação padrão do Cloudflare para receber novas versões.

A animação deixa de atualizar os painéis enquanto o hero está fora da tela. O fundo só recebe um novo transform quando o deslocamento muda. Arraste, inércia e paralaxe continuam disponíveis.

## Verificação

- Fundo + cinco capturas: 5.864.034 → 485.328 bytes (−91,7%).
- Incluindo o retrato próximo ao hero: 7.601.513 → 550.204 bytes (−92,8%).
- Simulação local em Edge, janela 1440 × 900, cache desativado, download de 200.000 bytes/s (1,6 Mbps), latência configurada de 100 ms: todas as capturas do hero decodificadas em 40,2 s antes e 3,8 s depois. LCP observado: 17,8 s → 3,7 s. São medições de laboratório, sujeitas à máquina e à rede; não representam uma garantia para todos os visitantes.
- Build e os dez testes de física/rolagem aprovados.

Referência de cache: https://developers.cloudflare.com/workers/static-assets/headers/
