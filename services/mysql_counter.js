function MySQLCounterServiceFactory(knex){

  function increment(){
    return updateValue().then((affRows) => {      
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
      .then(row => row.value);
  }

  return {
    increment
  }

}

module.exports = MySQLCounterServiceFactory;