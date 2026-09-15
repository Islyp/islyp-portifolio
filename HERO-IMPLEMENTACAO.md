# Portfólio — implementação por etapas

## Pedido atual

Em 14/09/2026, o usuário pediu desenvolver o hero antes das demais seções. A referência é `design/referencias/M14-referencia-fornecida.png`, correspondente à imagem enviada `Imagem do Codex 14 de set. de 2026, 18_51_02.png`.

Requisitos: fidelidade à composição, painéis de vidro com mockups, sensação de flutuação, animação lateral, arraste com mouse em qualquer direção, impulso com desaceleração ao soltar e cidade acompanhando a rolagem aos poucos.

**Atualização do fundo:** o usuário escolheu a imagem vertical `Imagem do Codex 14 de set. de 2026, 20_07_05.png` pela altura adequada ao scroll. Ela foi copiada integralmente para `assets/city-vertical.png` (724 × 2172), com o mesmo SHA-256 do arquivo fornecido e do estudo M14-01.

## Implementado

- Texto central com a redação e as três linhas da referência, assinatura e navegação superior fixa no topo, com fundo translúcido e blur de 10 px.
- Quatro telas principais: Elevamos, Michelle Sampaio, Guinga’s Bar e M.I. Ferreira. Dez telas menores criam planos de profundidade.
- Vidro em CSS: bordas translúcidas, reflexos, cantos iluminados, desfoque de fundo e perspectiva tridimensional.
- Flutuação lateral em um percurso curto de ida e volta, com desaceleração suave nas extremidades. Cada painel oscila até cerca de 37 px para cada lado no desktop e 15 px no celular, conforme a largura e a profundidade; o ciclo dura de 18 a 24,4 segundos. Os limites se ajustam às bordas da tela. A flutuação vertical e a pequena reação ao mouse complementam o movimento.
- Pointer Events com captura do ponteiro: arraste no painel inteiro, também por toque. O lançamento é calculado pelo gesto dos últimos 110 ms, evitando impulso antigo quando o usuário segura o painel parado antes de soltar.
- Desaceleração exponencial independente da taxa de quadros. Limites amortecidos mantêm as telas acessíveis. Os painéis arrastados ou lançados para cima passam por trás da navbar fixa, que permanece na frente com seu blur. Uma parte das telas menores continua acessível abaixo do menu. O arraste e o lançamento continuam livres; depois da inércia, o percurso curto de ida e volta fica centrado na nova posição.
- Cenário vertical único, sem repetição nem deformação. Ele avança a 28% da distância rolada pela página, com suavização e limite no fim da imagem. A velocidade é constante em relação à rolagem e não depende da quantidade de seções. Em telas largas, a largura define a escala natural; em telas estreitas, uma altura mínima de 240svh mantém céu suficiente no hero e recorta apenas as laterais. O cenário acompanha também a seção Sobre, que substitui o espaço vazio de teste.
- Clique nos painéis abre uma apresentação breve com o link público conhecido. M.I. Ferreira aparece como “Em breve”. O menu Projetos e a chamada central levam à seção `#projetos`.
- Navegação por teclado, pausa, suporte a `prefers-reduced-motion` e suspensão da animação quando a aba ou o hero não está visível.
- Composição própria para celular; fonte e imagens servidas localmente.

## Assets e limites desta etapa

O fundo atual é uma cópia intacta da imagem vertical enviada pelo usuário. A adaptação horizontal anterior fica preservada, mas não é mais carregada pela página. As telas continuam sendo um atlas de quatro mockups recriados por geração de imagens: são interpretações ilustrativas, não capturas dos sites reais. Os arquivos de referência e estudos anteriores foram preservados. Consulte a origem e os prompts em `design/HERO-ASSETS.md`.

A seção Sobre foi implementada a pedido do usuário, logo após o hero, com sua foto fornecida em `copia.jpg`. O retrato recortado em PNG transparente fica à esquerda do texto no desktop, sem moldura; no celular, a composição fica em uma coluna. Um desvanecimento suave na base integra o corte da foto ao cenário. O link Sobre na navbar aponta para `#sobre`, com margem para o menu fixo. Origem e prompt do recorte em `design/SOBRE-ASSETS.md`.

Na revisão seguinte, o usuário forneceu os textos de `design/referencias/SOBRE-textos-referencia.png` e pediu reduzir mais a foto. O retrato passou a ter largura máxima de 330 px no desktop e 210 px no celular, com o nome Paulo Islyp abaixo. O título “Mais que código, propósito.” introduz três parágrafos sobre desenvolvimento web, cinco anos como professor, trabalho freelancer e gestão. Seis cartões apresentam as áreas de atuação e suas descrições: desenvolvimento web, ensino, freelancing e gestão de pessoas, equipes e projetos. O conteúdo foi adaptado à identidade noturna do site, com três colunas de cartões no desktop e duas em telas menores.

