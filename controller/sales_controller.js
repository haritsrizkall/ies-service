const Joi = require('joi');
const salesRepository = require('../repository/sales_repository')
const getSalesSchema = Joi.object({
    start_date: Joi.date().required(),
    end_date: Joi.date().required(),
    branch_codes: Joi.string().regex(new RegExp("^\\d{4}(,\\d{4})*$"))
});


const salesController = {
    getSales: async (req, res) => {
        try {
            const query = req.query;
            const value = await getSalesSchema.validateAsync(query, {
                abortEarly: false
            });
            const result = await salesRepository.getSales(value.start_date, value.end_date, value.branch_codes);
            return res.status(200).json({
                data: result
            });
        }catch(err) {
            return res.status(500).json(err)
        }
    }
}

module.exports = salesController