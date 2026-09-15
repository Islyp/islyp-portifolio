# Responsividade — 15/09/2026

Revisão solicitada pelo usuário para celulares, tablets e outras telas. Mantém a identidade visual, os reflexos próprios de cada projeto, o cenário contínuo e o arraste dos painéis.

## Composição

| Área | Comportamento |
|---|---|
| Navbar | Menu recolhível até 600 px, links visíveis acima dessa largura. Botão com estado acessível; fecha por link, clique externo ou Escape. O foco acompanha o fechamento por teclado e a mudança de tamanho. Sem JavaScript, os links continuam visíveis. |
| Hero | Composições para desktop, retrato e paisagem. Em celulares, altura mínima de 580 px; em paisagem até 1100 px de largura e 600 px de altura, mínima de 430 px. Em monitores grandes, máxima de 1200 px. |
| Painéis | Quatro projetos principais permanecem visíveis e arrastáveis. Em retrato compacto, seis repetições decorativas ficam ocultas; em paisagem curta, ficam apenas os quatro principais. Posição e tamanho são recalculados ao girar a tela. |
| Sobre | Uma coluna até 900 px, com foto de até 210 px. Áreas de atuação em três, duas ou uma coluna conforme o espaço. |
| Tecnologias | Faixas continuam atravessando a largura da página. Ícones, títulos e espaçamentos se ajustam ao celular. Movimento reduzido mostra os itens sem animação. |
| Cards de projetos | Quatro colunas em desktop, duas até 1050 px e uma até 480 px. |
| Apresentação detalhada | Três colunas acima de 1150 px; introdução seguida por duas colunas entre 901 e 1150 px; uma coluna até 900 px. No intervalo intermediário, o celular acompanha a rolagem ao lado do texto por `position: sticky`. |
| Celular 3D | Altura adaptada à tela, de 340 a 470 px na coluna única; 300 px em paisagem curta. Moldura estática acompanha a mesma proporção. Arraste horizontal por toque gira o modelo; gesto vertical rola a página. |
| Card de explicação | Texto maior em telas pequenas e altura conforme o conteúdo. Controles posicionados no topo da versão em coluna única. Tags quebram linha, preservando os temas de cada projeto. |

Os controles de navegação, pausa, reposicionamento, seleção e fechamento têm área de pelo menos 44 × 44 px. A navbar considera as áreas seguras da tela. As âncoras usam a altura real do cabeçalho, medida por `ResizeObserver`, para manter o conteúdo abaixo dele.

## Arquivos

- `src/navigation.js`: menu, foco e altura do cabeçalho.
- `src/main.js`: composição e reposicionamento dos painéis para cada orientação.
- `src/styles.css`: grades, tamanhos, tipografia, áreas de toque e pontos de mudança de layout.
- `index.html`: botão de menu acessível e `viewport-fit=cover`.

## Verificação

Edge/Chromium com viewport e toque emulados:

- 320 × 568, 360 × 640, 390 × 844, 600 × 960, 768 × 1024, 820 × 1180, 901 × 1100, 1024 × 768, 1152 × 900, 1440 × 900, 1920 × 1080, 2560 × 1440 e 3440 × 1440.
- Paisagem: 667 × 375 e 844 × 390.
- Sem rolagem horizontal ou erros de JavaScript/recursos em todos os tamanhos. Conteúdo do hero abaixo da navbar, quatro projetos, modelo WebGL e controles de toque conferidos.
- Menu por toque, Tab, Escape, clique externo, âncora Sobre e alternância retrato/paisagem, incluindo o foco.
- Celular 3D: giro horizontal por toque e rolagem vertical sobre o canvas. Seleção de projeto por toque.
- Regressão do hero: arraste com mouse e toque, impulso e desaceleração, pausa, teclado, diálogo, cenário acompanhando o scroll e movimento reduzido.
- Navbar sem JavaScript verificada em 320 px.
- Quatro testes de física aprovados. Capturas e scripts de revisão em `test-results/`, ignorados pelo Git.

Esta revisão usa emulação no navegador; não é um teste em aparelhos físicos.
