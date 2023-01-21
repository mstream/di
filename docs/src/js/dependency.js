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
