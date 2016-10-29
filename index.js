var kontainer = require('./config/kontainer');

var CounterService = kontainer.start('counterService');

CounterService.increment().then(console.log);
CounterService.increment().then(console.log);
CounterService.increment().then(console.log);
CounterService.increment().then(console.log);

console.log('Hello world morloquito!');