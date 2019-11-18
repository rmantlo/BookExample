module.exports = function (sequelize, DataTypes){
    return sequelize.define('book', {
        nameOfBook: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre: {
            type: DataTypes.ENUM('Fiction', 'Non-Fiction', 'Comics', 'Cook Books'),
            allowNull: false
        },
        pubYear: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            },
            defaultValue: 1
        },
    })
}