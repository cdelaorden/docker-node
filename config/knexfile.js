module.exports = {  
    client: 'mysql',    
    connection: {
      host: process.env.MYSQL_HOST || 'mysql',
      database: process.env.MYSQL_DATABASE || 'counter',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PWD || 's3cr3t'
    },
    pool: {
      min: process.env.KNEX_POOL_MIN ||  2,
      max: process.env.KNEX_POOL_MAX || 10
    }  
}