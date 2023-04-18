const sql = require('mssql/msnodesqlv8');

const config = {
    user: 'sa',
    password: '123456',
    server: 'MSI\\SMARTSOFT',
    database: 'dbJMS_LT1',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true,
        trustServerCertificate: true,
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
        }
    },
}

module.exports = {
    sql,
    config
}
