module.exports = {
  redis: {
    host: process.env.REDIS_HOST || 'redis',
    port: process.env.REDIS_PORT || 6379,
    counterKey: 'counter'
  },
  express: {
    host: process.env.EXPRESS_HOST,
    port: process.env.EXPRESS_PORT || 3000
  }
} 
