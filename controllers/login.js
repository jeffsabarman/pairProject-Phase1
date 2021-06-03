class Controller {

    static login(req,res){
        console.log(req.session);
        res.render('login')
    }
    static loginPost(req,res){
        req.session.loginStatus = true
        console.log(req.session.loginStatus);
        res.redirect('/')
    }
}
module.exports = Controller