A seção Tecnologias foi adicionada em seguida, com os vinte itens informados pelo usuário e o título “Tecnologias utilizadas”. Duas faixas atravessam toda a largura da página, a primeira para a esquerda e a segunda para a direita, a 32 px/s. O ciclo usa cópias idênticas sem saltos, incluindo telas ultralargas. Há pausa pelo botão e pelo mouse, suspensão fora de vista e apresentação estática com movimento reduzido. Referência e origem dos ícones em `design/TECNOLOGIAS-ASSETS.md`.

A seção Principais projetos foi adicionada abaixo das tecnologias, com os quatro cards da referência: Guinga’s Bar, Elevamos, Michelle Sampaio e M.I. Ferreira. Capas ilustrativas próprias, borda fina, título e descrição curta sobre o mesmo cenário; o último card tem selo “Em breve”. A grade usa quatro colunas no desktop, duas no tablet e uma no celular. Os cards navegam para a apresentação detalhada e selecionam o projeto correspondente. Origem das capas e prompts em `design/PROJETOS-ASSETS.md`.

A apresentação detalhada reúne os quatro projetos em um carrossel com celular 3D, adaptado do modelo do Voto Vivo, e painel de vidro escuro. Setas e indicadores trocam tela, nome, descrição, desafio, funcionalidades e link. O celular gira por arraste ou teclado e volta à posição de leitura ao soltar; oferece pausa e reposicionamento. Capturas reais dos quatro projetos aparecem na tela; a de M.I. Ferreira foi obtida na prévia local com a casa 3D renderizada, mantendo a indicação de publicação “Em breve”. As tecnologias do Guinga’s, da Michelle Sampaio e do Elevamos foram informadas pelo usuário; as de M.I. Ferreira aguardam confirmação. Modelo, fontes das capturas e dados em `design/PROJETOS-3D.md`.

Contato e demais seções continuam em planejamento. Nenhuma hospedagem, DNS ou conexão com o domínio foi alterada.

Em 15/09/2026, foi realizada a revisão de responsividade: menu recolhível até 600 px; hero com composições para retrato e paisagem, altura adaptada e menos repetições decorativas; Sobre em coluna única até 900 px; projetos em três, duas ou uma coluna; botões com 44 px e textos maiores no celular. As âncoras acompanham a altura real da navbar. Os detalhes e a matriz de validação estão em `design/RESPONSIVIDADE.md`.

## Verificação realizada

- Quatro testes de física: desaceleração entre 30 e 144 fps; soltura após espera; direção e velocidade do gesto; contenção com amortecimento.
- Chromium/Edge: carregamento sem erros de JavaScript ou assets ausentes; 14 painéis e quatro pontos de navegação por teclado.
- Arraste real: deslocamento após soltar e redução progressiva da distância em intervalos iguais; o arraste não dispara o clique.
- Teclado: setas, Enter e Escape; modal, link do Guinga’s e estado “Em breve”.
- Pausa, movimento reduzido, movimento do cenário ao rolar e arraste real por toque.
- Desktop 1440 × 900, celular 390 × 844 e largura de 320 px sem rolagem horizontal.
- Sobre: PNG RGBA com transparência real; foto reduzida, título, seis áreas de atuação e link da navbar conferidos em 1440, 768, 390 e 320 px, sem erros de carregamento ou rolagem horizontal.
- Tecnologias: vinte itens e seus ícones, largura total, sentidos opostos, passagem contínua entre ciclos e pausa/retomada verificados em 320, 390, 768, 1440 e 3440 px. Movimento reduzido apresenta todos os itens sem animação; fallback sem JavaScript conferido em 320 px.
- Principais projetos: quatro capas, títulos, descrições, selo e grade conferidos em 1440, 1024, 768, 390 e 320 px, sem overflow ou erros. Menu e chamada do hero navegam à seção; os cards selecionam o projeto no carrossel detalhado.
- Celular 3D: navegação dos quatro projetos, capturas, links, sete tags do Guinga’s, carregamento adiado e ausência de rolagem horizontal conferidos em 1440, 1024, 768, 390 e 320 px. Arraste mostrando a traseira, teclado, reposicionamento, pausa, movimento reduzido sem renderização contínua, seleção rápida e links diretos verificados. Alternativa estática funciona sem WebGL e após perda do contexto gráfico.
- Capturas e relatório local em `test-results/`, ignorados no versionamento.

## Pontos de ajuste para as próximas conversas

Velocidades e posições ficam em `src/main.js`; a resistência da inércia fica em `src/physics.js`. O visual é uma primeira implementação funcional para avaliação do usuário, não um registro de aprovação final. Continuar parte por parte conforme as próximas instruções.
