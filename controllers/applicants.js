const {Applicant, Interviewer, ApplicantInterviewer} = require('../models/index')
const calculateAge = require('../helpers/calculateAge')
const formatDate = require('../helpers/formatDate')

class Controller {

    static showApplicants(req,res){
        Applicant.findAll({
            include: Interviewer
        })
        .then((data) => {
            
            res.render('applicants', {data, calculateAge})
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
            birth_date : req.body.birth_date,
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
        let dataApplicant = {};
        Applicant.findByPk(id, {include: [Interviewer]})
        .then(data => {
            dataApplicant = data
            return Interviewer.findAll()
        })
        .then((interviewer) => {
            res.render('interviewSchedule', {data:dataApplicant, interviewer, formatDate})
            // res.send(dataApplicant);
        })
        .catch(err => {
            res.send(err);
        }) 
    }

    static schedulingPost(req, res) {
        const id = +req.params.id;
        const newData = {
            applicant_id : id,
            interviewer_id : +req.body.interviewer_id,
            schedule_date : new Date(req.body.schedule_date).setHours(req.body.time.split(':')[0],req.body.time.split(':')[1]),
            interview_type : req.body.interview_type
        }

        ApplicantInterviewer
            .create(newData)
            .then(() => {
                res.redirect(`/applicants/schedule/${id}`);
                // res.send(req.body);
            })
            .catch(err => {
                res.send(err);
            })
    }

    static sendSchedule (req, res) {
        const id = +req.params.id;

        Applicant
            .findByPk(id, {
                include : [Interviewer]
            })
            .then(data => {

                const nodemailer = require('nodemailer');
                const { google } = require('calendar-link');
        
                const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'h8companyofficial@gmail.com',
                    pass: 'h8company8'
                }
                });
        
                // const startDate = new Date();
                let htmlValue = `
                <h1> Here's your interview detail!</h1>
                <br>
                <p>-----------</p>
                `

                // const dataSort = data.Interviewers.sort((a, b) => b.ApplicantInterviewer.schedule_date - a.ApplicantInterviewer.schedule_date);
                data.Interviewers.forEach((el, index) => {
                    let event = {
                        title: `Interview With ${el.fullName()}`,
                        description: "Be there On Time!",
                        start: el.ApplicantInterviewer.schedule_date.toISOString(),
                        duration: [1, "hour"]
                    }
                    htmlValue += `
                    <h2>- Interview With ${el.fullName()}</h2>
                    <h3>Schedule At ${formatDate(el.ApplicantInterviewer.schedule_date)}</h3>
                    <h4>Add to your google calendar so you won't forget!</h4>
                    <p>${google(event)} </p>
                    `
                })
        
                const emailTo = data.email;
        
        
                const mailOptions = {
                    from: 'h8companyofficial@gmail.com',
                    to: emailTo,
                    subject: 'Apply Confirmation',
                    html: htmlValue
                };
        
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                        res.redirect('/applicants');
                    }
                }); 

            })



    }
        
    // static deleteSchedule(req, res) {
    //     const id = +req.params.id;
    //     let applicantId = 0;
    //     ApplicantInterviewer
    //         .findByPk(id)
    //         .then(data => {
    //             applicantId = data.applicant_id;
    //             return ApplicantInterviewer.destroy({
    //                 where : {
    //                     id
    //                 }
    //             })
    //         })
    //         .then(() => {
    //             res.redirect(`/applicants/schedule/${applicantId}`)
    //         })
    //         .catch(err => {
    //             res.send(err);
    //         })
    // }
}
module.exports = Controller