// const session = require("express-session")
const loginCheck = (req,res, next) => {

    if (req.session.loginStatus ) {
       
        next()
    }
   
    else {
        console.log(req.session.loginStatus, "status");
        res.redirect('/login')
        next()
    }
   
}
module.exports = loginCheck