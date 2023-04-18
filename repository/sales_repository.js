const { sql, config } = require("../lib/sql")

const salesRepository = {
    getSales: (start_date, end_date) => {
        return new Promise((resolve, reject) => {
          sql.connect(config, (err) => {
            if (err) reject(err);
            const request = new sql.Request();
            request.input('start_date', start_date);
            request.input('end_date', end_date);
            request.query(
              'select * from [dbo].[tbTr_Penjualan_R] where JLR_TGLTRN between @start_date and @end_date order by JLR_TGLTRN asc',
              (err, result) => {
                if (err) reject(err);
                resolve(result);
              }
            );
          });
        });
      },
}

module.exports = salesRepository;