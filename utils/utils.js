/*******
 * @Author: caokai 2217949080@qq.com
 * @Date: 2024-07-17 16:34:30
 * @LastEditors: caokai 2217949080@qq.com
 * @LastEditTime: 2024-07-17 16:34:54
 * @FilePath: /manager-server/utils/utils.js
 * @Description:通用工具函数
 * @Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const log4js = require('./log4j')
const CODE = {
  SUCCESS: 200,
  PARAM_ERROR: 10001, //参数错误
  USER_ACCOUNT_ERROR: 20001, //账号或密码错误
  USER_LOGIN_ERROR: 30001, //用户未登陆
  BUSINESS_ERROR: 40001, //业务请求失败
  AUTH_ERROR: 500001 // 认证失败或TOKEN过期
}

module.exports = {
  /*******
   * @description: 分页结构封装
   * @param {number} pageNum
   * @param {number} pageSize
   */
  pager({ pageNum = 1, pageSize = 10 }) {
    pageNum *= 1
    pageSize *= 1
    const skipIndex = (pageNum - 1) * pageSize
    return {
      page: {
        pageNum,
        pageSize
      },
      skipIndex
    }
  },
  success(data = '', msg = '', code = CODE.SUCCESS) {
    return {
      code,
      data,
      msg
    }
  },
  fail(msg = '', code = CODE.BUSINESS_ERROR) {
    log4js.debug(msg)
    return {
      code,
      msg
    }
  }
}
