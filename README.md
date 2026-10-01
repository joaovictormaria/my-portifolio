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
    Projects.jsx        # desativado em `features` (sem projetos publicados)
    Testimonials.jsx    # desativado em `features`; carrossel de 5s, pausa no hover
    About.jsx
    Faq.jsx             # acordeão
    Contact.jsx
    Footer.jsx
    ImageSlot.jsx       # placeholder de imagem (substitui o <image-slot> original)
legacy/Portfolio.html   # arquivo original, apenas para referência
```

## Editando o conteúdo

Todo o conteúdo está em [src/data/content.js](src/data/content.js): nome,
contato, textos de cada seção e perguntas frequentes.

Os campos `email`, `linkedinUrl` e `githubUrl` em `site` estão vazios de
propósito — os links e botões correspondentes só aparecem depois que forem
preenchidos.

As seções de projetos, depoimentos e FAQ são ligadas ou desligadas em
`features`. Projetos e depoimentos estão desativados por não haver conteúdo
real; para ativá-los, preencha os arrays `projects` / `testimonials` e mude a
flag.

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
