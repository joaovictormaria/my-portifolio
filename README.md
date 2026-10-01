# Portfólio

Site de portfólio pessoal em React + Vite.

Migrado do arquivo `Portfolio.html` original (um bundle auto-extraível que usava
um runtime de templates próprio com `<sc-for>`, `<sc-if>` e `<image-slot>`).
O original foi preservado em [legacy/Portfolio.html](legacy/Portfolio.html) para referência.

## Rodando localmente

```bash
npm install
npm run dev
```

O site sobe em `http://localhost:5173`.

## Build

```bash
npm run build     # gera dist/
npm run preview   # serve o build de produção
```

## Estrutura

```
index.html              # shell + fontes do Google (Josefin Sans, Playfair Display)
src/
  main.jsx              # ponto de entrada
  App.jsx               # composição das seções
  index.css             # design tokens + estilos de todas as seções
  data/content.js       # TODO o conteúdo editável (textos, projetos, FAQ, depoimentos)
  components/
    Header.jsx
    Hero.jsx
    Services.jsx
    Projects.jsx
    Testimonials.jsx    # carrossel automático (5s), pausa no hover
    About.jsx
    Velnox.jsx
    Faq.jsx             # acordeão
    Contact.jsx
    Footer.jsx
    ImageSlot.jsx       # placeholder de imagem (substitui o <image-slot> original)
legacy/Portfolio.html   # arquivo original, apenas para referência
```

## Editando o conteúdo

Quase tudo que você vai querer trocar está em
[src/data/content.js](src/data/content.js): nome, e-mail, links de redes,
projetos, depoimentos e perguntas frequentes.

As seções de depoimentos e de FAQ podem ser ligadas ou desligadas em
`features` no mesmo arquivo (eram props do componente original).

### Colocando imagens

Os `ImageSlot` aparecem como placeholders tracejados enquanto não têm imagem —
o mesmo comportamento do arquivo original, onde nenhuma foto havia sido
preenchida. Para preencher um deles, coloque o arquivo em `public/` e passe a
URL:

```jsx
<ImageSlot src="/minha-foto.jpg" alt="Retrato" />
```

Nos projetos e depoimentos, basta preencher os campos `image` (ou `video`) e
`avatar` em `src/data/content.js`.

## Deploy

Hospedado na Vercel. O preset do Vite é detectado automaticamente
(`npm run build` → `dist/`); não é necessário nenhum ajuste de configuração.
