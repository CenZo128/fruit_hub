

class ItemController {
    static async getAll(req,res){
        res.status(200).json({test:"test"})
    }
}

module.exports = ItemController