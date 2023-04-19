const Joi = require('joi')
const bankRepository = require('../repository/bank_repository')

const bankController = {
    getBank: async (req, res) => {
        try {
            const banks = await bankRepository.getBanks()
            return res.status(200).json(banks)
        }catch(err) {
            return res.status(500).json(err)
        }
    }
}

module.exports = bankController