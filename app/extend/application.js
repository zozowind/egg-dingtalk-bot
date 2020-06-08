'use strict';

const DINGTALKBOT = Symbol('Application#dingtalkBot');
const createDingtalkBot = require('../../lib/robot');

module.exports = {
  /**
   * dingtalk
   * @member Application#dingtalk
   */
  get dingtalkBot() {
    if (!this[DINGTALKBOT]) {
      const options = Object.assign({}, this.config.dingtalkBot);
      options.urllib = this.httpclient;
      this[DINGTALKBOT] = createDingtalkBot(options);
    }
    return this[DINGTALKBOT];
  },
};
