# Apresentação dos projetos com celular 3D

**Atualização de layout:** o carrossel descrito neste registro foi substituído pela [sequência guiada pela rolagem](PROJETOS-SCROLL.md). Modelo, capturas e dados técnicos foram preservados.

## Pedido e referência

O usuário pediu uma seção de projetos com o mesmo tipo de celular do Voto Vivo, seguindo a composição enviada e preservando a identidade noturna do portfólio.

- Referência de layout: [PROJETOS-celular-referencia.png](referencias/PROJETOS-celular-referencia.png).
- Código do modelo consultado: `C:/Users/Paulo/OneDrive/Documentos/Voto Vivo/teste/app/page.tsx`, funções `PhoneModel`, `PhoneStage` e `usePhoneMotion`.
- O projeto Voto Vivo foi apenas consultado, sem alterações.

## Composição e navegação

A seção fica abaixo dos quatro cards, com introdução à esquerda, celular ao centro e painel de detalhes à direita. Mantém a cidade contínua, títulos em serifada e vidro escuro. Entre 901 e 1150 px, a introdução ocupa a largura e os outros dois elementos ficam lado a lado, com o celular acompanhando a rolagem. Até 900 px, a composição segue em uma coluna, com textos maiores e controles no topo do card. A altura do modelo acompanha o espaço da tela. Revisão em [RESPONSIVIDADE.md](RESPONSIVIDADE.md).

O card de explicação recebe reflexos e detalhes da identidade do projeto selecionado: vermelho/magenta para Guinga’s, azul/amarelo para Elevamos, terracota/creme para Michelle e dourado com azul discreto para M.I. Ferreira. As cores aparecem na iluminação dos cantos, nos reflexos das bordas, na categoria, nos marcadores, nas tags e nos controles. O fundo permanece escuro e os textos de leitura mantêm cores claras. Os temas usam variáveis CSS ligadas a `data-project`, acompanhando a navegação existente, sem acrescentar animação contínua.

Setas e indicadores selecionam os quatro projetos. Tela, posição do celular, nome, categoria, descrição, desafio, funcionalidades, tecnologias confirmadas e ação final mudam juntos. Os cards agora levam às âncoras `#projeto-guingas`, `#projeto-elevamos`, `#projeto-michelle` e `#projeto-ferreira`. Os links também funcionam ao abrir a página diretamente. O link “Ver todos os projetos” leva à apresentação do primeiro projeto.

Os painéis flutuantes do hero mantêm suas prévias em diálogo. A seção detalhada possui dados compartilhados com essas prévias em `src/projects.js`.

## Modelo e dependência

- `src/phone-geometry.js`: adaptação do modelo procedural do Voto Vivo para JavaScript sem React. Preserva proporções, moldura metálica arredondada, vidro frontal, duas câmeras traseiras, botões e portas.
- `src/phone-viewer.js`: câmera, reflexos de estúdio, luz azulada, texturas, transição e interação. O usuário pode girar o celular; ao soltar, ele retorna à posição de leitura. Setas do teclado giram o modelo e Home/Escape reposicionam. Há botões para reposicionar e pausar.
- `src/project-showcase.js`: navegação, conteúdo, âncoras e carregamento do visualizador próximo à seção.
- Three.js **0.185.1**, mesma versão instalada no Voto Vivo. Cópias locais intactas de `three.module.min.js`, `three.core.min.js` e licença MIT ficam em `assets/vendor/three/`. Não há CDN em tempo de execução.

A renderização respeita movimento reduzido, para fora de vista e com a aba oculta. Sem WebGL, ou após perder o contexto gráfico, a captura permanece visível dentro de uma moldura estática; texto, seleção e links continuam disponíveis.

## Telas do celular

Capturas dos sites publicados em 14/09/2026 e da prévia local de M.I. Ferreira em 15/09/2026. Viewport de 390 × 826 CSS px e densidade 2, resultando em PNGs de 780 × 1652 px. São capturas estáticas de leitura, exibidas como texturas do modelo. A ação “Ver projeto” abre o site publicado.

