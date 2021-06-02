const loginCheck = (req,res, next) => {

    if (!req.session.loginStatus ) {
        res.redirect('/login')
        next()
    }
   
    else  next()
   
}
module.exports = loginCheck