# Ionicons 4 icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/io)](https://jsr.io/@preact-icons/io)

**License** [MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE)

**Project** [https://ionicons.com/](https://ionicons.com/)

[See available icons here](https://react-icons.deno.dev/io)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.10",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/io": "jsr:@preact-icons/io@^1.0.11/mod.ts",
    "react-icons/io/": "jsr:@preact-icons/io@^1.0.11/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib io

```ts
import { IoIosAddCircleOutline } from "jsr:preact-icons/io@1.0.11/mod.ts"
```

## import_map import an icon from all icons

```ts
import { IoIosAddCircleOutline } from "react-icons/io"
```

## import a single icon, downloading just one icon

```ts
import { IoIosAddCircleOutline } from "react-icons/io/IoIosAddCircleOutline.ts"
```

or using default export

```ts
import IoIosAddCircleOutline from "react-icons/io/IoIosAddCircleOutline.ts"
```

