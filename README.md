# Ionicons 4 icons for deno / Preact

**License** [MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE)

**Project** [https://ionicons.com/](https://ionicons.com/)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=io)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/io":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-io@1.0.1/mod.ts",
    "react-icons/io/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-io/ico/",
  }
}
```

## Direct import sample

```ts
import { IoIosAddCircleOutline } from "https://deno.land/x/react_icons_io@1.0.1/mod.ts"
```

## import_map import sample

```ts
import { IoIosAddCircleOutline } from "react-icons/io"
```

## minimal import

```ts
import { IoIosAddCircleOutline } from "react-icons/io/IoIosAddCircleOutline.ts"
```

## minimal import using default export

```ts
import IoIosAddCircleOutline from "react-icons/io/IoIosAddCircleOutline.ts"
```

