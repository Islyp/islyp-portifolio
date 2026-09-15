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
- `src/project-showcase.js`: seleção e navegação das apresentações.
- `src/phone-geometry.js` e `src/phone-viewer.js`: modelo 3D adaptado do Voto Vivo, iluminação, telas e interação.
- `assets/`: cenário, atlas de mockups, retrato transparente, fonte local e favicon.
- `tests/physics.test.mjs`: testes de física independentes da taxa de quadros.
- `HERO-IMPLEMENTACAO.md`: escopo, decisões e validação.
- `design/HERO-ASSETS.md`: origem e prompts dos assets gerados.
- `design/SOBRE-ASSETS.md`: origem e prompt do recorte da foto de Paulo.
- `design/TECNOLOGIAS-ASSETS.md`: referência, origem dos ícones e comportamento dos carrosséis.
- `design/PROJETOS-ASSETS.md`: referência dos cards, capas ilustrativas e prompts.
- `design/PROJETOS-3D.md`: origem do modelo, capturas dos sites e informações técnicas dos projetos.
- `design/RESPONSIVIDADE.md`: layouts por tamanho de tela e revisão de toque, teclado e orientação.

## Interação

Arraste qualquer painel e solte para lançá-lo com desaceleração. Clique sem arrastar para abrir o projeto. Use Tab para selecionar os quatro projetos principais; setas movem o painel, Shift acelera o deslocamento, Enter abre e Escape restaura sua posição. A pausa está no canto inferior direito. A preferência do sistema por movimento reduzido é respeitada.

O mesmo cenário acompanha o hero, a seção Sobre e as tecnologias com paralaxe. O link Sobre na navbar fixa leva à foto e à apresentação de Paulo. Logo abaixo, os vinte itens de tecnologias e ferramentas circulam em duas faixas de largura total, em sentidos opostos. O botão ao lado do título pausa ambas; o mouse pausa a faixa sob o ponteiro. Com movimento reduzido, todos os itens aparecem sem animação.

O menu Projetos e a chamada do hero levam à seção `#projetos`, abaixo das tecnologias. Os quatro cards levam à apresentação detalhada e selecionam o projeto correspondente. A grade se adapta de quatro para duas ou uma coluna.

Até 600 px, a navbar usa um menu recolhível. O hero possui composições para retrato e paisagem, com menos elementos decorativos nas telas compactas. A seção Sobre passa a uma coluna até 900 px; a apresentação dos projetos passa de três para duas e depois uma coluna. Os controles têm áreas de toque de pelo menos 44 px, e as âncoras consideram a altura da navbar.

A apresentação detalhada usa um celular em Three.js, carregado somente perto da seção. Arraste para girar, use as setas do teclado e Home/Escape para reposicionar. Setas e indicadores do painel alternam tela, conteúdo e link dos quatro projetos. Há pausa, suporte a movimento reduzido e alternativa estática sem WebGL. Os quatro projetos possuem capturas reais na tela; a de M.I. Ferreira vem da prévia local, com a casa 3D renderizada. Sua publicação permanece “Em breve”. As tecnologias do Guinga’s, da Michelle Sampaio e do Elevamos foram fornecidas pelo usuário; as de M.I. Ferreira aguardam confirmação.

Laboratório, contato e demais seções continuam em planejamento. Os mockups do hero e as capas dos cards são ilustrativos. Three.js 0.185.1 está incluído localmente em `assets/vendor/three/`, com licença MIT. A publicação e a conexão do domínio islyp.com não foram realizadas nesta etapa.
