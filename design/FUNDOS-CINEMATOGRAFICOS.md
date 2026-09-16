# Quatro fundos claros — teste visual

## Cenários

1. **Átrio de luz** (`atrium`): arquitetura branca e vidro, aproximação lenta da câmera e luz atravessando a cena.
2. **Horizonte suspenso** (`horizon`): arquitetura entre nuvens, névoa azul e deslocamento suave da atmosfera.
3. **Galeria solar** (`solar`): travertino, arcos, fachos de luz dourada e partículas discretas.
4. **Aurora de seda** (`aurora`): vidro perolado, curvas translúcidas e reflexos azulados e lilases.

As quatro imagens foram geradas com a ferramenta nativa de imagens. Os PNGs originais estão em `assets/backgrounds/`; não substituem os arquivos anteriores. Os prompts estão em `design/background-prompts.json`.

## Comparação

O seletor no rodapé flutuante permite comparar as opções em qualquer seção. A escolha fica no armazenamento local do navegador e pode ser compartilhada por `?fundo=atrium`, `?fundo=horizon`, `?fundo=solar` ou `?fundo=aurora`. O hash da seção é preservado.

O cenário é uma única camada fixa sob toda a página. A rolagem move a câmera com o parallax existente; luz, névoa e reflexos animam transformações e opacidade em camadas separadas. A transição só começa depois de a nova imagem estar carregada. Não existe um segundo loop JavaScript de animação contínua.

O botão de pausa do seletor compartilha o controle existente do hero. As animações do fundo também param com a página oculta e respeitam `prefers-reduced-motion`.

## Voltar ao teste anterior

Ponto anterior: `f1405883a2988ac73836b794e857e2100def3c7f` (primeiro fundo claro enviado pelo usuário).

As mudanças deste teste estão em `index.html`, `src/main.js`, `src/backgrounds.js`, `src/backgrounds.css` e na validação de assets em `scripts/build.mjs`. O fundo noturno original e `assets/atrium-vertical.png` continuam preservados.
