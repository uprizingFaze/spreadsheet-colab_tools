# Editor de hojas de calculo

### Repo de la Hackathon Del Dev

<img src="https://www.colabtools.online/spreadsheet.png"  alt="Herramienta de colaboracion en linea" />




#### Documentacion del proyecyto
- [Docs](https://docs.colabtools.online/)


### Estructura del proyecto

```
└── 📁spreadsheet-colab_tools
    └── .envrc
    └── .gitignore
    └── .prettierrc
    └── README.md
    └── babel.config.js
    └── next.config.js
    └── package-lock.json
    └── package.json
    └── 📁public
        └── icon.svg
    └── 📁src
        └── 📁components
            └── Avatar.module.css
            └── Avatar.tsx
            └── Cell.module.css
            └── Cell.tsx
            └── DropdownMenu.module.css
            └── DropdownMenu.tsx
            └── Headers.module.css
            └── Headers.tsx
            └── Sheet.module.css
            └── Sheet.tsx
            └── Tooltip.module.css
            └── Tooltip.tsx
        └── constants.ts
        └── icons.tsx
        └── liveblocks.config.ts
        └── 📁pages
            └── _app.tsx
            └── 📁api
                └── liveblocks-auth.ts
            └── index.module.css
            └── index.tsx
        └── 📁spreadsheet
            └── index.ts
            └── 📁interpreter
                └── index.ts
                └── interpreter.test.ts
                └── parser.ts
                └── tokenizer.ts
                └── utils.ts
            └── react.ts
            └── utils.ts
        └── 📁styles
            └── globals.css
        └── types.ts
        └── 📁utils
            └── appendUnit.ts
            └── canUseHotkeys.ts
            └── clamp.ts
            └── getIndexWithProperty.ts
            └── globalCursor.ts
            └── isNumerical.ts
            └── shuffle.ts
            └── useInitialRender.ts
    └── tsconfig.json
```

#### Comenzar:

#####  Clonar el repositorio:

```bash
git clone https://github.com/uprizingFaze/spreadsheet-colab_tools.git
cd spreadsheet-colab_tools
```

#####  Instalación de dependencias:


```bash
npm install
```

##### Ejectute el servidor de desarrollo:


```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```
