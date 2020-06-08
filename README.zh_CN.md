# egg-dingtalk-bot

[![NPM version][npm-image]][npm-url]
<!-- [![build status][travis-image]][travis-url] -->
<!-- [![Test coverage][codecov-image]][codecov-url] -->
[![David deps][david-image]][david-url]
<!-- [![Known Vulnerabilities][snyk-image]][snyk-url] -->
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-dingtalk-bot.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-dingtalk-bot
<!-- [travis-image]: https://img.shields.io/travis/zozowind/egg-dingtalk-bot.svg?style=flat-square
[travis-url]: https://travis-ci.org/zozowind/egg-dingtalk-bot -->
<!-- [codecov-image]: https://img.shields.io/codecov/c/github/zozowind/egg-dingtalk-bot.svg?style=flat-square
[codecov-url]: https://codecov.io/github/zozowind/egg-dingtalk-bot?branch=master -->
[david-image]: https://img.shields.io/david/zozowind/egg-dingtalk-bot.svg?style=flat-square
[david-url]: https://david-dm.org/zozowind/egg-dingtalk-bot
<!-- [snyk-image]: https://snyk.io/test/npm/egg-dingtalk-bot/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-dingtalk-bot -->
[download-image]: https://img.shields.io/npm/dm/egg-dingtalk-bot.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-dingtalk-bot

[English Document](./README.md)

## 站在巨人的肩膀
本插件 forked from [okoala/egg-dingtalk-robot](https://github.com/okoala/egg-dingtalk-robot)
添加功能 
1. 增加secret支持
2. 增加发送动作卡片和信息流卡片支持
3. 版本3.0.0 支持egg ^2.16.0

## 安装
```bash
npm install egg-dingtalk-bot --save
```

## 快速开始
```javascript
// 激活插件
// {app_root}/config/plugin.js
exports.dingtalkBot = {
  enable: true,
  package: 'egg-dingtalk-bot',
};

// 配置插件参数
// {app_root}/config/config.default.js
exports.dingtalkBot = {
  name: '',
  // 机器人的accessToken
  accessToken: '',
  // 使用签名验证时需要用到的secret
  secret: '',
};

// 测试应用
// {app_root}/app/router.js
app.get('/sendText', function* () {
  this.body = yield this.app.dingtalkBot.sendText('测试测试！');
});
```
配置项详见 [config/config.default.js](config/config.default.js) 

## API
```javascript
app.dingtalkBot.sendText(text, opts) - send text
app.dingtalkBot.sendTextAt(text, atMobiles, opts) - send text at mobiles
app.dingtalkBot.sendTextAtAll(text, opts) - send text at all
app.dingtalkBot.sendLink(link, opts) - send link
app.dingtalkBot.sendMarkdown(markdown, opts) - send markdown
app.dingtalkBot.sendSingleActionCard(markdown, opts) - send markdown
app.dingtalkBot.sendBtnsActionCard(markdown, opts) - send markdown
app.dingtalkBot.sendFeedCard(markdown, opts) - send markdown
app.dingtalkBot.send(opts) - send raw
```

## 更多信息
[自定义机器人（钉钉文档）](https://ding-doc.dingtalk.com/doc#/serverapi2/qf2nxq)

## 多个机器人配置及使用
```javascript
// {app_root}/config/config.default.js
exports.dingtalkBot = {
  robots: {
    bot1: {
      name: 'bot1',
      accessToken: ''
    },
    bot2: {
      name: 'bot2',
      accessToken: ''
    }
  }
};

app.get('/multi/sendText', async function () {
  this.body = await this.app.dingtalkBot.get('bot1').sendText('测试测试！');
});
app.get('/multi/sendLink', async function () {
  this.body = await this.app.dingtalkBot.get('bot2').sendLink({
    "text": "测试连接文字",
    "title": "测试连接title",
    "picUrl": "",
    "messageUrl": "https://www.marcotalk.com"
  });
});
```

## 问题和建议

 提交[问题和建议](https://github.com/zozowind/egg-dingtalk-bot/issues) ，不胜感激

## License

[MIT](LICENSE)
