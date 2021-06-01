'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Applicant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    fullName() {
      return `${this.first_name} ${this.last_name}`;
    }

    static associate(models) {
      // define association here
      Applicant.belongsToMany(models.Interviewer, {through : 'ApplicantInterviewer', foreignKey: 'applicant_id'});
    }
  };
  Applicant.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    position: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Applicant',
  });

  Applicant.addHook('afterCreate', (instance) => {
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'h8companyofficial@gmail.com',
        pass: 'h8company8'
      }
    });
    const htmlValue = `
    <h1> Thank you for applying! We will contact you soon!</h1> 
    <h2> From : H8-Company </h2>`

    const emailTo = instance.email;

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
        // console.log('Email sent: ' + info.response); 
        // Perlu tambahin tulisan (email dikirim)
      }
    }); 


  })
  
  return Applicant;
};