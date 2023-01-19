# How-to guides

## Make a function depend on an injectable value

<!-- CODEBLOCK_START
  {
    "hideValue": true,
    "type": "file",
    "value": "src/dependency.js"
  }
-->
<!-- prettier-ignore -->
~~~~~~~~~~js
import { contextBuilder } from "@mstream/di"

const englishGreeting = "Hello"

contextBuilder()
  .register("greeting", () => englishGreeting)
  .register(
    "hello",
    ({ greeting }) =>
      (name) =>
        console.info(`${greeting} ${name}!`),
  )
  .build()
  .hello("John")
~~~~~~~~~~

<!-- CODEBLOCK_END -->

<!-- CODEBLOCK_START
  {
    "hideValue": true,
    "type": "command",
    "value": "node src/dependency.js"
  }
-->
<!-- prettier-ignore -->
~~~~~~~~~~bash
Hello John!
~~~~~~~~~~

<!-- CODEBLOCK_END -->
