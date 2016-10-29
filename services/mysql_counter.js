function MySQLCounterServiceFactory(knex){

  function increment(){
    return getValue().then(({ value }) => {
      console.log('MySQL value', value);
      return updateValue(parseInt(value+1));
    });
  }

  function updateValue(x){
    console.log('updating with', x)
    return knex('counter')
      .update({
        value: x
      })
      .returning('value');
  }

  function getValue(){
    return knex('counter').first('value');
  }

  return {
    increment
  }

}

module.exports = MySQLCounterServiceFactory;