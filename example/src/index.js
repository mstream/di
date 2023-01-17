import { createContainer } from '@mstream/di'
import appCreator from './app.js'
import loggerCreator, { WARNING } from './logger.js'

createContainer()
  .register(
    `console`,
    () => console,
  )
  .register(
    `config`,
    () => ({ logLevel: WARNING }),
  )
  .register(
    `logger`,
    loggerCreator,
  )
  .register(
    `app`,
    appCreator,
  )
  .context.app(`Hello World!`)
