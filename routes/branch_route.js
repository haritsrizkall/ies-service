const branchRouter = require('express').Router();
const branchController = require('../controller/branch_controller');

branchRouter.get('', branchController.getBranches);

module.exports = branchRouter;
