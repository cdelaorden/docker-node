module.exports = {  
    client: 'mysql',
    connection: {
      host: process.env.MYSQL_HOST || 'db',
      database: process.env.MYSQL_DB || 'counter',
      user: process.env.MYSQL_USER || 'web',
      password: process.env.MYSQL_PWD || 'web'
    },
    pool: {
      min: process.env.KNEX_POOL_MIN ||  2,
      max: process.env.KNEX_POOL_MAX || 10
    }  
}