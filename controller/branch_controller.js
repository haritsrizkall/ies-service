const branchRepository = require('../repository/branch_repository')

const branchController = {
    getBranches: async (req, res) => {
        try {
            const branches = await branchRepository.getBranches({
                fields: "GDG_KODE as code, GDG_NAMA as name"
            });
            return res.status(200).json({
                data: branches
            });
        }catch(err) {
            return res.status(500).json(err)
        }
    }
}

module.exports = branchController