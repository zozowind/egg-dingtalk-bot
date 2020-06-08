'use strict';

const Client = require('./client');
const Message = require('./message');
const debug = require('debug')('egg-dingtalk-robot:robot');

let robotsOpt;

function getRobot(options) {
  const client = new Client(options);
  return new Message(client, options);
}

function createDingtalkRobot(options) {
  if (options.robots) {
    robotsOpt = options.robots;
    delete options.robots;
  }

  if (robotsOpt) {
    return {
      get(robotName) {
        debug('<<<< robotName >>>>', robotName);
        debug('<<<< robotOption >>>>', robotsOpt[robotName]);

        // todo improve
        return {
          async sendText(...args) {
            const robot = getRobot(Object.assign(options, robotsOpt[robotName]));
            return await robot.sendText(...args);
          },
          async sendTextAt(...args) {
            const robot = getRobot(Object.assign(options, robotsOpt[robotName]));
            return await robot.sendTextAt(...args);
          },
          async sendTextAll(...args) {
            const robot = getRobot(Object.assign(options, robotsOpt[robotName]));
            return await robot.sendTextAll(...args);
          },
          async sendLink(...args) {
            const robot = getRobot(Object.assign(options, robotsOpt[robotName]));
            return await robot.sendLink(...args);
          },
          async sendMarkdown(...args) {
            const robot = getRobot(Object.assign(options, robotsOpt[robotName]));
            return await robot.sendMarkdown(...args);
          },
          async sendSingleActionCard(...args) {
            const robot = getRobot(Object.assign(options, robotsOpt[robotName]));
            return await robot.sendSingleActionCard(...args);
          },
          async sendBtnsActionCard(...args) {
            const robot = getRobot(Object.assign(options, robotsOpt[robotName]));
            return await robot.sendBtnsActionCard(...args);
          },
          async sendFeedCard(...args) {
            const robot = getRobot(Object.assign(options, robotsOpt[robotName]));
            return await robot.sendFeedCard(...args);
          },
          async send(...args) {
            const robot = getRobot(Object.assign(options, robotsOpt[robotName]));
            return await robot.send(...args);
          },
        };
      },
    };
  }

  return getRobot(options);
}

module.exports = createDingtalkRobot;
