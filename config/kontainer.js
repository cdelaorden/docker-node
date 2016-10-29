var kontainer = require('kontainer-di');
var knexConfig = require('./knexfile');
var knex = require('knex')(knexConfig);
var appConfig = require('./app.config');

//config
kontainer.register('redisConfig', [], appConfig.redis);
kontainer.register('expressConfig', [], appConfig.express);
kontainer.register('knexConfig', [], knexConfig);

//infrastructure
kontainer.register('knex', ['knexConfig'], require('../services/knex'));
kontainer.register('redis', [], require('redis'));

//app services
kontainer.register('counterService', ['redisConfig', 'redis'], require('../services/counter'));

//app microservices


module.exports = kontainer;