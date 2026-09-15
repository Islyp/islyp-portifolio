# islyp.com

Portfólio de Paulo Islyp. Hero interativo, seção Sobre, carrosséis de tecnologias, cards de projetos e apresentação com celular 3D.

## Executar

Requer Node.js 20 ou superior. Sem dependências de execução ou instalação.

```sh
npm run dev
```

Abra http://localhost:4173. O servidor atende somente o computador local.

```sh
npm test
npm run build
npm run preview
```

O build gera `dist/`, pronto para hospedagem estática. Para executar preview e dev ao mesmo tempo, configure outra porta pela variável `PORT`.

## Estrutura

- `index.html`: estrutura e acessibilidade.
- `src/styles.css`: composição responsiva, vidro, iluminação e profundidade.
- `src/main.js`: painéis, mouse, toque, teclado, movimento lateral e paralaxe.
- `src/navigation.js`: menu mobile, gerenciamento de foco e altura da navbar para as âncoras.
- `src/physics.js`: cálculo de inércia, velocidade de soltura e limites.
- `src/technologies.js`: repetição contínua, velocidade e pausa dos carrosséis.
- `src/projects.js`: conteúdo e tecnologias confirmadas de cada projeto.
- `src/project-showcase.js`: rolagem, troca de telas e navegação das apresentações.
- `src/project-scroll.js`: percurso do celular entre os projetos.
- `src/project-markup.js`: marcação dos quatro artigos a partir dos dados compartilhados.
- `src/phone-geometry.js` e `src/phone-viewer.js`: modelo 3D adaptado do Voto Vivo, iluminação, telas e interação.
- `assets/`: cenário, atlas de mockups, retrato transparente, fonte local e favicon.
- `tests/`: testes da física dos painéis e do percurso do celular.
- `HERO-IMPLEMENTACAO.md`: escopo, decisões e validação.
- `design/HERO-ASSETS.md`: origem e prompts dos assets gerados.
- `design/SOBRE-ASSETS.md`: origem e prompt do recorte da foto de Paulo.
- `design/TECNOLOGIAS-ASSETS.md`: referência, origem dos ícones e comportamento dos carrosséis.
- `design/PROJETOS-ASSETS.md`: capturas reais dos cards e histórico das capas ilustrativas.
- `design/PROJETOS-SCROLL.md`: sequência vertical com celular preso à área visível.
- `design/PROJETOS-3D.md`: origem do modelo, capturas dos sites e informações técnicas dos projetos.
- `design/RESPONSIVIDADE.md`: layouts por tamanho de tela e revisão de toque, teclado e orientação.

## Interação

Arraste qualquer painel e solte para lançá-lo com desaceleração. Clique sem arrastar para abrir o projeto. Use Tab para selecionar os quatro projetos principais; setas movem o painel, Shift acelera o deslocamento, Enter abre e Escape restaura sua posição. A pausa está no canto inferior direito. A preferência do sistema por movimento reduzido é respeitada.

O mesmo cenário acompanha o hero, a seção Sobre e as tecnologias com paralaxe. O link Sobre na navbar fixa leva à foto e à apresentação de Paulo. Logo abaixo, os vinte itens de tecnologias e ferramentas circulam em duas faixas de largura total, em sentidos opostos. O botão ao lado do título pausa ambas; o mouse pausa a faixa sob o ponteiro. Com movimento reduzido, todos os itens aparecem sem animação.

O menu Projetos e a chamada do hero levam à seção `#projetos`, abaixo das tecnologias. Os quatro cards levam à apresentação detalhada e selecionam o projeto correspondente. A grade se adapta de quatro para duas ou uma coluna.

Até 600 px, a navbar usa um menu recolhível. O hero possui composições para retrato e paisagem, com menos elementos decorativos nas telas compactas. A seção Sobre passa a uma coluna até 900 px. Nos projetos, os cards alternam entre os lados do celular acima de 760 px; abaixo disso, o aparelho acompanha a rolagem acima da área de leitura. Os controles têm áreas de toque de pelo menos 44 px.

A apresentação detalhada usa um celular em Three.js, carregado somente perto da seção. Os quatro cards sobem normalmente com a página. O celular permanece na área visível e, entre os projetos, recua em profundidade, gira, atravessa para o lado oposto e troca de tela. No mobile, acompanha os cards acima do texto. Arraste para girar, use as setas do teclado e Home/Escape para reposicionar. Há pausa da flutuação, suporte a movimento reduzido e alternativa estática sem WebGL. Sem JavaScript, os quatro artigos e links continuam disponíveis. M.I. Ferreira permanece “Em breve”; suas tecnologias aguardam confirmação.

Laboratório, contato e demais seções continuam em planejamento. Os mockups do hero são ilustrativos; as capas dos cards usam capturas reais enviadas pelo usuário. Three.js 0.185.1 está incluído localmente em `assets/vendor/three/`, com licença MIT. Site público: https://islyp-portfolio.tzmarcio.chatgpt.site. O domínio islyp.com ainda não foi conectado. O estado anterior aos testes visuais está na tag `checkpoint/antes-testes-visuais-2026-09-15`.