| Arquivo | Origem |
|---|---|
| [guingas.png](../assets/project-screens/guingas.png) | [Guinga’s Bar](https://www.guingasbar.com/), captura real do site público |
| [elevamos.png](../assets/project-screens/elevamos.png) | [Elevamos](https://elevamoscursos.com.br/), captura real do site público |
| [michelle.png](../assets/project-screens/michelle.png) | [Michelle Sampaio](https://portfolio-michelle-sampaio.michellesampaiorocha.workers.dev/), captura real do site público |
| [ferreira.png](../assets/project-screens/ferreira.png) | Captura real da versão mobile do projeto local `C:/Users/Paulo/Projetos/Teste LP M.I`, servido temporariamente em loopback. Inclui o cabeçalho, título, chamada e maquete da casa com WebGL carregado. Substitui a cartela ilustrativa de “Em breve”. |

M.I. Ferreira foi capturado sem alterar os arquivos do projeto de origem. Movimento reduzido foi ativado no navegador para registrar o enquadramento inicial da maquete. O print mobile começa no topo da página e preserva a composição original. O usuário confirmou depois que o projeto está concluído, mas ainda não será publicado. A ação mostra “Projeto concluído · Publicação pendente”, sem link externo.

Também foi arquivado o [print desktop de M.I. Ferreira](referencias/MI-Ferreira-desktop.png), com 1440 × 900 px. Ambas as capturas carregaram a maquete WebGL sem erros de JavaScript ou recursos locais ausentes. O servidor temporário de captura foi encerrado ao terminar.

## Conteúdo informado pelo usuário — Guinga’s Bar

As informações abaixo foram fornecidas pelo usuário nesta etapa. Não representam auditoria independente do painel ou do back-end.

- Front-end em HTML5, CSS3 e JavaScript puro com ES Modules, sem framework/build. Mobile-first com `min-width`, variáveis CSS, SVGs com neon e fontes Bebas Neue/Poppins.
- Firebase Realtime Database: fila em tempo real, repertório de cerca de 41 mil músicas e flyers. Authentication: login anônimo e administrativo por e-mail/senha. Security Rules: permissões por dono/admin e validação de prazos com `now`. REST para leitura de listas grandes.
- Cloudflare Worker com Cron Trigger a cada minuto. A fila tem quatro estados, chamada automática e timers de um e três minutos. Telas abertas fazem a fila avançar, com o Worker como continuidade quando não há telas abertas.
- Busca por prefixo, nome, artista ou código no repertório. Painel com gestão da fila, importação/exportação do repertório, contatos e flyers. Cardápio de 132 itens, busca sem acentos e imagens WebP.
- Google Maps JavaScript API, PWA com manifesto/Service Worker/cache e Notification API. Canvas para redimensionar/comprimir uploads. File API/TextDecoder para `.ini` em Latin-1, preservado na exportação.
- Hostinger e CDN com deploy pelo GitHub; branches `main` e `production`; sincronização por Bash e versionamento de cache. Google Cloud Console para restrições das chaves. Cloudflare Tunnel para testes temporários.

O painel apresenta uma seleção concisa dos diferenciais e tags de HTML5, CSS3, JavaScript, Firebase, Cloudflare Workers, PWA e Google Maps API.

## Conteúdo informado pelo usuário — Michelle Sampaio Rocha

- HTML5 semântico, CSS3 puro e JavaScript vanilla ES6+, sem framework, `package.json` ou dependências de runtime.
- CSS organizado em sete arquivos por seção: `base`, `hero`, `about`, `case`, `creatives`, `videos` e `footer`. Variáveis nativas em `:root` para cores, tipografia e espaçamento; sem Sass ou Tailwind.
- JavaScript para menu, carrossel por `transform`, ampliação de imagens com `<dialog>` nativo, player do vídeo do case, embeds do Instagram com alternativa de exibição e entrada de elementos ao rolar com `IntersectionObserver`.
- Google Fonts via `<link>`: Playfair Display para títulos e Inter para o corpo.
- Assets estáticos no Cloudflare Workers, configurados por `wrangler.jsonc`. Integração Git nativa: push no `main` do GitHub dispara cópia dos arquivos para `dist` e publicação com `npx wrangler deploy`.
- Ferramentas pontuais, externas ao projeto: `sharp` para otimizar imagens em `assets/img/criativos/`; `docs/responsive-check.html` e `docs/face-check.js` para QA de larguras responsivas e enquadramento do rosto no hero. Não são dependências do site.

O painel destaca os formatos de conteúdo, as interações e a estrutura enxuta. As tags são HTML5, CSS3, JavaScript, Cloudflare Workers, GitHub e Google Fonts. Os detalhes técnicos acima foram fornecidos pelo usuário; não representam uma auditoria independente do código ou do deploy.

## Conteúdo informado pelo usuário — Elevamos

A lista recebida após a de Michelle foi aplicada ao Elevamos pelo contexto do site de cursos e do blog com painel, já descrito neste projeto. Ela esclarece a menção anterior a “ASTRA”. Versões e arquitetura abaixo foram informadas pelo usuário, sem auditoria independente do código.

- Site público pré-renderizado em HTML com Astro 7, TypeScript e componentes `.astro`. CSS puro, sem Tailwind; Figtree via Google Fonts. JavaScript vanilla em `main.js` apenas para menu mobile e mapa sob clique. Nenhum framework roda no navegador do visitante.
- Painel `/keystatic` com `@keystatic/core` e `@keystatic/astro`. React 19 é usado somente pelo Keystatic; artigos escritos em Markdoc.
- Login próprio do painel com `node:crypto`: `scrypt` para senha e HMAC para cookie de sessão assinado, sem banco de dados. Não se trata de biblioteca de autenticação externa.
- Node.js ≥22.12 e adaptador `@astrojs/node` em modo standalone. Sharp gera variantes responsivas das capas dos artigos em WebP e JPEG no build.
- Sitemap e feed RSS por `@astrojs/sitemap` e `@astrojs/rss`. JSON-LD de schema.org escrito nas páginas para SEO.
- Git e GitHub, com repositório privado. Provedor de hospedagem não informado.

O painel destaca o blog editável, as páginas estáticas, as imagens responsivas e o SEO. As tags apresentam Astro 7, TypeScript, CSS3, JavaScript, Keystatic, React 19 · painel, Markdoc, Node.js, Sharp e Git / GitHub. A identificação do React como exclusivo do painel fica visível na própria tag.

## Conteúdo informado pelo usuário — M.I. Ferreira

- HTML5, CSS3 e JavaScript puro. Layout adaptado a celular e desktop, com interações, controles e movimento cinematográfico desenvolvidos em JavaScript.
- Three.js e WebGL para renderizar a casa, materiais, iluminação, sombras e câmera. A casa é construída diretamente por código, incluindo piscina, vegetação e interiores.
- SVG para ícones, traços e anotações do hero. WebP para o céu e para a alternativa estática da casa.
- Node.js e npm como ambiente e ferramentas de desenvolvimento. esbuild para agrupar e compactar o JavaScript de publicação.
- Sites do GPT foi informado como hospedagem. O usuário esclareceu que o projeto está pronto, mas ainda não será publicado; a tag indica hospedagem prevista, e o portfólio mantém o link externo ausente.
- Arquitetura estática: conteúdo e experiência 3D executam no navegador, sem banco de dados ou backend de aplicação.

O card apresenta os cinco destaques e as nove tecnologias informadas. A função de Node.js como ferramenta de desenvolvimento fica explícita no detalhe da tag. As informações foram fornecidas pelo usuário; o texto não acrescenta métricas de resultados ou tecnologias não confirmadas.

## Verificação

- Edge/Chromium com WebGL: larguras de 1440, 1024, 768, 390 e 320 px, sem rolagem horizontal, erros de JavaScript ou recursos ausentes.
- Cards, setas, ciclo completo, indicadores, links diretos, troca rápida, conteúdo e ações conferidos nos quatro projetos.
- Arraste gira o dispositivo até a traseira; teclado e reposicionamento funcionam. Pausa e movimento reduzido interrompem os desenhos WebGL quando o modelo se estabiliza.
- Three.js é carregado somente próximo à seção. Sem WebGL e após perda do contexto, a moldura estática mantém a captura visível e permite continuar navegando.
- Capturas e scripts da revisão ficam em `test-results/`, ignorados pelo Git.
