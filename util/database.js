const Sequelize = require('sequelize');

const sequelize = new Sequelize('anilbd','root','Anil@1233', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize; 