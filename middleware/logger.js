const logger = (req,res,next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(url, method, time, "<<<<<<<<<<<LOGGER");
    next()
}

module.exports = logger