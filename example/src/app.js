export default ({ logger }) => (message) => {
  logger.debug(message)
  logger.error(message)
  logger.info(message)
  logger.warning(message)
}
