'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/sendText', controller.home.sendText);
  router.get('/sendTextAt', controller.home.sendTextAt);
  router.get('/sendTextAtAll', controller.home.sendTextAtAll);
  router.get('/sendLink', controller.home.sendLink);
  router.get('/sendMarkdown', controller.home.sendMarkdown);
  router.get('/sendSingleActionCard', controller.home.sendSingleActionCard);
  router.get('/sendBtnsActionCard', controller.home.sendBtnsActionCard);
  router.get('/sendFeedCard', controller.home.sendFeedCard);
  router.get('/overMaxAtCount', controller.home.overMaxAtCount);
};
