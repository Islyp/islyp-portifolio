# Teste de fundo claro — 15/09/2026

Imagem fornecida pelo usuário: `Imagem do Codex 14 de set. de 2026, 23_35_44.png`.
Arquivo aplicado sem alteração: `assets/atrium-vertical.png` (724 × 2172).

O fundo mantém o movimento de parallax existente. O arquivo separado
`src/theme-light.css` adapta textos, navegação e controles ao fundo claro.
Os cards de detalhes mantêm suas cores e reflexos de cada projeto.

## Ponto de retorno

A versão completa com cidade, projetos em scroll e laboratório está no commit
`c7d3b5379dbed87f90dffdc4ae2930b0029e21b7`.
O fundo original `assets/city-vertical.png` e o CSS noturno permanecem no projeto.

Para voltar somente ao visual noturno, remover o link para `theme-light.css`
no HTML, usar novamente `city-vertical.png` no preload e na imagem de fundo,
e restaurar o `theme-color` para `#030d1a`. Não é necessário reverter alterações
posteriores em conteúdo ou interações.
