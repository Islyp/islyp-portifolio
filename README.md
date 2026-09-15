# islyp.com

Portfólio de Paulo Islyp. Desenvolvimento por etapas, começando pelo hero da imagem fornecida pelo usuário.

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
- `assets/`: cenário, atlas de mockups, fonte local e favicon.
- `tests/physics.test.mjs`: testes de física independentes da taxa de quadros.
- `HERO-IMPLEMENTACAO.md`: escopo, decisões e validação.
- `design/HERO-ASSETS.md`: origem e prompts dos assets gerados.

## Interação

Arraste qualquer painel e solte para lançá-lo com desaceleração. Clique sem arrastar para abrir o projeto. Use Tab para selecionar os quatro projetos principais; setas movem o painel, Shift acelera o deslocamento, Enter abre e Escape restaura sua posição. A pausa está no canto inferior direito. A preferência do sistema por movimento reduzido é respeitada.

O cenário continua um pouco além do hero para experimentar a paralaxe. Sobre e Contato ainda não têm seções implementadas. As telas são mockups ilustrativos derivados da referência, preparados para futura substituição por capturas dos projetos reais. A publicação e a conexão do domínio islyp.com não foram realizadas nesta etapa.
