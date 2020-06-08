'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, ' + this.app.plugins.dingtalkBot.name;
  }
  async sendText() {
    this.ctx.body = await this.app.dingtalkBot.sendText('测试测试！');
  }
  async sendTextAt() {
    this.ctx.body = await this.app.dingtalkBot.sendTextAt('测试测试！', [ '13816607312' ]);
  }
  async sendTextAtAll() {
    this.ctx.body = await this.app.dingtalkBot.sendTextAtAll('测试测试！');
  }
  async sendLink() {
    this.ctx.body = await this.app.dingtalkBot.sendLink({
      text: '这个即将发布的新版本，创始人陈航（花名“无招”）称它为“红树林”。而在此之前，每当面临重大升级，产品经理们都会取一个应景的代号，这一次，为什么是“红树林”？',
      title: '时代的火车向前开',
      picUrl: '',
      messageUrl: 'https://www.marcotalk.com/',
    });
  }
  async sendMarkdown() {
    this.ctx.body = await this.app.dingtalkBot.sendMarkdown({
      title: '杭州天气',
      text: '#### 杭州天气\n' +
              '> 9度，西北风1级，空气良89，相对温度73%\n\n' +
              '> ![screenshot](https://gw.alicdn.com/tfs/TB1ut3xxbsrBKNjSZFpXXcXhFXa-846-786.png)\n' +
              '> ###### 10点20分发布 [天气](https://www.marcotalk.com/) \n',
    });
  }
  async sendSingleActionCard() {
    this.ctx.body = await this.app.dingtalkBot.sendSingleActionCard({
      title: '乔布斯 20 年前想打造一间苹果咖啡厅，而它正是 Apple Store 的前身',
      text: '![screenshot](https://gw.alicdn.com/tfs/TB1ut3xxbsrBKNjSZFpXXcXhFXa-846-786.png)\n' +
              '### 乔布斯 20 年前想打造的苹果咖啡厅\n' +
              'Apple Store 的设计正从原来满满的科技感走向生活化，而其生活化的走向其实可以追溯到 20 年前苹果一个建立咖啡馆的计划',
      btnOrientation: '0',
      singleTitle: '阅读全文',
      singleURL: 'https://www.marcotalk.com/',
    });
  }
  async sendBtnsActionCard() {
    this.ctx.body = await this.app.dingtalkBot.sendBtnsActionCard({
      title: '乔布斯 20 年前想打造一间苹果咖啡厅，而它正是 Apple Store 的前身',
      text: '![screenshot](https://gw.alicdn.com/tfs/TB1ut3xxbsrBKNjSZFpXXcXhFXa-846-786.png)\n' +
              '### 乔布斯 20 年前想打造的苹果咖啡厅\n' +
              'Apple Store 的设计正从原来满满的科技感走向生活化，而其生活化的走向其实可以追溯到 20 年前苹果一个建立咖啡馆的计划',
      btnOrientation: '0',
      btns: [
        {
          title: '内容不错',
          actionURL: 'https://www.marcotalk.com/',
        },
        {
          title: '不感兴趣',
          actionURL: 'https://www.marcotalk.com/',
        },
      ],
    });
  }
  async sendFeedCard() {
    this.ctx.body = await this.app.dingtalkBot.sendFeedCard({
      links: [
        {
          title: '时代的火车向前开',
          messageURL: 'https://www.marcotalk.com/',
          picURL: 'https://gw.alicdn.com/tfs/TB1ayl9mpYqK1RjSZLeXXbXppXa-170-62.png',
        },
        {
          title: '时代的火车向前开2',
          messageURL: 'https://www.marcotalk.com/',
          picURL: 'https://gw.alicdn.com/tfs/TB1ayl9mpYqK1RjSZLeXXbXppXa-170-62.png',
        },
      ],
    });
  }
  async overMaxAtCount() {
    this.ctx.body = await this.app.dingtalkBot.sendText('测试测试！', {
      at: {
        atMobiles: [
          '15600292322',
          '15600292322',
          '15600292322',
          '15600292322',
          '15600292322',
          '15600292322',
        ],
      },
    });
  }
}

module.exports = HomeController;
