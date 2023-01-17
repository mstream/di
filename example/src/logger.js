export const DEBUG = Symbol(`logLevel/DEBUG`)
export const ERROR = Symbol(`logLevel/ERROR`)
export const INFO = Symbol(`logLevel/INFO`)
export const WARNING = Symbol(`logLevel/WARNING`)

export default ({ config: { logLevel }, console }) =>
({
  debug: log => {
    if ([DEBUG].includes(logLevel)) {
      console.info(`[DEBUG] ${log}`)
    }
  },
  error: log => {
    if ([
DEBUG,
ERROR,
INFO,
WARNING,
].includes(logLevel)) {
      console.error(`[ERROR] ${log}`)
    }
  },
  warning: log => {
    if ([
DEBUG,
INFO,
WARNING,
].includes(logLevel)) {
      console.error(`[WARNING] ${log}`)
    }
  },
  info: log => {
    if ([
DEBUG,
INFO,
].includes(logLevel)) {
      console.info(`[INFO] ${log}`)
    }
  },
})
