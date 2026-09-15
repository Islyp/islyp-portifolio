# Hero — implementação inicial

## Pedido atual

Em 14/09/2026, o usuário pediu desenvolver o hero antes das demais seções. A referência é `design/referencias/M14-referencia-fornecida.png`, correspondente à imagem enviada `Imagem do Codex 14 de set. de 2026, 18_51_02.png`.

Requisitos: fidelidade à composição, painéis de vidro com mockups, sensação de flutuação, animação lateral, arraste com mouse em qualquer direção, impulso com desaceleração ao soltar e cidade acompanhando a rolagem aos poucos.

**Atualização do fundo:** o usuário escolheu a imagem vertical `Imagem do Codex 14 de set. de 2026, 20_07_05.png` pela altura adequada ao scroll. Ela foi copiada integralmente para `assets/city-vertical.png` (724 × 2172), com o mesmo SHA-256 do arquivo fornecido e do estudo M14-01.

## Implementado

- Texto central com a redação e as três linhas da referência, assinatura e navegação superior.
- Quatro telas principais: Elevamos, Michelle Sampaio, Guinga’s Bar e M.I. Ferreira. Dez telas menores criam planos de profundidade.
- Vidro em CSS: bordas translúcidas, reflexos, cantos iluminados, desfoque de fundo e perspectiva tridimensional.
- Movimento lateral contínuo com alturas de flutuação independentes e pequena reação ao mouse.
- Pointer Events com captura do ponteiro: arraste no painel inteiro, também por toque. O lançamento é calculado pelo gesto dos últimos 110 ms, evitando impulso antigo quando o usuário segura o painel parado antes de soltar.
- Desaceleração exponencial independente da taxa de quadros. Limites amortecidos mantêm as telas acessíveis. Depois da inércia, o movimento retoma a partir da nova posição.
- Cenário vertical único, sem repetição nem deformação. Ele avança a 28% da distância rolada pela página, com suavização e limite no fim da imagem. A velocidade é constante em relação à rolagem e não depende da quantidade de seções. Em telas largas, a largura define a escala natural; em telas estreitas, uma altura mínima de 240svh mantém céu suficiente no hero e recorta apenas as laterais. A continuação vazia permite avaliar o início desse movimento enquanto as próximas seções não existem.
- Clique abre uma apresentação breve com o link público conhecido. M.I. Ferreira aparece como “Em breve”. O botão Projetos e a chamada central abrem a apresentação do Guinga’s.
- Navegação por teclado, pausa, suporte a `prefers-reduced-motion` e suspensão da animação quando a aba ou o hero não está visível.
- Composição própria para celular; fonte e imagens servidas localmente.

## Assets e limites desta etapa

O fundo atual é uma cópia intacta da imagem vertical enviada pelo usuário. A adaptação horizontal anterior fica preservada, mas não é mais carregada pela página. As telas continuam sendo um atlas de quatro mockups recriados por geração de imagens: são interpretações ilustrativas, não capturas dos sites reais. Os arquivos de referência e estudos anteriores foram preservados. Consulte a origem e os prompts em `design/HERO-ASSETS.md`.

A foto e a seção Sobre presentes na referência não integram este primeiro desenvolvimento. Sobre e Contato aparecem como rótulos inativos para manter a composição de navegação. Nenhuma hospedagem, DNS ou conexão com o domínio foi alterada.

## Verificação realizada

- Quatro testes de física: desaceleração entre 30 e 144 fps; soltura após espera; direção e velocidade do gesto; contenção com amortecimento.
- Chromium/Edge: carregamento sem erros de JavaScript ou assets ausentes; 14 painéis e quatro pontos de navegação por teclado.
- Arraste real: deslocamento após soltar e redução progressiva da distância em intervalos iguais; o arraste não dispara o clique.
- Teclado: setas, Enter e Escape; modal, link do Guinga’s e estado “Em breve”.
- Pausa, movimento reduzido, movimento do cenário ao rolar e arraste real por toque.
- Desktop 1440 × 900, celular 390 × 844 e largura de 320 px sem rolagem horizontal.
- Capturas e relatório local em `test-results/`, ignorados no versionamento.

## Pontos de ajuste para as próximas conversas

Velocidades e posições ficam em `src/main.js`; a resistência da inércia fica em `src/physics.js`. O visual é uma primeira implementação funcional para avaliação do usuário, não um registro de aprovação final. Continuar parte por parte conforme as próximas instruções.
