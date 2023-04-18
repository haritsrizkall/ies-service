const salesRouter = require('express').Router();
const Joi = require('joi');
const salesService = require('../services/sales_service');
const getSalesSchema = Joi.object({
    start_date: Joi.date().required(),
    end_date: Joi.date().required(),
    branch_codes: Joi.string()
});

salesRouter.get('', async (req, res) => {
    try {
        const query = req.query;
        const value = await getSalesSchema.validateAsync(query, {
            abortEarly: false
        });
        const result = await salesService.getSales(value.start_date, value.end_date, value.branch_codes);
        return res.status(200).json(result);
    }catch(err) {
        return res.status(500).json(err)
    }
});

module.exports = salesRouter;