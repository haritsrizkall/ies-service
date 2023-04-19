const { sql, config } = require('../lib/sql')

const bankRepository = {
    getBanks: () => {
        return new Promise((resolve, reject) => {
            sql.connect(config, (err) => {
                if (err) reject(err)
                const request = new sql.Request()
                request.query(
                    'SELECT * FROM [dbo].[tbMaster_Bank]',
                    (err, result) =>{
                        if (err) reject(err)
                        resolve(result)
                    }
                )
            })
        })
    }
}

module.exports = bankRepository