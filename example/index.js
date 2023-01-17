import { createContainer } from 'di'
import loggerCreator, { WARNING } from './logger.js'

const container = createContainer()

container.register('config', () => ({ logLevel: WARNING }))
container.register('logger', loggerCreator)

container.register('app', ({ logger }) => {
  logger.debug('this is error log')
  logger.error('this is error log')
  logger.info('this is info log')
  logger.warning('this is warning log')
})

container.context.app
