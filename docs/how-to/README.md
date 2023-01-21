# How-to guides

## Make a function depend on an injectable value

<!-- CODEBLOCK_START
  {
    "hideValue": true,
    "type": "file",
    "value": "../src/js/dependency.js"
  }
-->
<!-- prettier-ignore -->
~~~~~~~~~~js
import { ContextBuilder } from "@mstream/di"

const englishGreeting = "Hello"

new ContextBuilder()
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
    "value": "node src/js/dependency.js"
  }
-->
<!-- prettier-ignore -->
~~~~~~~~~~bash
Hello John!
~~~~~~~~~~

<!-- CODEBLOCK_END -->

## Build the context eagerly

<!-- CODEBLOCK_START
  {
    "hideValue": true,
    "type": "file",
    "value": "../src/js/eager.js"
  }
-->
<!-- prettier-ignore -->
~~~~~~~~~~js
import { ContextBuilder } from "@mstream/di"

console.info("Before the context is built.")

const context = new ContextBuilder()
  .register("dependency", () => {
    console.info("Dependency initialization.")
    return () => console.info("Dependency execution.")
  })
  .build({ eagerly: true })

console.info("After the context was built.")

context.dependency()

console.info("After the dependency was called.")
~~~~~~~~~~

<!-- CODEBLOCK_END -->

<!-- CODEBLOCK_START
  {
    "hideValue": true,
    "type": "command",
    "value": "node src/js/eager.js"
  }
-->
<!-- prettier-ignore -->
~~~~~~~~~~bash
Before the context is built.
Dependency initialization.
After the context was built.
Dependency execution.
After the dependency was called.
~~~~~~~~~~

<!-- CODEBLOCK_END -->

### When would you want to build your context eagerly?

- to reveal initialization problems sooner
- when dependencies take long time to initialize
