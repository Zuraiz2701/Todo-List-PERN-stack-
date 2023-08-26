const Pool = require('pg').Pool;

const pool = new Pool({
    user: "zuraiz",
    password: "admin",
    host: "localhost",
    port: 5432,
    database: "perntodo",
    dialect: "postgres",
    logging: false
});

module.exports = pool;