const {Applicant, Interviewer} = require('../models/index')
const calculateAge = require('../helpers/calculateAge');
const formatDate = require('../helpers/formatDate');

class Controller {

    static showInterviewers(req,res){
        Interviewer.findAll({
            include: Applicant
        })
        .then((data) => {
            
            res.render('interviewers', {data, calculateAge})
        })
        .catch((err) => {
            res.send(err)
        })
    }
    static add(req,res){
        res.render('interviewerAdd')
    }
    static addPost(req,res){
       console.log(req.body);
    const newData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email:req.body.email, 
        birth_date:req.body.birth_date,
        department: req.body.department,
        gender: req.body.gender 
    }
    Interviewer.create(newData, {})
        .then(() => {
            res.redirect('/interviewers')
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static edit(req,res) {
        const id = +req.params.id
        
        Interviewer.findByPk(id)
        .then(data => {
            res.render('interviewerEdit', {data});
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
            // birth_date : new Date(req.body.birth_date.toLocaleString().substring(0, 9)),
            birth_date : req.body.birth_date,
            email : req.body.email,
            gender : req.body.gender,
            department: req.body.department
        }
        Interviewer.update(newData, {
            where: {
                id: id
            }
        })
        .then(() => {
            res.redirect('/interviewers')
        })
        .catch((err) => {
            res.send(err)
        })
    }
    static delete(req,res){
        const id = +req.params.id;
        Interviewer.destroy({
            where : {
                id
            }
        })
        .then(() => {
            res.redirect('/interviewers');
        })
        .catch(err => {
            res.send(err);
        })
    }
   
    static lookApplicants(req, res) {
        const id = +req.params.id;

        Interviewer
            .findByPk(id, {
                include : [Applicant]
            })
            .then(data => {
                res.render('lookApplicants', {data, calculateAge, formatDate});
            })
            .catch(err => {
                res.send(err);
            })
    }
        
}
module.exports = Controller