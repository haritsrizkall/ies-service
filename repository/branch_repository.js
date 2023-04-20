const { sql, config } = require('../lib/sql')

const branchRepository = {
    getBranches: ({
        fields
    }) => {
        return new Promise((resolve, reject) => {
            sql.connect(config, (err) => {
                if (err) reject(err)
                const request = new sql.Request()
                if (!fields) fields = '*'
                const queryStr = `SELECT ${fields} FROM [dbo].[tbMaster_Cabang]`
                request.query(
                    queryStr,
                    (err, result) =>{
                        if (err) reject(err)
                        resolve(result.recordset)
                    }
                )
            })
        })
    }
}

module.exports = branchRepository