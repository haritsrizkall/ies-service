const { sql, config } = require("../lib/sql")

const salesRepository = {
  getSales: (start_date, end_date, branch_codes) => {
    return new Promise((resolve, reject) => {
      sql.connect(config, (err) => {
        if (err) reject(err);
        const request = new sql.Request();
        request.input('start_date', start_date);
        request.input('end_date', end_date);
        if (branch_codes) {
          request.input('branch_codes', branch_codes);
          request.query(
            'SELECT * FROM [dbo].[tbTr_Penjualan_R] WHERE JLR_TGLTRN BETWEEN @start_date AND @end_date AND JLR_KODECABANG IN (@branch_codes) ORDER BY JLR_TGLTRN DESC',
            (err, result) => {
              if (err) reject(err);
              resolve(result);
            }
          );
        } else {
          request.query(
            'SELECT * FROM [dbo].[tbTr_Penjualan_R] WHERE JLR_TGLTRN BETWEEN @start_date AND @end_date ORDER BY JLR_TGLTRN DESC',
            (err, result) => {
              if (err) reject(err);
              resolve(result);
            }
          );
        }
      });
    });
  },

}

module.exports = salesRepository;