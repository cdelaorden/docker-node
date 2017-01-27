var kontainer = require('./config/kontainer');
global.Promise || (global.Promise = require('bluebird'))
//kontainer.start('counterService');
kontainer.start('webapp');
