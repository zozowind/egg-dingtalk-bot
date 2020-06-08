# egg-dingtalk-robot

## Standing on the shoulders of giants
This plugin forked from [okoala/egg-dingtalk-robot](https://github.com/okoala/egg-dingtalk-robot)
Add Features: 
1. Add secret support
2. Add sendActionCard sendFeedCard support  

## Install
```bash
npm install egg-dingtalk-bot --save
```

## Getting Started
```javascript
// {app_root}/config/plugin.js
exports.dingtalkRobot = {
  enable: true,
  package: 'egg-dingtalk-bot',
};

// {app_root}/config/config.default.js
exports.dingtalkRobot = {
  // 机器人的accessToken
  accessToken: '',
  // 使用签名验证时需要用到的secret
  secret: '',
};

// {app_root}/app/router.js
app.get('/sendText', function* () {
  this.body = yield this.app.dingtalkRobot.sendText('测试测试！');
});
```

## API
```javascript
app.dingtalkRobot.sendText(text, opts) - send text
app.dingtalkRobot.sendTextAt(text, atMobiles, opts) - send text at mobiles
app.dingtalkRobot.sendTextAtAll(text, opts) - send text at all
app.dingtalkRobot.sendLink(link, opts) - send link
app.dingtalkRobot.sendMarkdown(markdown, opts) - send markdown
app.dingtalkRobot.sendSingleActionCard(markdown, opts) - send markdown
app.dingtalkRobot.sendBtnsActionCard(markdown, opts) - send markdown
app.dingtalkRobot.sendFeedCard(markdown, opts) - send markdown
app.dingtalkRobot.send(opts) - send raw
```

## More Information
[自定义机器人](https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7386797.0.0.dY1Qqw&treeId=257&articleId=105735&docType=1)

## Multi Robots
```javascript
// {app_root}/config/config.default.js
exports.dingtalkRobot = {
  robots: {
    testRobot1: {
      name: '测试一号',
      accessToken: ''
    },
    testRobot2: {
      name: '测试二号',
      accessToken: ''
    }
  }
};

app.get('/multi/sendText', async function () {
  this.body = await this.app.dingtalkRobot.get('testRobot1').sendText('测试测试！');
});
app.get('/multi/sendLink', async function () {
  this.body = await this.app.dingtalkRobot.get('testRobot2').sendLink({
    "text": "这个即将发布的新版本，创始人陈航（花名“无招”）称它为“红树林”。而在此之前，每当面临重大升级，产品经理们都会取一个应景的代号，这一次，为什么是“红树林”？",
    "title": "时代的火车向前开",
    "picUrl": "",
    "messageUrl": "https://www.dingtalk.com"
  });
});
```

## How to Contribute

Please let us know what we can help, check [issues](https://github.com/zozowind/egg-dingtalk-bot/issues) for bug reporting and suggestion.



