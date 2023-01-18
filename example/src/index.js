import { contextBuilder } from "@mstream/di"
import appCreator from "./app.js"
import loggerCreator, { WARNING } from "./logger.js"

contextBuilder()
  .register(`console`, () => console)
  .register(`config`, () => ({ logLevel: WARNING }))
  .register(`logger`, loggerCreator)
  .register(`app`, appCreator)
  .build()
  .app(`Hello World!`)
