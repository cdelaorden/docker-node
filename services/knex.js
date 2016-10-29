var knex = require('knex');

function knexWrapperFactory(knexfile){
  return knex(knexfile);

}

module.exports = knexWrapperFactory;