/*******
 * @Author: caokai 2217949080@qq.com
 * @Date: 2024-07-17 10:50:59
 * @LastEditors: caokai 2217949080@qq.com
 * @LastEditTime: 2024-07-17 10:51:02
 * @FilePath: /manager-server/utils/log4j.js
 * @Description:日志存储
 * @Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const log4js = require('log4js')

const levels = {
  trace: log4js.levels.TRACE,
  debug: log4js.levels.DEBUG,
  info: log4js.levels.INFO,
  warn: log4js.levels.WARN,
  error: log4js.levels.ERROR,
  fatal: log4js.levels.FATAL
}

log4js.configure({
  appenders: {
    console: {
      type: 'console'
    },
    info: {
      type: 'file',
      filename: 'logs/all_logs.log'
    },
    error: {
      type: 'dateFile',
      filename: 'logs/log',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true //设置文件名称为 filename+pattern 组合器
    }
  },
  categories: {
    default: { appenders: ['console'], level: 'debug' },
    error: {
      appenders: ['error', 'console'],
      level: 'error'
    },
    info: {
      appenders: ['info', 'console'],
      level: 'info'
    }
  }
})
/*******
 * @description: debug的日志输出 level 为 debug
 * @param {String} content
 * @return {*}
 */
exports.debug = content => {
  let logger = log4js.getLogger()
  logger.level = levels.debug
  logger.debug(content)
}
/*******
 * @description: error level 为 error
 * @param {String} content
 * @return {*}
 */
exports.error = content => {
  let logger = log4js.getLogger('error')
  logger.level = levels.error
  logger.error(content)
}
/*******
 * @description: info level 为 info
 * @param {String} content
 * @return {*}
 */
exports.info = content => {
  let logger = log4js.getLogger('info')
  logger.level = levels.info
  logger.info(content)
}
