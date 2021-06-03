class Controller {

    static login(req,res){
        const notAdmin = req.query.notAdmin; 
        res.render('login', {notAdmin})
    }
    static loginPost(req,res){
        if (req.body.username === "admin" && req.body.password === "admin") {
            req.session.loginStatus = true
            res.redirect('/')
        } else {
            res.redirect('/login?notAdmin=Wrong Username Or Password');
        }
    }
}
module.exports = Controller