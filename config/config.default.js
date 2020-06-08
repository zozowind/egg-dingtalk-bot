'use strict';

/**
 * egg-dingtalk-bot default config
 * @member Config#dingtalkBot
 * @property {String} accessToken - token
 * @property {String} secret - 签名秘钥
 */
exports.dingtalkBot = {
  host: 'https://oapi.dingtalk.com',
  api: '/robot/send',
  maxAtCount: 5, // 目前发现钉钉一次最多只能at5人
  requestOpts: {
    timeout: 10000,
  },
  // 机器人的accessToken
  accessToken: '',
  secret: '',
};
