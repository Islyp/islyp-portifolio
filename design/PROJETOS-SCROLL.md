# Projetos guiados pela rolagem

Implementação de 15/09/2026, após o checkpoint `checkpoint/antes-testes-visuais-2026-09-15`.

- Os quatro projetos são artigos independentes no fluxo da página. O conteúdo sobe normalmente, sem slides ou rolagem capturada.
- Um único celular Three.js acompanha a seção com `position: sticky` e sai junto com seu final.
- Em telas acima de 760 px, os cards alternam os lados. Entre as posições de leitura, o celular atravessa para o lado oposto, gira uma volta e recua em profundidade, passando atrás dos cards.
- A imagem muda na metade da travessia, quando a traseira está virada. A rolagem para cima desfaz o percurso.
- Até 760 px, o celular fica acima da área de leitura. A troca ocorre perto da chegada do próximo card, preservando a imagem enquanto um card longo é lido.
- O arraste e o teclado continuam girando o modelo. A pausa interrompe a flutuação ambiente; o acompanhamento da rolagem continua.
- Com movimento reduzido, não há travessia nem giro automáticos: os cards usam uma coluna lateral consistente e a tela muda diretamente.
- Sem WebGL, a prévia estática acompanha a seção e troca de imagem. Sem JavaScript, os quatro artigos e seus links continuam disponíveis.

## Arquivos e conteúdo

`src/project-scroll.js` calcula o percurso; `src/project-showcase.js` acompanha a rolagem e as âncoras; `src/phone-viewer.js` aplica a pose tridimensional. Os dados continuam em `src/projects.js`.

`src/project-markup.js` produz os quatro artigos a partir desses dados. O JavaScript hidrata a versão local e o build gera a mesma marcação em `dist/index.html`, entre os marcadores `project-chapters`, incluindo a alternativa sem JavaScript.

As capturas reais, os textos, as tecnologias e as cores dos projetos foram preservados. O fundo continua sendo a cidade noturna; o estudo claro M16 não está aplicado.

## Validação

Testes de percurso cobrem posições de leitura, travessia, giro contínuo, limites, leitura mobile e movimento reduzido. A revisão no navegador cobre rolagem, links diretos, retorno aos projetos, foco, arraste, toque vertical, alternativa sem WebGL e sem JavaScript.
