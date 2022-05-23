const Sequelize = require('sequelize')
const {
    dbName,
    host,
    port,
    user,
    password
} = require('../config/config').database

const sequelize = new Sequelize(dbName, user, password, {
    dialect: 'mysql',
    host: host,
    port,
    logging: true,
    timezone: '+08:00',
    defind: {
        // tiemstamps 控制是否有 create_time update_time delete_time 字段
        // timestamps: false
    },
})

sequelize.sync()

module.exports = {
    db:sequelize
}