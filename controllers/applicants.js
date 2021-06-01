const {Applicant, Interviewer} = require('../models/index')

class Controller {

    static showApplicants(req,res){
        Applicant.findAll({
            include: Interviewer
        })
        .then((data) => {
            
            res.render('applicants', {data})
        })
    }
    static add(req,res){
        res.render('applicantAdd')
    }
    static addPost(req,res){
    //    console.log(req.body);
    const newData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email:req.body.email, 
        birth_date:req.body.birth_date,
        position: req.body.position,
        gender: req.body.gender 
    }
    Applicant.create(newData, {})
        .then(() => {
            res.redirect('/applicants')
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static edit(req,res) {
        const id = +req.params.id
        
        Applicant.findByPk(id)
        .then(data => {
            res.render('applicantEdit', {data});
        })
        .catch(err => {
            res.send(err);
        })
    }
    static editPost(req,res){
        const id = +req.params.id;
        console.log(req.body);
        const newData = {
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            birth_date : new Date(req.body.birth_date.toLocaleString().substring(0, 9)),
            email : req.body.email,
            gender : req.body.gender,
            position: req.body.position
        }
        Applicant.update(newData, {
            where: {
                id: id
            }
        })
        .then(() => {
            res.redirect('/applicants')
        })
        .catch((err) => {
            res.send(err)
        })
    }
    static delete(req,res){
        const id = +req.params.id;
        Applicant.destroy({
            where : {
                id
            }
        })
        .then(() => {
            res.redirect('/applicants');
        })
        .catch(err => {
            res.send(err);
        })
    }
    static scheduling(req,res){
        const id = +req.params.id;
        let dataApplicant = {}
        Applicant.findByPk(id, {include: Interviewer})
        .then(data => {
            dataApplicant = data
            return Interviewer.findAll()
        })
        .then((interviewer) => {
            res.render('interviewSchedule', {data:dataApplicant, interviewer})
        })
    }
        
}
module.exports = Controller