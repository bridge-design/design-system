# Bridge-the-Gap Design System

## Scripts

- `yarn tokens` - rebuilds token files.
- `yarn start` - starts storybook development server at <https://localhost:6006>.
- `yarn add-component <ComponentName>` - adds template files for new component
- `yarn build` - builds components library into `dist/` folder.
- `yarn storybook:build` - builds storybook into `storybook-static/` folder.
- `yarn version` - bumps library version and creates a commit with contents of `dist/` folder.
- `yarn test` - run tests with [creevey](https://github.com/wKich/creevey)
- `yarn test:ui` - run creevey with UI
- `yarn test:update` - update all screenshots for creevey

## Rules on className usage

Almost all components have className API which allows quickly set custom margins and positioning for the elements. It's important to have an agreement on className separation and determine what can be used in component library and what - on the project side. While most classes should belong to component itself, there are few which should not be used in the top element of component which has className API (list to be upated):

- __margin:__ `m-2`, `mx-auto`, `m-4` etc..
- __align-self:__ `self-auto`, `self-stretch`...
- __width:__ `w-1/2`, `w-full`, `w-16`..

It's ok to use this classes inside the components (not on the wrapper), or if you are creating a component which is not supposed to be modified or positioned, and doesn't need className prop.

## Setting up semantic-release locally.

```
npx semantic-release-cli setup
```

- For CI, choose option __Other (prints tokens)__
- Copy tokens into local .env file, and load them locally
- Make sure you have 2FA authentication enabled


Release via Github actions

- To skip CI jobs, add to commit message keyword `[skip-ci]` (with brackets)
- You can run yarn semantic-release` locally to check for version and changelog. However make sure that the branch you are on has a remote, otherwise semantic release will fail.