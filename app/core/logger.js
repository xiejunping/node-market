import path from 'path'
import { createLogger, format, transports } from 'winston'

const { combine, errors, json, splat } = format
const cwd = process.cwd()

const Logger = createLogger({
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    errors({ stack: true }),
    splat(),
    json()
  ),
  defaultMeta: { service: 'node' },
  transports: [
    new transports.File({ filename: path.resolve(cwd, './bin/log/response/2019-07-11.log'), level: 'error' }),
    new transports.File({ filename: path.resolve(cwd, './bin/log/error/2019-07-11.log') })
  ]
})

export default Logger
