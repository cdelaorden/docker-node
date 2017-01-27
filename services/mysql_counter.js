function MySQLCounterServiceFactory(knex){

  function increment(){
    return updateValue().then(function(affRows){
      return getValue();
    });
  }

  function updateValue(){
    return knex('counter')
      .update({
        value: knex.raw('value + 1')
      });
  }

  function getValue(){
    return knex('counter').first('value')
      .then(function(row) {
        return row.value
      });
  }

  return {
    increment: increment
  }

}

module.exports = MySQLCounterServiceFactory;