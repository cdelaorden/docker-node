var kontainer = require('./config/kontainer');

kontainer.start('counterService');
kontainer.start('webapp');
