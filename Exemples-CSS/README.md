# Exercices Industrialisation Front-End

## Modules

Dans `api.js` exporter en ESM les fonctions `fetchTodos` et `postTodo`

Dans `todos.js` exporter en ESM la fonction `createTodoItem`

Dans `main.js` importer ces 3 fonctions des 2 fichiers.

Dans `index.html` ne charger que le fichier `main.js` avec l'attribut `type="module"`

## Bundler

Installer `vite` en `devDependencies`

Créer 3 scripts :

- `dev` qui appelle le dev server `vite`
- `build` qui lance `vite build`
- `preview` qui lance `vite preview` (sert le résultat du build)

Déplacer le fichier `index.html` à la racine et c'est terminé.

Remarquez que le CSS a également été buildé.

Dans `api.js` remplacer la variable `apiBaseUrl` par un import du fichier `config.json` (qui contient la même valeur), exemple : [https://esbuild.github.io/content-types/#json](https://esbuild.github.io/content-types/#json)

## TypeScript

Installer `typescript` en `devDependencies`

Générer la config `tsconfig.json` via la commande `npx tsc --init`

Modifier le script `build` pour qu'il lance la commande `tsc --noEmit` avant d'appeler `vite build`

Renommer les fichiers `api.js`, `main.js` et `todos.js` avec l'extension `.ts`

Dans `api.ts` créer et exporter 2 types :

- `Todo` (interface avec 3 clés `id`, `title` et `completed`)
- `TodoWithoutId` (interface avec 2 clés `title` et `completed`)

Ces interfaces remplacent les commentaires JSDoc (`/** @typedef ...`)

Typer les paramètres d'entrées et de retour des fonction comme dans les commentaires JSDoc.

Dans `createTodoItem` convertir `todo.id` en type string au moment de l'affecter à `divEl.dataset.todoId` :

```ts
divEl.dataset.todoId = String(todo.id);
```

Dans `main.ts` transformer les commentaires JSDOC `/** @type ...` par des "type assertions", exemple :

```js
/** @type {HTMLFormElement} */
const formEl = document.querySelector(".todo-form");
```

deviendra 

```ts
const formEl = document.querySelector(".todo-form") as HTMLFormElement;
```

Dans `main.ts` transformer les lignes :

```js
spanEl.innerText = inputEl.value;
```

en 

```ts
spanEl.innerText = (inputEl as HTMLInputElement).value;
```

et la ligne :

```js
target.closest(".todo-item").remove();
```

en

```ts
target.closest(".todo-item")?.remove();
```
