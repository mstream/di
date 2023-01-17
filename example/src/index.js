import { createContainer } from '@mstream/di'
import appCreator from './app.js'
import loggerCreator, { WARNING } from './logger.js'

const container = createContainer()

container.register(
  'console',
  () => console,
)

container.register(
  `config`,
  () => ({ logLevel: WARNING }),
)

container.register(
  `logger`,
  loggerCreator,
)

container.register(
  `app`,
  appCreator,
)

container.context.app(`Hello World!`)
