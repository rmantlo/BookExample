const Sequelize = require('sequelize');

const sequelize = new Sequelize('BookApi', 'postgres', process.env.PASS, {
    host: 'localhost',
    dialect: 'postgres'
})
sequelize.authenticate().then(
    function () {
        console.log('my dudes')
    },
    function (err) {
        console.log(err)
    }
)

module.exports = sequelize;