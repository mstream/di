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
