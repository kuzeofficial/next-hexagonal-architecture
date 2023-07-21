# ✨ Hexagonal Architecture using [NextJS](https://beta.nextjs.org/docs)

## 🚀 Project Structure

```
/
├── public/
|   └── favicon.svg
|   └── images
├── src/
|   └── e2e
|   |   └── tests/
|   |   |   └── app.cy.ts
|   |   └── support/
|   └── types-env.d.ts
|   ├── styles/
|   |   └── globals.css
|   ├── app/
|   |   └── page.tsx
|   |   └── layout.tsx
|   |   └── error.tsx
|   |   └── loading.tsx
|   |   └── [optional]- head.tsx
|   |   └── [module-name]/
|   |   |   └── page.tsx
|   |   |   └── layout.tsx
|   |   |   └── error.tsx
|   |   |   └── [optional]- head.tsx
|   |   |   └── [sub-module]/
|   ├── modules/
|   |   └── [module-name]
|   |   |   └── application
|   |   |   └── domain
|   |   |   └── infrastructure
|   |   |   |   └── tests
|   |   |   |   |   └── e2e
|   ├── sections/
|   |   ├── [module-name]/
|   |   |   └── components
|   |   |   |   └── CardExample
|   |   |   |   |   └── tests
|   |   |   |   |   └── index.ts
|   |   |   |   |   └── CardComponent.tsx
|   |   |   └── context
|   |   |   |   └── index.ts
|   |   |   |   └── CardContext.tsx
|   |   |   └── hooks
|   |   |   |   └── index.ts
|   |   |   |   └── useCardHook.ts
└── package.json
└── tsconfig.json
└── next.config.js
```
## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :----------------------| :------------------------------------------------- |
| `yarn install`         | Installs dependencies                              |
| `yarn dev`             | Starts local dev server at `localhost:3000`        |
| `yarn build`           | Build your production site to `./.next/`            |
| `yarn preview`         | Preview your build locally, before deploying       |


## ⭐ Contribute

Please leave a star if you liked the repo and also feel free to do some PR
