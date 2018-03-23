module.exports = {
    server: {
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'localhost'
    },
    database: {
        username: process.env.MYSQL_USER,
        name: process.env.MYSQL_DATABASE,
        password: process.env.MYSQL_PASSWORD,
        options: {
            host: process.env.MYSQL_HOST,
            port: process.env.MYSQL_PORT || 3306,
            dialect: 'mysql',
            logging: console.log,
            freezeTableName: true,
            define: {
                timestamps: false
            },
            pool: {
                max: 9,
                min: 0,
                idle: 10000
            }
        }
    },
    authSecret:'super_secret_word'
}