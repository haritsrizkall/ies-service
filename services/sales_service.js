const salesRepository = require('../repository/sales_repository');

const salesService = {
    getSales: (start_date, end_date) => {
        return new Promise((resolve, reject) => {
            salesRepository.getSales(start_date, end_date)
            .then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }
}

module.exports = salesService;