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
