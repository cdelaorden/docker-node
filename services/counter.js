const CounterServiceFactory = function(redisConfig, redis){
  let _isReady = false,
      client;
      
  function start(){    
    client = redis.createClient(redisConfig.port, redisConfig.host);

    client.on('connect', () => {
      console.log('Redis client connected!');
      _isReady = true;
    });
    client.on('disconnect', () => {
      _isReady = false;
    });
    
  }

  function stop(){
    if(_isReady){
      client.quit();
    }
  }

  function increment(){
    return new Promise(function(resolve, reject){
      client.incr(redisConfig.counterKey, (err, counter) => {
        return err ? reject(err) : resolve(counter);
      });
    });
  }

  function getCounter(){
    return new Promise(function(resolve, reject){
      client.get(redisConfig.conterKey, (err, counter) => {
        return err ? reject(err) : resolve(counter);
      });
    });
  }

  return {
    start,
    stop,
    increment,
    getCounter
  }

}

module.exports = CounterServiceFactory;