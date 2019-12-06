const db = require('./db');

const Entrada = db.sequelize.define('Entradas', {
    data: {
        type: db.Sequelize.DATE
    },
    empresa: {
        type: db.Sequelize.STRING
    },
    produto: {
        type: db.Sequelize.STRING
    },
    notaFiscal: {
        type: db.Sequelize.STRING
    },
    transportadora: {
        type: db.Sequelize.STRING
    },
    hora: {
        type: db.Sequelize.TIME
    }
});

//Entrada.sync({force: true});

module.exports = Entrada;