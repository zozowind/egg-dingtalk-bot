'use strict';

const mock = require('egg-mock');

describe('test/dingtalk-bot.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/dingtalk-bot-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, dingtalkBot')
      .expect(200);
  });

  it('should sendText success', () => {
    return app.httpRequest()
      .get('/sendText')
      .expect(200);
  });


  it('should sendTextAt success', () => {
    return app.httpRequest()
      .get('/sendTextAt')
      .expect(200);
  });

  it('should sendTextAtAll success', () => {
    return app.httpRequest()
      .get('/sendTextAtAll')
      .expect(200);
  });

  it('should sendLink success', () => {
    return app.httpRequest()
      .get('/sendLink')
      .expect(200);
  });

  it('should sendMarkdown success', () => {
    return app.httpRequest()
      .get('/sendMarkdown')
      .expect(200);
  });

  it('should sendSingleActionCard success', () => {
    return app.httpRequest()
      .get('/sendSingleActionCard')
      .expect(200);
  });

  it('should sendBtnsActionCard success', () => {
    return app.httpRequest()
      .get('/sendBtnsActionCard')
      .expect(200);
  });

  it('should sendFeedCard success', () => {
    return app.httpRequest()
      .get('/sendFeedCard')
      .expect(200);
  });


  it('should error is at mobiles more than maxAtCount', () => {
    return app.httpRequest()
      .get('/overMaxAtCount')
      .expect(500);
  });

});

describe('test/dingtalk-multuple.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/dingtalk-multiple-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, dingtalkBot')
      .expect(200);
  });

  it('should multi sendText success', () => {
    return app.httpRequest()
      .get('/multi/sendText')
      .expect(200);
  });
});
