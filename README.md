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

[中文文档](./README.zh_CN.md)

## Standing on the shoulders of giants
This plugin forked from [okoala/egg-dingtalk-robot](https://github.com/okoala/egg-dingtalk-robot)
Add Features: 
1. Add secret support
2. Add sendActionCard sendFeedCard support
3. v3.0.0 support egg ^2.16.0

## Install
```bash
npm install egg-dingtalk-bot --save
```

## Getting Started
```javascript
// {app_root}/config/plugin.js
exports.dingtalkBot = {
  enable: true,
  package: 'egg-dingtalk-bot',
};

// {app_root}/config/config.default.js
exports.dingtalkBot = {
  name: '',
  // 机器人的accessToken
  accessToken: '',
  // 使用签名验证时需要用到的secret
  secret: '',
};

// {app_root}/app/router.js
app.get('/sendText', function* () {
  this.body = yield this.app.dingtalkBot.sendText('this is a test message!');
});
```
see [config/config.default.js](config/config.default.js) for more detail.

## API
```javascript
app.dingtalkBot.sendText(text, opts) - send text
app.dingtalkBot.sendTextAt(text, atMobiles, opts) - send text at mobiles
app.dingtalkBot.sendTextAtAll(text, opts) - send text at all
app.dingtalkBot.sendLink(link, opts) - send link
app.dingtalkBot.sendMarkdown(markdown, opts) - send markdown
app.dingtalkBot.sendSingleActionCard(markdown, opts) - send Single ActionCard
app.dingtalkBot.sendBtnsActionCard(markdown, opts) - send ActionCard with btns
app.dingtalkBot.sendFeedCard(markdown, opts) - send FeedCard
app.dingtalkBot.send(opts) - send raw
```

## More Information
[customer robot(dingtalk docs)](https://ding-doc.dingtalk.com/doc#/serverapi2/qf2nxq)

## Multi Robots
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
  this.body = await this.app.dingtalkBot.get('bot1').sendText('this is a test');
});
app.get('/multi/sendLink', async function () {
  this.body = await this.app.dingtalkBot.get('bot2').sendLink({
    "text": "this is a link text",
    "title": "this is a link title",
    "picUrl": "",
    "messageUrl": "https://www.dingtalk.com"
  });
});
```

## Questions & Suggestions

Please let us know what we can help, check [issues](https://github.com/zozowind/egg-dingtalk-bot/issues) for bug reporting and suggestion.

## License

[MIT](LICENSE)
