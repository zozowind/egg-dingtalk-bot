'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, ' + this.app.plugins.dingtalkBot.name;
  }
  async sendText() {
    this.ctx.body = await this.app.dingtalkBot.get('bot1').sendText('多个机器人测试测试！');
  }
}

module.exports = HomeController;
