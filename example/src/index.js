import { createContainer } from '@mstream/di'
import appCreator from './app.js'
import loggerCreator, { WARNING } from './logger.js'

const container = createContainer()

container.register(
  `console`,
  () => console,
).register(
  `config`,
  () => ({ logLevel: WARNING }),
).register(
  `logger`,
  loggerCreator,
).register(
  `app`,
  appCreator,
)

container.context.app(`Hello World!`)
