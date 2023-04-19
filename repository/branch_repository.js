const { sql, config } = require('../lib/sql')

const branchRepository = {
    getBranchs: () => {
        return new Promise((resolve, reject) => {
            sql.connect(config, (err) => {
                if (err) reject(err)
                const request = new sql.Request()
                request.query(
                    'SELECT * FROM [dbo].[tbMaster_Cabang]',
                    (err, result) =>{
                        if (err) reject(err)
                        resolve(result)
                    }
                )
            })
        })
    }
}