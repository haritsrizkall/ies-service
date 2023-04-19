const bankRouter = require('express').Router();
const bankController = require('../controller/bank_controller')

bankRouter.get('', bankController.getBank)

module.exports = bankRouter