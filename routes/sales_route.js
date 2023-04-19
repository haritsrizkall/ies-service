const salesRouter = require('express').Router();
const salesController = require('../controller/sales_controller')

salesRouter.get('', salesController.getSales);

module.exports = salesRouter;