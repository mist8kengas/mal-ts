# mal-ts

TypeScript-safe MyAnimeList Public API wrapper

## Installation

```bash
# npm
npm install mal-ts

# yarn
yarn add mal-ts
```

## Usage

```js
// commonjs
const MyAnimeList = require('mal-ts');
const mal = new MyAnimeList('client_id');
...

// module
import MyAnimeList from 'mal-ts'
const mal = new MyAnimeList('client_id');
...
```

> Replace `client_id` with your MyAnimeList Application's Client ID

## API

| Method                  | Description       |
| ----------------------- | ----------------- |
| **defaultFields**       | Default fields    |
| **anime(id[, fields])** | Get anime details |
| **manga(id[, fields])** | Get manga details |

## Promises

**mal-ts** depends on a native ES6 Promise implementation to be [supported](http://caniuse.com/promises). If your environment doesn't support ES6 Promises, you can [polyfill](https://github.com/jakearchibald/es6-promise).

## TypeScript

**mal-ts** includes [TypeScript](http://typescriptlang.org/) definitions.

## License

[MIT](https://github.com/mist8kengas/mal-ts/blob/HEAD/LICENSE)
