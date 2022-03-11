var Sequelize = require('sequelize');
var username = 'xxxadmin';
var password = 'xxxxx';
var host = 'xxxxx.database.windows.net';
var dbName = 'BulletinBoard';

var sequelize = new Sequelize(dbName, username, password, {
    dialect: 'mssql',
    host: host,
    port: 1433,
    dialectOptions: {
        encrypt: true
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Successful connection to SQL Server.');
    })
    .catch(err => {
        console.error('** SQL Server connection failed: ', err);
        process.exit(1);
    });

var Event = sequelize.define('event', {
    title: Sequelize.STRING,
    detail: Sequelize.STRING,
    date: Sequelize.DATE
});

Event.sync();

exports.Events = Event;