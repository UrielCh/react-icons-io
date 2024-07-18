# Ionicons 4 icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/io)](https://jsr.io/@preact-icons/io)

**License** [MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE)

**Project** [https://ionicons.com/](https://ionicons.com/)

[See available icons here](https://react-icons.deno.dev/io)

## install the module

```bash
deno add @preact-icons/io
dnpx jsr add @preact-icons/io
pnpm dlx jsr add @preact-icons/io
bunx jsr add @preact-icons/io
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { IoIosAddCircleOutline } from "@preact-icons/io"
```

## import a single icon, downloading just one icon

```ts
import { IoIosAddCircleOutline } from "react-icons/io/IoIosAddCircleOutline"
```

or using default export

```ts
import IoIosAddCircleOutline from "react-icons/io/IoIosAddCircleOutline.ts"
```
