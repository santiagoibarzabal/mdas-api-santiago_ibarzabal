# Pokemon DDD Project.

## Tools

- [TypeScript](https://www.typescriptlang.org/) (v4)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/) with:
  - [Codely's config](https://github.com/lydell/eslint-plugin-simple-import-sort/) (includes ESLint's recommended rules, Prettier, Import plugin and more)
  - [Jest plugin](https://www.npmjs.com/package/eslint-plugin-jest)
- [Jest](https://jestjs.io) with [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro)
- [GitHub Action workflows](https://github.com/features/actions) set up to run tests and linting on push

## Running the app

### Install dependencies

```
$ npm install
```

### Find pokemon type via cli.

```
$ npm run cli -- types --name={pokemonName}
```

### Use API REST with RabbitMQ

###### Before executing Node server, RabbitMQ container should be started.
- Start RabbitMQ docker container

  ```
  $ docker compose up -d
  ```
###### Once RabbitMQ container is up and running, Node server should be started. 
- Start server

  ```
  $ npm run dev
  ```

###### API should be working and its endpoints can be tested:

- Find pokemon type via API REST.

  On browser (GET) -> http://localhost:3000/type?pokemon_name={pokemonName}

- Find pokemon details via API REST.

  On browser (GET) -> http://localhost:3000/pokemon/{pokemonId}

- Create user via API REST.

  On Postman (POST) -> http://localhost:3000/user

  with raw JSON body:

  ```
  {
      "name": "test",
      "id": "1"
  }
  ```

- Add favourite pokemon to user via API REST.

  On Postman (PATCH) -> http://localhost:3000/user/{userId}/favourites

  with raw JSON body:

  ```
  {
      "pokemon_id": "1"
  }
  ```

## Testing

### Jest with supertest
###### NOTE: Make sure RabbitMQ image is up and running.  
```
npm run test
```

## Linting

```
# run linter
npm run lint

# fix lint issues
npm run lint:fix
```
