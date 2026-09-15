# islyp.com

Portfólio de Paulo Islyp. Desenvolvimento por etapas: hero interativo, seção Sobre com foto recortada, duas faixas animadas de tecnologias e cards dos principais projetos.

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
- `src/physics.js`: cálculo de inércia, velocidade de soltura e limites.
- `src/technologies.js`: repetição contínua, velocidade e pausa dos carrosséis.
- `assets/`: cenário, atlas de mockups, retrato transparente, fonte local e favicon.
- `tests/physics.test.mjs`: testes de física independentes da taxa de quadros.
- `HERO-IMPLEMENTACAO.md`: escopo, decisões e validação.
- `design/HERO-ASSETS.md`: origem e prompts dos assets gerados.
- `design/SOBRE-ASSETS.md`: origem e prompt do recorte da foto de Paulo.
- `design/TECNOLOGIAS-ASSETS.md`: referência, origem dos ícones e comportamento dos carrosséis.
- `design/PROJETOS-ASSETS.md`: referência dos cards, capas ilustrativas e prompts.

## Interação

Arraste qualquer painel e solte para lançá-lo com desaceleração. Clique sem arrastar para abrir o projeto. Use Tab para selecionar os quatro projetos principais; setas movem o painel, Shift acelera o deslocamento, Enter abre e Escape restaura sua posição. A pausa está no canto inferior direito. A preferência do sistema por movimento reduzido é respeitada.

O mesmo cenário acompanha o hero, a seção Sobre e as tecnologias com paralaxe. O link Sobre na navbar fixa leva à foto e à apresentação de Paulo. Logo abaixo, os vinte itens de tecnologias e ferramentas circulam em duas faixas de largura total, em sentidos opostos. O botão ao lado do título pausa ambas; o mouse pausa a faixa sob o ponteiro. Com movimento reduzido, todos os itens aparecem sem animação.

O menu Projetos e a chamada do hero levam à seção `#projetos`, abaixo das tecnologias. Os quatro cards abrem as prévias com descrição e link público; M.I. Ferreira permanece “Em breve”. A grade se adapta de quatro para duas ou uma coluna.

As apresentações extensas dos projetos, contato e demais seções continuam em planejamento. As telas são mockups ilustrativos derivados da referência, preparados para futura substituição por capturas dos projetos reais. As capas dos cards também são ilustrativas. A publicação e a conexão do domínio islyp.com não foram realizadas nesta etapa.
