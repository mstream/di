import { ContextBuilder } from "@mstream/di"
import appCreator from "./app.js"
import loggerCreator, { WARNING } from "./logger.js"

new ContextBuilder()
  .register(`console`, () => console)
  .register(`config`, () => ({ logLevel: WARNING }))
  .register(`logger`, loggerCreator)
  .register(`app`, appCreator)
  .build()
  .app(`Hello World!`)
