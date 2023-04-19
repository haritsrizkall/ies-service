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
            'SELECT JLR_KODECABANG, JLR_TGLTRN, GDG_NAMA, SUM(JLR_SJLH_GROSS) as GROSS FROM [dbo].[tbTr_Penjualan_R] JOIN tbMaster_Cabang on tbMaster_Cabang.GDG_KODE = tbTr_Penjualan_R.JLR_KODECABANG WHERE JLR_TGLTRN BETWEEN @start_date AND @end_date AND JLR_KODECABANG IN (@branch_codes) GROUP BY JLR_KODECABANG, JLR_TGLTRN, GDG_NAMA ORDER BY JLR_TGLTRN DESC',
            (err, result) => {
              if (err) reject(err);
              resolve(result.recordset);
            }
          );
        } else {
          request.query(
            'SELECT JLR_KODECABANG, JLR_TGLTRN, GDG_NAMA, SUM(JLR_SJLH_GROSS) as GROSS FROM [dbo].[tbTr_Penjualan_R] JOIN tbMaster_Cabang on tbMaster_Cabang.GDG_KODE = tbTr_Penjualan_R.JLR_KODECABANG WHERE JLR_TGLTRN BETWEEN @start_date AND @end_date GROUP BY JLR_KODECABANG, JLR_TGLTRN, GDG_NAMA ORDER BY JLR_TGLTRN DESC',
            (err, result) => {
              if (err) reject(err);
              resolve(result.recordset);
            }
          );
        }
      });
    });
  },

}

module.exports = salesRepository;