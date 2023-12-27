const db = require('../models/index');
const user = require('../models/user');

class homeController {
    static async getHomePage(req, res) {
        try {
            let data = await db.User.findAll();
            console.log('---------------')
            console.log(data)
            res.render('homePage.ejs', {
                data: JSON.stringify(data)
            })
        } catch (error) {
            console.log(error)
        }
    }
    static async getEjs(req, res) {
        res.render('sample.ejs');
    }
}
exports.homeController = homeController;