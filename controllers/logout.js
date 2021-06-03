
class Controller {
    
    static logout(req,res) {
        req.session.destroy();
        res.redirect('/');
    }
}

module.exports = Controller;