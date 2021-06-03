
const loginCheck = (req,res, next) => {

    if (req.session.loginStatus ) {
       
        next()
    }
   
    else {
        console.log(req.session.loginStatus, "status");
        res.redirect('/login')
        
    }
   
}
module.exports = loginCheck