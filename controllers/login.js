// const session = require("express-session")
class Controller {

    static login(req,res){
        console.log(req.session, "session" );
        res.render('login')
    }
    static loginPost(req,res){
        req.session.loginStatus = true
        console.log(req.session.loginStatus, "status");
        res.redirect('/')
    }
}
module.exports = Controller