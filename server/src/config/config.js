module.exports = {
    port: process.env.PORT || 3000,
    db: {
        database: process.env.DB_NAME || 'rmusic',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'n@k123seng',
        options: {
            dialect: process.env.DIALECT || 'mysql',
            host: process.env.HOST || 'localhost',
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET_TOKEN || 'rathanak'
    }
}
